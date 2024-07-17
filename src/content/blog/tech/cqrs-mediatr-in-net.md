---
author: Raghavendra Murthy
pubDatetime: 2023-09-28
title: "CQRS and MediatR in .NET 8: A Deep Dive with Minimal API"
postSlug: cqrs-mediatr-in-net
featured: false
draft: false
categories:
  - Tech
tags:
  - dotnet
  - CQRS
  - mediatr
ogImage: "https://res.cloudinary.com/djsjtqjsp/image/upload/c_thumb,w_200,g_face/v1687518575/raghavendra-murthy-blog/charp_qutet1.png"
description: "In this blog post, we'll explore CQRS and MediatR in the context of .NET 8, using a Minimal API approach with an Employee record as our primary example. We'll cover the basics, dive into implementation details, and discuss the benefits and potential drawbacks of this architecture."
imgSrc: "https://res.cloudinary.com/djsjtqjsp/image/upload/c_thumb,w_300,g_face/v1687518575/raghavendra-murthy-blog/charp_qutet1.png"
readingTime: "20 Mins"
---

![image credits : https://blog.devops.dev/how-to-implementation-cqrs-through-mediatr-in-web-api-c-fb36a352594b](https://miro.medium.com/v2/resize:fit:720/format:webp/1*Sx055_DjodTOmBNsiuUGRQ.png)

## Introduction

As a senior .NET developer, I've seen numerous architectural patterns come and go. However, one pattern that has stood the test of time and continues to gain popularity is CQRS (Command Query Responsibility Segregation). When combined with the MediatR library and implemented in .NET 8's Minimal API, it creates a powerful, efficient, and scalable architecture for modern applications.

In this blog post, we'll explore CQRS and MediatR in the context of .NET 8, using a Minimal API approach with an Employee record as our primary example. We'll cover the basics, dive into implementation details, and discuss the benefits and potential drawbacks of this architecture.

## Table of contents

## Understanding CQRS

CQRS, or Command Query Responsibility Segregation, is an architectural pattern that separates read and write operations for a data store. The fundamental idea behind CQRS is to split an application's operations into two categories:

1. Commands: These are operations that change the state of the system (Create, Update, Delete).
2. Queries: These are operations that read the state of the system without modifying it.

By separating these concerns, we can optimize each path independently, leading to better performance, scalability, and maintainability.

### Benefits of CQRS

1. **Scalability**: Read and write operations can be scaled independently.
2. **Performance**: Queries can be optimized without affecting the command side.
3. **Flexibility**: Different data models can be used for reading and writing.
4. **Simplicity**: Each model (read or write) can be simpler as it only deals with one aspect of the system.

### Potential Drawbacks

1. **Increased Complexity**: Maintaining two models can add complexity to the system.
2. **Eventual Consistency**: If separate databases are used for reads and writes, there may be a delay in data consistency.

## Introducing MediatR

MediatR is a simple, unambitious mediator implementation in .NET. It supports request/response, commands, queries, notifications, and events. MediatR simplifies building CQRS applications by providing a clean way to separate commands and queries.

### Key Concepts in MediatR

1. **Requests and Handlers**: A request is a message sent by the client, and a handler processes that request.
2. **Mediator**: The central point that dispatches requests to the appropriate handlers.
3. **Pipelines**: Allow for pre and post-processing of requests.

## Setting Up the Project

Let's start by setting up a new .NET 8 Minimal API project. We'll use an Employee record as our primary domain model.

```bash
dotnet new web -n CqrsMediatRDemo
cd CqrsMediatRDemo
dotnet add package MediatR
dotnet add package MediatR.Extensions.Microsoft.DependencyInjection
```

## Project Folder Structure

This folder structure organizes the CQRS and MediatR implementation for a Product entity. Here's a brief explanation of each folder:

#### Features/Employees/: Contains all Employee-related features.

#### Commands/: Holds command-related files for creating, updating, and deleting Employees.

#### Queries/: Contains query-related files for retrieving Employees.

#### DTOs/: Stores Data Transfer Objects for Employees.

#### Infrastructure/: Contains cross-cutting concerns.

#### Behaviors/: Holds MediatR pipeline behaviors like logging and validation.

#### Middleware/: Contains custom middleware like the global exception handler.

#### Models/: Stores the domain model for Employee.

#### Validators/: Contains FluentValidation validators for Employee commands.

This structure helps maintain a clean separation of concerns and makes it easy to navigate and maintain the codebase as it grows.

```bash
CqrsMediatRDemo/
├── Features/
│   └── Employees/
│       ├── Commands/
│       │   ├── CreateEmployee/
│       │   │   ├── CreateEmployeeCommand.cs
│       │   │   └── CreateEmployeeCommandHandler.cs
│       │   ├── UpdateEmployee/
│       │   │   ├── UpdateEmployeeCommand.cs
│       │   │   └── UpdateEmployeeCommandHandler.cs
│       │   └── DeleteEmployee/
│       │       ├── DeleteEmployeeCommand.cs
│       │       └── DeleteEmployeeCommandHandler.cs
│       │
│       ├── Queries/
│       │   ├── GetEmployeeById/
│       │   │   ├── GetEmployeeByIdQuery.cs
│       │   │   └── GetEmployeeByIdQueryHandler.cs
│       │   └── GetAllEmployees/
│       │       ├── GetAllEmployeesQuery.cs
│       │       └── GetAllEmployeesQueryHandler.cs
│       │
│       └── DTOs/
│           ├── EmployeeDto.cs
│           └── CreateEmployeeDto.cs
│
├── Infrastructure/
│   ├── Behaviors/
│   │   ├── LoggingBehavior.cs
│   │   └── ValidationBehavior.cs
│   │
│   └── Middleware/
│       └── GlobalExceptionHandlerMiddleware.cs
│
├── Models/
│   └── Employee.cs
│
├── Validators/
│   ├── CreateEmployeeCommandValidator.cs
│   └── UpdateEmployeeCommandValidator.cs
│
├── Program.cs
└── appsettings.json
```

## Defining the Employee Model

First, let's define our Employee record:

```csharp
public record Employee
{
    public int Id { get; init; }
    public string FirstName { get; init; }
    public string LastName { get; init; }
    public string Email { get; init; }
    public DateTime DateOfBirth { get; init; }
    public string Department { get; init; }
}
```

## Implementing CQRS with MediatR

Now, let's implement CQRS using MediatR. We'll create commands and queries for our Employee record.

### Commands

Commands are responsible for changing the state of our system. Let's create a command to add a new employee.

```csharp
public record CreateEmployeeCommand : IRequest<int>
{
    public string FirstName { get; init; }
    public string LastName { get; init; }
    public string Email { get; init; }
    public DateTime DateOfBirth { get; init; }
    public string Department { get; init; }
}

public class CreateEmployeeCommandHandler : IRequestHandler<CreateEmployeeCommand, int>
{
    private static List<Employee> _employees = new();

    public Task<int> Handle(CreateEmployeeCommand request, CancellationToken cancellationToken)
    {
        var employee = new Employee
        {
            Id = _employees.Count + 1,
            FirstName = request.FirstName,
            LastName = request.LastName,
            Email = request.Email,
            DateOfBirth = request.DateOfBirth,
            Department = request.Department
        };

        _employees.Add(employee);

        return Task.FromResult(employee.Id);
    }
}
```

### Queries

Queries are responsible for reading data from our system. Let's create a query to get an employee by ID.

```csharp
public record GetEmployeeByIdQuery(int Id) : IRequest<Employee>;

public class GetEmployeeByIdQueryHandler : IRequestHandler<GetEmployeeByIdQuery, Employee>
{
    private static List<Employee> _employees = new();

    public Task<Employee> Handle(GetEmployeeByIdQuery request, CancellationToken cancellationToken)
    {
        var employee = _employees.FirstOrDefault(e => e.Id == request.Id);
        return Task.FromResult(employee);
    }
}
```

## Configuring MediatR in Program.cs

Now, let's configure MediatR in our `Program.cs` file:

```csharp
using MediatR;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddMediatR(typeof(Program));

var app = builder.Build();

// ... rest of your Program.cs code
```

## Implementing Minimal API Endpoints

With MediatR configured, we can now implement our Minimal API endpoints:

```csharp
app.MapPost("/employees", async (IMediator mediator, CreateEmployeeCommand command) =>
{
    var employeeId = await mediator.Send(command);
    return Results.Created($"/employees/{employeeId}", employeeId);
});

app.MapGet("/employees/{id}", async (IMediator mediator, int id) =>
{
    var employee = await mediator.Send(new GetEmployeeByIdQuery(id));
    return employee is not null ? Results.Ok(employee) : Results.NotFound();
});

app.Run();
```

## Expanding the CQRS Implementation

Let's expand our CQRS implementation to include more operations on the Employee record.

### Update Employee Command

```csharp
public record UpdateEmployeeCommand : IRequest<bool>
{
    public int Id { get; init; }
    public string FirstName { get; init; }
    public string LastName { get; init; }
    public string Email { get; init; }
    public DateTime DateOfBirth { get; init; }
    public string Department { get; init; }
}

public class UpdateEmployeeCommandHandler : IRequestHandler<UpdateEmployeeCommand, bool>
{
    private static List<Employee> _employees = new();

    public Task<bool> Handle(UpdateEmployeeCommand request, CancellationToken cancellationToken)
    {
        var employee = _employees.FirstOrDefault(e => e.Id == request.Id);
        if (employee == null) return Task.FromResult(false);

        var updatedEmployee = employee with
        {
            FirstName = request.FirstName,
            LastName = request.LastName,
            Email = request.Email,
            DateOfBirth = request.DateOfBirth,
            Department = request.Department
        };

        _employees[_employees.IndexOf(employee)] = updatedEmployee;

        return Task.FromResult(true);
    }
}
```

### Delete Employee Command

```csharp
public record DeleteEmployeeCommand(int Id) : IRequest<bool>;

public class DeleteEmployeeCommandHandler : IRequestHandler<DeleteEmployeeCommand, bool>
{
    private static List<Employee> _employees = new();

    public Task<bool> Handle(DeleteEmployeeCommand request, CancellationToken cancellationToken)
    {
        var employee = _employees.FirstOrDefault(e => e.Id == request.Id);
        if (employee == null) return Task.FromResult(false);

        _employees.Remove(employee);
        return Task.FromResult(true);
    }
}
```

### Get All Employees Query

```csharp
public record GetAllEmployeesQuery : IRequest<IEnumerable<Employee>>;

public class GetAllEmployeesQueryHandler : IRequestHandler<GetAllEmployeesQuery, IEnumerable<Employee>>
{
    private static List<Employee> _employees = new();

    public Task<IEnumerable<Employee>> Handle(GetAllEmployeesQuery request, CancellationToken cancellationToken)
    {
        return Task.FromResult(_employees.AsEnumerable());
    }
}
```

## Updating Minimal API Endpoints

Now, let's update our Minimal API endpoints to include these new operations:

```csharp
app.MapPost("/employees", async (IMediator mediator, CreateEmployeeCommand command) =>
{
    var employeeId = await mediator.Send(command);
    return Results.Created($"/employees/{employeeId}", employeeId);
});

app.MapGet("/employees/{id}", async (IMediator mediator, int id) =>
{
    var employee = await mediator.Send(new GetEmployeeByIdQuery(id));
    return employee is not null ? Results.Ok(employee) : Results.NotFound();
});

app.MapGet("/employees", async (IMediator mediator) =>
{
    var employees = await mediator.Send(new GetAllEmployeesQuery());
    return Results.Ok(employees);
});

app.MapPut("/employees/{id}", async (IMediator mediator, int id, UpdateEmployeeCommand command) =>
{
    if (id != command.Id) return Results.BadRequest();
    var result = await mediator.Send(command);
    return result ? Results.NoContent() : Results.NotFound();
});

app.MapDelete("/employees/{id}", async (IMediator mediator, int id) =>
{
    var result = await mediator.Send(new DeleteEmployeeCommand(id));
    return result ? Results.NoContent() : Results.NotFound();
});

app.Run();
```

## Adding Validation with FluentValidation

To ensure data integrity, we can add validation to our commands and queries using FluentValidation. First, install the FluentValidation package:

```bash
dotnet add package FluentValidation
dotnet add package FluentValidation.DependencyInjectionExtensions
```

Now, let's create validators for our commands:

```csharp
public class CreateEmployeeCommandValidator : AbstractValidator<CreateEmployeeCommand>
{
    public CreateEmployeeCommandValidator()
    {
        RuleFor(x => x.FirstName).NotEmpty().MaximumLength(50);
        RuleFor(x => x.LastName).NotEmpty().MaximumLength(50);
        RuleFor(x => x.Email).NotEmpty().EmailAddress();
        RuleFor(x => x.DateOfBirth).NotEmpty().LessThan(DateTime.Now.AddYears(-18));
        RuleFor(x => x.Department).NotEmpty().MaximumLength(50);
    }
}

public class UpdateEmployeeCommandValidator : AbstractValidator<UpdateEmployeeCommand>
{
    public UpdateEmployeeCommandValidator()
    {
        RuleFor(x => x.Id).GreaterThan(0);
        RuleFor(x => x.FirstName).NotEmpty().MaximumLength(50);
        RuleFor(x => x.LastName).NotEmpty().MaximumLength(50);
        RuleFor(x => x.Email).NotEmpty().EmailAddress();
        RuleFor(x => x.DateOfBirth).NotEmpty().LessThan(DateTime.Now.AddYears(-18));
        RuleFor(x => x.Department).NotEmpty().MaximumLength(50);
    }
}
```

To use these validators, we need to create a validation behavior that will be executed before the actual handler:

```csharp
public class ValidationBehavior<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse>
    where TRequest : IRequest<TResponse>
{
    private readonly IEnumerable<IValidator<TRequest>> _validators;

    public ValidationBehavior(IEnumerable<IValidator<TRequest>> validators)
    {
        _validators = validators;
    }

    public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next, CancellationToken cancellationToken)
    {
        if (!_validators.Any()) return await next();

        var context = new ValidationContext<TRequest>(request);
        var validationResults = await Task.WhenAll(_validators.Select(v => v.ValidateAsync(context, cancellationToken)));
        var failures = validationResults.SelectMany(r => r.Errors).Where(f => f != null).ToList();

        if (failures.Count != 0)
            throw new ValidationException(failures);

        return await next();
    }
}
```

Finally, we need to register our validators and the validation behavior in `Program.cs`:

```csharp
builder.Services.AddValidatorsFromAssembly(typeof(Program).Assembly);
builder.Services.AddTransient(typeof(IPipelineBehavior<,>), typeof(ValidationBehavior<,>));
```

## Implementing Logging with MediatR Pipeline

Logging is crucial for monitoring and debugging our application. We can implement logging using MediatR's pipeline behavior. First, let's create a logging behavior:

```csharp
public class LoggingBehavior<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse>
    where TRequest : IRequest<TResponse>
{
    private readonly ILogger<LoggingBehavior<TRequest, TResponse>> _logger;

    public LoggingBehavior(ILogger<LoggingBehavior<TRequest, TResponse>> logger)
    {
        _logger = logger;
    }

    public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next, CancellationToken cancellationToken)
    {
        _logger.LogInformation($"Handling {typeof(TRequest).Name}");
        var response = await next();
        _logger.LogInformation($"Handled {typeof(TResponse).Name}");

        return response;
    }
}
```

Now, register this behavior in `Program.cs`:

```csharp
builder.Services.AddTransient(typeof(IPipelineBehavior<,>), typeof(LoggingBehavior<,>));
```

## Error Handling

To handle errors gracefully, we can create a global exception handler middleware:

```csharp
public class GlobalExceptionHandlerMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<GlobalExceptionHandlerMiddleware> _logger;

    public GlobalExceptionHandlerMiddleware(RequestDelegate next, ILogger<GlobalExceptionHandlerMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "An unhandled exception has occurred.");
            await HandleExceptionAsync(context, ex);
        }
    }

    private static Task HandleExceptionAsync(HttpContext context, Exception exception)
    {
        context.Response.ContentType = "application/json";
        context.Response.StatusCode = exception switch
        {
            ValidationException => StatusCodes.Status400BadRequest,
            KeyNotFoundException => StatusCodes.Status404NotFound,
            _ => StatusCodes.Status500InternalServerError
        };

        return context.Response.WriteAsJsonAsync(new
        {
            context.Response.StatusCode,
            Message = exception.Message
        });
    }
}
```

Register this middleware in `Program.cs`:

```csharp
app.UseMiddleware<GlobalExceptionHandlerMiddleware>();
```

## Performance Considerations

When implementing CQRS with MediatR, it's important to consider performance. Here are some tips:

1. **Use async/await consistently**: Ensure all your handlers use async/await for better scalability.
2. **Implement caching**: For frequently accessed data, implement caching to reduce database load.
3. \*\*Optimize database

## Summary

The blog provides a comprehensive guide to implementing CQRS and MediatR in a
.NET 8 Minimal API application, covering essential aspects such as setup,
implementation, validation, logging, error handling, and project organization.
It serves as a practical introduction for developers looking to adopt these
patterns in their .NET projects.
