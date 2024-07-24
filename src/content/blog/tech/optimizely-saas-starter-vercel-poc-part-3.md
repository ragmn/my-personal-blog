---
author: Raghavendra Murthy
pubDatetime: 2024-07-23
title: Getting Started with Optimizely SaaS using Next.js Starter App - Extend a component - Part 3
postSlug: optimizely-saas-starter-vercel-poc-part-3
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
description: "This is the final part of our Optimizely SaaS CMS proof-of-concept (POC) blog series. In this post, we'll dive into extending a component within the CMS and rendering it in the frontend application. Additionally, we'll explore the workflow of making changes in a feature branch, pushing these changes, and observing the deployment on Vercel with the Vercel Toolbar option."
imgSrc: "https://res.cloudinary.com/djsjtqjsp/image/upload/{value}/v1692111971/raghavendra-murthy-blog/optimizely-vector-logo-2021_ufk1de.png"
readingTime: "8 Mins"
---

![optimizely saas](https://ultimedia.agency/wp-content/uploads/2023/10/optimizely-saas-hero.jpg)

Welcome to the final part of our Optimizely SaaS CMS proof-of-concept (POC) blog series. In the <a href="/posts/optimizely-saas-starter-vercel-poc-part-2/" target="_blank">previous post</a>, we explored how to configure your SaaS instance to integrate with your local Next.js application, where content updates made in the SaaS instance are instantly reflected in your local development environment. This time, we'll dive into extending a component within the CMS and rendering it in the frontend application. Additionally, we'll explore the workflow of making changes in a feature branch, pushing these changes, and observing the deployment on Vercel with the Vercel Toolbar option.

## Prerequisites

1. Completion of Optimizely set up [Part 2](/posts/optimizely-saas-starter-vercel-poc-part-2)
2. <a href="https://code.visualstudio.com/download" target="_blank">Visual Studio Code🡕</a>

## CMS - Extending a Blog Post page type with a new property

1. Log in to Optimizely SaaS
2. Go to `Settings > Content Types`.
3. Add a new string property called `Reading Time(ReadingTime)` to `Blog post` page type under the `content` tab. Save the changes.
4. Go to `Settings > Scheduled Jobs` run `Optimizely Graph Delta Synchronization` job to synchronizes the content changes.
5. Navigate to `CMS edit > Content tree` select any blog post page and change to All Property view.
6. Edit the `Reading Time` property, add sample value and publish the changes the changes.

## Next.js - Render the new property in the frontend

1. Open the `appa/frontend/functions.ts` file.
2. Append the new property `readingTime` to both `getContentById()` & `getContentByPath()` under `BlogPostPageData` fragment GQL queries.

```javascript
fragment BlogPostPageData on BlogPostPage {
  blogTitle: Heading
  readingTime: ReadingTime
  blogSubtitle: ArticleSubHeading
  blogImage: BlogPostPromoImage {
    ...ReferenceData
  }
  blogBody: BlogPostBody {
    json
  }
  blogAuthor: ArticleAuthor
}

```

3. Open the `pages/blog-post-page/index.tsx` file.
4. In the Component definition & destructuring section, extend the new property called `readingTime:time` to the `BlogPostPage` object at the top of the page.

```javascript
data: {
  blogTitle: title,
  blogImage: image,
  readingTime: time,
  blogBody: description,
  blogAuthor: author,
  blogSubtitle: subtitle
}
```

5. In the CMS editable rendering structure, add a new `<CmsEditable>` component to render the `readingTime` property.

```javascript
<CmsEditable
  cmsFieldName="ReadingTime"
  as="p"
  className="mb-[24px] text-[12px]"
>
  {time ?? ""}
</CmsEditable>
```

6. Save the changes, run, and observe the new property changes in the frontend at `https://localhost:3000`.
7. Log in to Optimizely SaaS where the application is configured to use the local development environment at `https://localhost:3000`.
8. In CMS Edit, go to any blog post page and edit the `Reading Time` property using the in-line editing feature 🎉.

<video autoplay loop muted="muted" plays-inline="true" class="border border-skin-line">
  <source src="https://res.cloudinary.com/djsjtqjsp/video/upload/v1721745739/raghavendra-murthy-blog/opti-demo_lcmsgz.mp4" type="video/mp4">
</video>

## Vercel - Deploy the changes to Vercel

Vercel's Git integration streamlines the development process by automatically generating Preview Deployments for each pull or merge request on feature branches. This functionality empowers developers to thoroughly evaluate new features and modifications in isolated environments prior to merging with the main branch. The Comments feature facilitates real-time feedback on these preview environments, enhancing collaboration. Additionally, the Vercel Dashboard offers the flexibility to deploy specific commits or the most recent changes from a branch, giving developers precise control over their deployments.

1. Using git, create a new feature branch for the changes made in the previous step.
2. Commit the feature branch changes and push the changes to the remote repository.
3. Navigate to the Vercel dashboard, select the project, and go to Active Branches to view the new feature branch build in progress.
4. Once the build is completed, the new changes should be automatically deployed to the Vercel feature branch environment with the amazing Vercel toolbar.

![optimizely saas](https://res.cloudinary.com/djsjtqjsp/image/upload/v1721746272/raghavendra-murthy-blog/vercel-build_v7bgnm.png)
![optimizely saas](https://res.cloudinary.com/djsjtqjsp/image/upload/v1721747330/raghavendra-murthy-blog/vercel-toolbar_whxus2.png)

**Additional exploration:** Vercel provides comprehensive support for feature flags. Check out their [documentation](https://vercel.com/docs/workflow-collaboration/feature-flags) for more details!

By combining feature flags with feature branch builds, developers can safely experiment, conduct A/B tests, and gradually roll out new features while minimizing risks and improving the overall development process.

## Conclusion

In the final segment of our Optimizely SaaS CMS proof-of-concept (POC) blog series, we wrap up by focusing on enhancing your CMS experience with advanced functionalities. Building upon our previous discussion where we configured the SaaS instance to seamlessly integrate with a local Next.js application, we'll now delve into extending CMS components and rendering these enhancements in the frontend application. This final post will also guide you through the process of managing feature branches, pushing updates, and utilizing the Vercel Toolbar to monitor deployments. By the end, you'll have a comprehensive understanding of how to leverage Optimizely SaaS CMS to its full potential, ensuring a streamlined development workflow and efficient content management.

## References

Special thanks to [Remko](https://github.com/remkoj), [Patrick](https://world.optimizely.com/System/Users-and-profiles/Community-Profile-Card/?userId=cc6bd837-ed58-4563-b0cb-c71b572fe90e) Opti slack community for their valuable contributions & documentation.

- <a href="https://world.optimizely.com/blogs/patrick-lam/dates/2024/7/create-your-first-demo-site-with-optimizely-saasvisual-builder/" target="_blank">Create your first demo site with Optimizely SaaS🡕</a>
- [GitHub Repository - cms-saas-vercel-demo]()<a href="https://github.com/episerver/cms-saas-vercel-demo" target="_blank">Create your first demo site with Optimizely SaaS🡕</a>
