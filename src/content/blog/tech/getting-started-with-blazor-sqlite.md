---
author: Raghavendra Murthy
pubDatetime: 2022-01-10
title: Blazor & SQLite - Auth POC
postSlug: getting-started-with-blazor-sqlite
featured: false
draft: false
categories:
  - Tech
tags:
  - dotnet
  - blazor
  - SQLite
ogImage: ""
description: "Discover Blazor + SQLite: Learn the essentials and unleash powerful web development with this dynamic duo. Get started now!"
imgSrc: "https://res.cloudinary.com/djsjtqjsp/image/upload/w_96,h_96/v1687551068/raghavendra-murthy-blog/blazor_f3hvam.png"
imgAlt: "Blazor & SQLite"
readingTime: "3 Mins"
---

## Table of contents

## Blazor

<a href="https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor" target="_blank">Blazor🡕</a> is a open-source SPA web framework developed by Microsoft that helps developers to build web apps using C# instead of JavaScript. Blazor is a feature from existing ASP.NET framework and this enables possibility for .NET C# developer to build Modern webapps by using C#, HTML, and CSS. Both client and server code is written in C#, allowing you to share code and libraries.

![Blazor App](https://res.cloudinary.com/djsjtqjsp/image/upload/v1687551145/raghavendra-murthy-blog/screenshot-blazor-sample_ixd7sr.gif)

### Blazor app hosting option

- **Blazor Web Assembly** executes on the client-side within the browser. This implies that the complete application is downloaded to the web browser and executed there. As a result, the initial loading time is relatively long, but subsequent server loads are greatly reduced. It can function as a Progressive Web App, enabling users to install the app on their device and use it without requiring network access..

- **Blazor server-side** where pre-renders HTML content before it is sent to the client’s browser which is similar to ASP.NET web forms architecture.

## SQLite

<a href="https://www.sqlite.org/index.html" target="_blank">SQLite🡕</a> is a server-less database and is self-contained. This is also referred to as an embedded database which means the DB engine runs as a part of the app. This is a great tool to set up quick development POCs within no time that requires database interaction. Very handy especially when we don't have SQL server handy. You could also install SQLite extension for Visual Studio.

## Steps

- In Visual Studio, create a new Blazor Server App, choose Individual Accounts for ASP.NET Identity
  ![Blazor App](https://res.cloudinary.com/djsjtqjsp/image/upload/v1687552361/raghavendra-murthy-blog/1_gvwyrn.png)
- Install nuget package `Microsoft.EntityFrameworkCore.Sqlite`
- Modify `appsettings.json` file to include `SqliteConnection` connection(create the database file on the project root) as follows
  ```cs
  "ConnectionStrings": {
    "SqliteConnection": "Data Source=SqliteDB"
    },
  ```
  - goto `Program.cs` & change the connection settings to use SQLite connection as follows
  ```cs
  // Add services to the container.
  var connectionString = builder.Configuration.GetConnectionString("SqliteConnection");
  builder.Services.AddDbContext<ApplicationDbContext>(options =>
  options.UseSqlite(connectionString));
  ```
- By Default, the Data Migration scripts are on SQL server & SQLite scripts doesn't support `NVARCHAR(MAX)` & hence replace them with `maxLength: 256`
- Goto Package Manager Console & run `Update-Database` to create database on SQLite.
- run the application & try to register a user
  ![Blazor App](https://res.cloudinary.com/djsjtqjsp/image/upload/v1687553937/raghavendra-murthy-blog/demo_xgykw3.gif)

## Repo

Please feel free to refer the <a href="https://github.com/ragmn/BlazorAppSQLitePOC" target="_blank">github repository🡕</a>

## Summary

In this proof-of-concept (POC), we have learned the process of setting up a Blazor server application and configuring a SQLite database to be used for individual user Microsoft Identity. The User Identity feature can be extended and customized according to specific requirements, and I plan to document these details in separate upcoming blog posts.

**Good luck, and keep Learning!!**
