---
author: Raghavendra Murthy
pubDatetime: 2021-11-25
title: My Favorite C Sharp 10 Features
postSlug: my-favorite-csharp10-features
featured: true
draft: false
categories:
  - Tech
tags:
  - dotnet
  - csharp
ogImage: ""
description: Explore the latest C# 10 features, from improved pattern matching to Global using directives. Discover File-scoped namespace declaration, Value Type Records, Lambda expression improvements, and Constant string interpolation. Let's Elevate the coding skills with these powerful enhancements.
imgSrc: "https://res.cloudinary.com/djsjtqjsp/image/upload/w_96,h_96/v1687518575/raghavendra-murthy-blog/charp_qutet1.png"
imgAlt: "CSharp"
readingTime: "2 Mins"
---

C# 10 was launched in November 2021 alongside .NET 6. This C# 10 release incorporates numerous features, which can be found <a href="https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-10" target="_blank">here🡕.</a> Having delved into the .Net Conf 2021 and Microsoft's documentation, I have compiled a list of my most Favorite C# 10 features.

## Table of contents

## 1. Global using directives

This new language feature allows you to use the `global` modifier with any using directive. It tells the compiler that the directive applies to all files in the project. This helps developers organize all the `using` directives in a single file for a neater appearance.

```ts
//GlobalUsings.cs
global using System;               // namespace applicable for all files
global using YourCustomDirective; // with in the project
global using YourCustomDirective2;
```

This is also linked to a feature in .NET 6 SDK that offers the convenience of implicit `global` using directives. The .NET SDK automatically adds `global using` directives for a predefined set of namespaces, as documented <a href="https://docs.microsoft.com/en-us/dotnet/core/compatibility/sdk/6.0/implicit-namespaces-rc1#new-behavior" target="_blank">here🡕.</a> . To enable this feature in your C# project, simply set the `<ImplicitUsings>` MSBuild property to true or enable it.

## 2. File-scoped namespace declaration

This new feature allows you to organize your code more efficiently by reducing unnecessary indentation. While the language permits the creation of multiple namespaces within a single C# file, it's important to consider standard conventions. Typically, we create a single class and namespace per file. Therefore, in my view, eliminating the need for extra indentation is a wise decision.

```ts
using System;
namespace CSharpPoc;
//extra braces no longer required for namespace
internal class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Hello World!");
    }
}
```

## 3. Value Type Records

In C#9, records were exclusively reference types defined with the record class declaration. However, C#10 introduces a significant change by allowing records to be value types. This means that you can now declare value type records using either the `record struct` or `readonly record struct` declarations.

```ts
public record struct Employee {} //declaring a record as struct
```

```ts
public record struct Employee
{
    public string EmployeName { get; init; } //immutable & Init-only properties are allowed on record structs
    public int  EmployeId { get; init; }
}
```

## 4. Lambda expression improvements

With C#10 there are many improvements to how lambda expressions are handled like

1.  Allow lambdas with attributes
2.  Allow lambdas with explicit return type
3.  Infer a natural delegate type for lambdas and method groups

For example, Lambda expressions may have a natural type, where the compiler can infer a delegate type from the lambda expression or method group.

```
//ASP.NET MapAction with natural types for method groups:
[HttpGet("/")] Todo GetTodo() => new(Id: 0, Name: "Name");
app.MapAction(GetTodo);

[HttpPost("/")] Todo PostTodo([FromBody] Todo todo) => todo);
app.MapAction(PostTodo);

```

More improvements can be found <a href="https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-10#lambda-expression-improvements" target="_blank">here🡕.</a>

## 5. Constant string interpolation

In previous versions of C# (9 or earlier), when we wanted to join two constant strings together, we were required to utilize the concatenation (+) operator instead of interpolation. For instance,

```
// In C# 9
const string path = "/root/path/folder";
const string fullPath = path + "example.pdf";

```

With constant string interpolation in C# 10

```
// C# 10
const string path = "/src/to/my/root";
const string fullPath = $"{path}/example.pdf";

```

## To summarize

In this article, I have shared my insights about several aspects of C# 10. We have explored my top 5 preferred features and provided a brief overview of their usage. I strongly recommend exploring the remaining features of C# 10 in the <a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/proposals/csharp-10.0/record-structs" target="_blank">C# 10 language reference guide🡕.</a>
