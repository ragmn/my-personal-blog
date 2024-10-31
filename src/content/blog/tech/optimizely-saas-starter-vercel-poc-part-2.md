---
author: Raghavendra Murthy
pubDatetime: 2024-07-19
title: Getting Started with Optimizely SaaS using Next.js Starter App - Configure local development - Part 2
postSlug: optimizely-saas-starter-vercel-poc-part-2
featured: false
draft: false
categories:
  - Tech
tags:
  - optimizely
  - cms
  - vercel
  - poc
  - nextJS
ogImage: "https://ultimedia.agency/wp-content/uploads/2023/10/optimizely-saas-hero.jpg"
description: "This is part 2 of a proof-of-concept (POC) blog. In this post, I will guide you through the steps to configure your SaaS instance with your local Next.js app and show you seamless content updates published from the SaaS instance."
imgSrc: "https://res.cloudinary.com/djsjtqjsp/image/upload/{value}/v1692111971/raghavendra-murthy-blog/optimizely-vector-logo-2021_ufk1de.png"
readingTime: "5 Mins"
---

![optimizely saas](https://ultimedia.agency/wp-content/uploads/2023/10/optimizely-saas-hero.jpg)

Welcome to part 2 of getting Started with Optimizely proof-of-concept (POC) blog series. In the <a href="/posts/optimizely-saas-starter-vercel-demo/" target="_blank">previous post</a>, we explored how to integrate Optimizely SaaS using a Next.js starter app. This time, I will guide you through configuring your SaaS instance to work seamlessly with your local Next.js application. Additionally, we'll cover how to publish seamless content updates from the SaaS instance. By the end of this guide, you'll have a fully functional setup with your local development environment synchronized with your SaaS platform, enabling real-time updates and extended functionality.

## Prerequisites

1. Completion of Optimizely set up [Part 1](https://raghavendramurthy.com/posts/optimizely-saas-starter-vercel-demo/)
2. <a href="https://code.visualstudio.com/download" target="_blank">Visual Studio Code🡕</a>

## Configure Next.js App locally with Optimizely SaaS

1. Clone the GitHub repository to your local machine, which you deployed in part 1.
2. Go to `.env` file under `apps\frontend` and update the below variables with your Saas instance config values similar to part 1 vercel deployment step.
   - **OPTIMIZELY_CMS_URL** : The URL where the Optimizely CMS can be reached by the build process.
   - **OPTIMIZELY_GRAPH_SECRET** : The Content Graph Secret can be made visible on the CMS Dashboard, within the "Render Content" section.
   - **OPTIMIZELY_GRAPH_APP_KEY** : The Content Graph App key, which is shown on the CMS Dashboard, within the "Render Content" section.
   - **OPTIMIZELY_GRAPH_SINGLE_KEY** : The Content Graph Single key, which is shown on the CMS Dashboard, within the "Render Content" section.
   - **OPTIMIZELY_CMS_CLIENT_ID** : API Client ID configured in the CMS.
   - **OPTIMIZELY_CMS_CLIENT_SECRET** : API Client Secret configured in the CMS.
3. Open the project in VS Code & run a `npm install` or `yarn install` command to install the necessary dependencies & start the development server using below command.

```bash
yarn next dev --experimental-https -p 3000
```

> To connect the SaaS instance to your local host, it must be running securely over HTTPS; otherwise, the visual editor will encounter errors. Running the app using the `yarn next dev` command will start it with only HTTP. Therefore, you need to ensure the app is served over HTTPS to avoid any issues with the visual editor.

4. Launch the app in your browser at `https://localhost:3000` The sample Mosey bank app should now be rendering in you locahost connencted to Saas CMS🎉

![optimizely saas](https://res.cloudinary.com/djsjtqjsp/image/upload/v1721395363/raghavendra-murthy-blog/opt_8_daofll.png)

We have now configured your SaaS instance to work seamlessly with your local Next.js application. By hooking up the local frontend application to the SaaS instance, we facilitate easier development and debugging.The following steps will demonstrate how easily content updates are published from the SaaS instance.

## Seamless content updates published from the SaaS instance

1. Go to CMS
2. Navigate to `Settings > Applications`.
   - Select Application, goto hostnames
   - revert your host name from `https://localhost:3000` to `https://{your-vercel-url}.vercel.app/`(deployed vecel URL)
3. Select any component and edit the content you wish to udpate and publich the changes.

<video autoplay loop muted="muted" plays-inline="true" class="border border-skin-line">
  <source src="https://res.cloudinary.com/djsjtqjsp/video/upload/v1721390965/raghavendra-murthy-blog/Screenshare_-_2024-07-18_5_09_29_PM_s530w3.mp4" type="video/mp4">
</video>
<video autoplay loop muted="muted" plays-inline="true" class="border border-skin-line">
  <source src="https://res.cloudinary.com/djsjtqjsp/video/upload/v1721391467/raghavendra-murthy-blog/Screenshare_-_2024-07-19_1_16_37_PM_bgbeam.mp4" type="video/mp4">
</video>

## Conclusion

You now have a comprehensive understanding of how to configure your SaaS instance to integrate with your local Next.js application. This setup ensures that content updates made in the SaaS instance are instantly reflected in your local development environment, facilitating a smooth and efficient development process. With this foundation in place, you are well-equipped to leverage Optimizely's powerful features to enhance your application's functionality and user experience. Stay tuned for the next installment in this series, where we will explore how to extend a block by adding a new field, render the front-end updates on the app & deploy the feature changes to vercel using feature builds.

## References

Special thanks to [Remko](https://github.com/remkoj), [Patrick](https://world.optimizely.com/System/Users-and-profiles/Community-Profile-Card/?userId=cc6bd837-ed58-4563-b0cb-c71b572fe90e) Opti slack community for their valuable contributions & documentation.

- <a href="https://world.optimizely.com/blogs/patrick-lam/dates/2024/7/create-your-first-demo-site-with-optimizely-saasvisual-builder/" target="_blank">Create your first demo site with Optimizely SaaS🡕</a>
- [GitHub Repository - cms-saas-vercel-demo]()<a href="https://github.com/episerver/cms-saas-vercel-demo" target="_blank">Create your first demo site with Optimizely SaaS🡕</a>
