---
author: Raghavendra Murthy
pubDatetime: 2024-07-17
title: Getting Started with Optimizely SaaS using Next.js Starter App - Deployment to Vercel
postSlug: optimizely-saas-starter-vercel-demo
featured: true
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
description: "In this proof-of-concept (POC) blog, I will walk you through the steps to get started with Optimizely SaaS using a Next.js starter app and deploy it to Vercel. This guide assumes you have access to the SaaS version of Optimizely CMS, a Vercel account, and a GitHub account."
imgSrc: "https://res.cloudinary.com/djsjtqjsp/image/upload/{value}/v1692111971/raghavendra-murthy-blog/optimizely-vector-logo-2021_ufk1de.png"
readingTime: "10 Mins"
---

![optimizely saas](https://ultimedia.agency/wp-content/uploads/2023/10/optimizely-saas-hero.jpg)

In this getting Started with Optimizely proof-of-concept (POC) blog series, I will walk you through the steps to get started with Optimizely SaaS using a Next.js starter app and deploy it to Vercel. This guide assumes you have access to the SaaS version of Optimizely CMS, a Vercel account, and a GitHub account.

## Prerequisites

1. Access to Optimizely SaaS Beta | <a href="https://www.optimizely.com/beta-signup/" target="_blank">Sign up for Optimizely SaaS Beta🡕</a>
2. Vercel Hobby Account | <a href="https://vercel.com/signup" target="_blank">Sign up for Vercel Hobby Account🡕</a>
3. GitHub account | <a href="https://github.com/join" target="_blank">Sign up for GitHub🡕</a>

## Step 1: Import Sample Data in Optimizely SaaS

1. **Log in to Optimizely SaaS**: Use your Opti ID to log in to the Optimizely CMS.
2. **Import Sample Data**:
   - [Downlaod](https://world.optimizely.com/globalassets/downloads/moseybank-2.episerverdata) the sample "Mosey Bank" data and import it.
   - Navigate to `Settings > Import Data > Choose File`.
   - Choose Root path under content tree.
   - Click `Begin Import`.

![optimizely saas](https://res.cloudinary.com/djsjtqjsp/image/upload/v1721214490/raghavendra-murthy-blog/opti_clsnl3.png)

## Step 2: Generate a Graph Token

- Go to `Settings > API Clients`.
- Create a new API client and generate the key/secret.
- Note down the generated key and secret for later use.
  ![optimizely saas](https://res.cloudinary.com/djsjtqjsp/image/upload/v1721214732/raghavendra-murthy-blog/opti_2_s97n0m.png)

## Step 3: Clone the Repository and Deploy to Vercel

- Go to the <a href="https://github.com/episerver/cms-saas-vercel-demo?tab=readme-ov-file" target="_blank">GitHub repository🡕</a>.
- Click the "Deploy" button in the readme section to deploy this site to your Vercel Account.
- Create repository.
  ![optimizely saas](https://res.cloudinary.com/djsjtqjsp/image/upload/v1721225406/raghavendra-murthy-blog/opti_3_gkiqvy.png)
- Configure the Environmnet variables & click deploy
  ![optimizely saas](https://res.cloudinary.com/djsjtqjsp/image/upload/v1721227187/raghavendra-murthy-blog/opti_4_ludmxq.png)

#### Environment Variable

- **OPTIMIZELY_CMS_URL** : The URL where the Optimizely CMS can be reached by the build process; for example: https://example.cms.optimizely.com/
- **OPTIMIZELY_GRAPH_SECRET** : The Content Graph Secret can be made visible on the CMS Dashboard, within the "Render Content" section.
- **OPTIMIZELY_GRAPH_APP_KEY** : The Content Graph App key, which is shown on the CMS Dashboard, within the "Render Content" section.
- **OPTIMIZELY_GRAPH_SINGLE_KEY** : The Content Graph Single key, which is shown on the CMS Dashboard, within the "Render Content" section.
- **SITE_DOMAIN** : Vercel app URL(to be added later after deployment to configure visual editor)

![optimizely saas](https://res.cloudinary.com/djsjtqjsp/image/upload/v1721227227/raghavendra-murthy-blog/opti_5_grtnfe.png)

Once the deployment is successful, your sample starter Mosey Bank website should be up & running, rendering data from Opti SaaS.
![optimizely saas](https://res.cloudinary.com/djsjtqjsp/image/upload/v1721230226/raghavendra-murthy-blog/opt7_dpbtro.png)

## Step 4: Configure the visual editor in CMS

- Copy the Vercel hosted public URL.
- Go to `Settings > Application` in Optimizely CMS.
- Create a new Create Website Application and give it a name.
- Choose Start page as Mosey Bank root
- Click Create Website.
- Select created Application & go to hostnames
- Click hostname. Add the copied Vercel URL as hostname & select `en` as locale.
  ![optimizely saas](https://res.cloudinary.com/djsjtqjsp/image/upload/v1721228792/raghavendra-murthy-blog/ezgif-1-46dd7f12c2_bu8ngf.gif)

## Step 5: Verify the Deployment 🎉

- Navigate to the CMS edit section in Optimizely.
- Verify that the visual editor is running & displaying the imported sample data.

![optimizely saas](https://res.cloudinary.com/djsjtqjsp/image/upload/v1721229471/raghavendra-murthy-blog/opt_6_ezp9is.png)

## Conclusion

By following these steps, you have successfully set up an Optimizely SaaS environment, imported sample data, and deployed a Next.js starter app to Vercel. You can now explore and customize the application further to suit your needs. In the next part, we will explore how to configure local environgment, make content edits, extend a component to test the IRS & feature deployments in vercel.

## References

Special thanks to [Remko](https://github.com/remkoj) and [Patrick](https://world.optimizely.com/System/Users-and-profiles/Community-Profile-Card/?userId=cc6bd837-ed58-4563-b0cb-c71b572fe90e) for their valuable contributions & documentation.

- <a href="https://world.optimizely.com/blogs/patrick-lam/dates/2024/7/create-your-first-demo-site-with-optimizely-saasvisual-builder/" target="_blank">Create your first demo site with Optimizely SaaS🡕</a>
- [GitHub Repository - cms-saas-vercel-demo]()<a href="https://github.com/episerver/cms-saas-vercel-demo" target="_blank">Create your first demo site with Optimizely SaaS🡕</a>
