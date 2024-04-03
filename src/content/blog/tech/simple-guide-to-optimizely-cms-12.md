---
author: Raghavendra Murthy
pubDatetime: 2023-06-20
title: A simple guide to getting started with Optimizely CMS 12
postSlug: simple-guide-to-optimizely-cms-12
featured: false
draft: false
categories:
  - Tech
tags:
  - dotnet
  - optimizely
  - cms
ogImage: "https://res.cloudinary.com/djsjtqjsp/image/upload/q_auto/v1692111971/raghavendra-murthy-blog/optimizely-vector-logo-2021_ufk1de.png"
description: "This step-by-step guide provides you with all the essential information and resources you need to seamlessly navigate the powerful world of Optimizely CMS 12"
imgSrc: "https://res.cloudinary.com/djsjtqjsp/image/upload/{value}/v1692111971/raghavendra-murthy-blog/optimizely-vector-logo-2021_ufk1de.png"
imgAlt: "optimizely cms"
readingTime: "3 Mins"
---

![essential nuget packages for dotnet](https://seekvectorlogo.com/wp-content/uploads/2021/12/optimizely-vector-logo-2021.png)

Optimizely (previously known as Episerver) CMS is a powerful content management system that empowers developers to effortlessly build and manage dynamic websites. In this blog series, we'll explore the various features of Optimizely CMS in detail. But for now, let's concentrate on `Part-1` - The step-by-step guide to creating a sample Optimizely CMS website using the Episerver CMS Visual Studio extensions.

## Table of contents

## Developer prerequisites

To excel in your Optimizely development projects, it's important to possess a solid grasp of the following domains:

- [`HTML`](https://www.w3schools.com/html/html_intro.asp) and [`CSS`](https://www.w3schools.com/css/css_intro.asp)
- [`ASP.NET Core`](https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-5.0) and & [`C#`](https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp)
- A good IDE like [Microsoft Visual Studio](https://www.visualstudio.com/) or [Visual Studio Code](https://code.visualstudio.com/)
- [Microsoft SQL Server](https://www.microsoft.com/en-us/sql-server/)
- Install [Visual Studio extensions for Episerver CMS](https://world.optimizely.com/download/Items/Episerver-CMS/visual-studio-cms-extensions/)

Optimizely's Content Management System (CMS) utilizes Microsoft technology and ASP.NET Core for web development. It stores data in the SQL Server database and employs a framework API for multiple products in the Optimizely platform.

![Optimizely System Diagram](https://res.cloudinary.com/djsjtqjsp/image/upload/q_auto/v1688474519/raghavendra-murthy-blog/sd_dryhtb.png)

## Step by step guide

1. Launch Visual Studio and choose "Create New Project."
2. After installing the [Visual Studio extensions for Episerver CMS](https://world.optimizely.com/download/Items/Episerver-CMS/visual-studio-cms-extensions/) , you will be able to select the sample template "Optimizely Alloy MVC (Episerver AB)" and proceed by clicking "Next."
   ![Visual Studio extensions for Episerver CMS](https://res.cloudinary.com/djsjtqjsp/image/upload/q_auto/v1688474783/raghavendra-murthy-blog/epi-1_e3gjbb.png)
3. Provide an appropriate project name and target location, then select "Next" and click on "Create."
4. After the project is successfully created, you can observe the default structure of the Optimizely CMS template in the Solution Explorer.
   ![Optimizely Folder Structure](https://res.cloudinary.com/djsjtqjsp/image/upload/q_auto/v1688475180/raghavendra-murthy-blog/epi-3_icgfn7.png)
   - The `App_Data` folder stores database files and blobs that hold media files.
   - Within the Business folder, you'll find the business logic and extension methods.
   - The Models folder houses content models within the CMS database.
   - The Components folder contains CMS component data models.
   - The Controllers and Views folder offers CMS templates.
   - The Module folder includes shell models and any installed add-ons.
   - Please review the `appsettings.development.config` file for the database connection string and default CMS mapped roles.
5. Run the project in Run without Debugging mode(Ctrl + F5)
6. You will be prompted to register inital user credentials. Enter username, password & click register.
   ![Optimizely login](https://res.cloudinary.com/djsjtqjsp/image/upload/q_auto/v1688474519/raghavendra-murthy-blog/sc-opti-4_sgoxlm.png)
7. The default website of the Optimizely CMS will now be visible and operational.
   ![Optimizely CMS](https://res.cloudinary.com/djsjtqjsp/image/upload/q_auto/v1688474519/raghavendra-murthy-blog/sc-opti-2_jatuua.png)
8. After logging in, the Blue Edit CMS button will be visible in the right corner. Click on it to access the CMS edit mode. On the left, you will find the page tree, and on the right, you will see the content editor.
   ![Optimizely CMS Edit mode](https://res.cloudinary.com/djsjtqjsp/image/upload/q_auto/v1688474519/raghavendra-murthy-blog/sc-opti-3_mbkvr4.png)
9. Take note of the content area outlined in blue and the components positioned within the pages. Modify the content as needed, and it will be automatically saved. When you make content updates, a Publish option will appear. Click the preview button to see a preview of the website changes. You can also publish the changes and click "View" on the website.
10. Discover the different panels in the CMS editor that correspond to functionalities such as Recent items, media, blocks, etc.
11. Go to the Admin section to access the different Content Types configured in the CMS.
    ![Optimizely CMS Admin Tab Content Type](https://res.cloudinary.com/djsjtqjsp/image/upload/q_auto/v1688474519/raghavendra-murthy-blog/sc-opti-1_uhzahx.png)

## Conclusion

Congratulations! You have successfully completed the step-by-step guide to getting started with Optimizely CMS. By now, you should have a good understanding of how to create a sample Optimizely CMS website and explore its features. In the next episode, we will delve deeper into the CMS's top navigational features.

For more detailed information and advanced features, please refer to the official Episerver documentation at https://docs.developers.optimizely.com/

**Good luck, and keep Learning!!**
