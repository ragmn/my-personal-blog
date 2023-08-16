---
author: Raghavendra Murthy
pubDatetime: 2023-03-20
title: "Understanding the basic process of Sandhya Vandanam: A Comprehensive Guide on its Importance and Relevance for Your Spiritual Journey."
postSlug: understanding-sandhya-vandanam
featured: false
draft: false
categories:
  - Others
tags:
  - Sandhyavandhane
  - sanskrit
ogImage: "https://res.cloudinary.com/djsjtqjsp/image/upload/v1688401899/raghavendra-murthy-blog/essentials-nuget-packages_xjbzxe.png"
description: "Understanding the basic process of Sandhya Vandanam: A Comprehensive Guide on its Importance and Relevance for Your Spiritual Journey."
imgSrc: "https://res.cloudinary.com/djsjtqjsp/image/upload/{value}/v1688401899/raghavendra-murthy-blog/essentials-nuget-packages_xjbzxe.png"
imgAlt: "essential nuget packages for dotnet"
readingTime: "4 Mins"
---

## Table of contents

## Meaning

The word "sandhya" means "twilight" in Sanskrit. "Vandanam" means "salutation" or "worship." So, sandhyavandanam literally means "salutation to the twilight." However, it is also used to refer to the prayers that are done during dawn and dusk.
Sandhya Vandanam is an ancient Hindu ritual performed by followers of vedic traditions. It holds immense spiritual significance and involves offering prayers and salutations to the divine during the transition periods of the day. This post aims to explore the essence of Sandhya Vandanam, its importance, and provide a simple meaning on the mantras chanted during this ritual.

| Process                      | Description                                                                                                                                                                                                                                                                                  |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Achamana**                 | Purification ritual involving sipping water, cleansing body by touching various parts and chanting 24 names of lord Vishnu to prepare for worship                                                                                                                                            |
| **Pranayama**                | Controlled breathing exercises to regulate vital energy (prana) and focus the mind by chanting Gayatri mantra                                                                                                                                                                                |
| **Sankalpa**                 | A heartfelt vow or intention declared before starting the ritual, aligning actions with purpose                                                                                                                                                                                              |
| **Marjana**                  | Process of purifying oneself by Sprinkling water and praising the divine power of water                                                                                                                                                                                                      |
| **Mantrachanam**             | Recitation of specific mantras seeking protection from the divine forces represented by Surya, Manu, and the Lords of anger process & to remove sins                                                                                                                                         |
| **Dvitiya Marjanam**         | Secondary cleansing ritual reinforcing purity by sprinkling water and praising the divine power of water                                                                                                                                                                                     |
| **Aghamarshana**             | Ritualistic cleansing of sins and impurities using purifying power of water to wash over me & seeking forgiveness                                                                                                                                                                            |
| **Arghya Pradhana**          | A standing ritual is performed, with water being offered to the sun as an expression of respect and gratitude, while the Gayatri mantra is chanted - three times.                                                                                                                            |
| **Tarpana**                  | Offering water with mantras to ancestors, paying homage and seeking their blessings                                                                                                                                                                                                          |
| **Bhootochhatanam**          | Using hand gestures and mantras, you create a protective circle around yourself. It's like making an invisible shield from negative energies.                                                                                                                                                |
| **Aasanam**                  | Sitting posture, establishing stability and comfort for meditation.                                                                                                                                                                                                                          |
| **Gayatri Avahana Vishesha** | Invoking the Gayatri mantra, symbolizing divine universal wisdom and illumination.                                                                                                                                                                                                           |
| **Karanyas**                 | Touching specific body parts while reciting mantras to invoke divine energies.                                                                                                                                                                                                               |
| **Anganyas**                 | Similar to Karanyas, invoking deities through touch on different body parts.                                                                                                                                                                                                                 |
| **Aarahanam**                | The practitioner seeks the presence of the goddess and inviting deities to reside in the heart and mind, establishing a connection while singing, acknowledging her as Gayatri.                                                                                                              |
| **Dhyanam**                  | The meditation involves visualization of different aspects of this form, attributing specific characteristics to different body parts and deities. The mantra, with twenty-four syllables, including references to Gayatri, Savitri, and Saraswati, is recited to please Lakshmi Narayana.   |
| **Gayatri Japa**             | Repetition of the Gayatri mantra, seeking spiritual insight and transformation.                                                                                                                                                                                                              |
| **Sandhyapostana**           | Invocations to Mitra, praising him as a listener and supporter of truth, and acknowledges his role in sustaining the world                                                                                                                                                                   |
| **Dikku Namaskara**          | Salutations to the cardinal directions - East, South, West, North, East-Sky (up), East-Earth (down), East-Inner (oneself) by acknowledging divine presence everywhere.                                                                                                                       |
| **Gayatri Dwasanam**         | Acknowledging the structure and composition of the Gayatri mantra and also seeking blessings and auspiciousness.                                                                                                                                                                             |
| **Japastala Prokshanam**     | Sprinkling water while chanting mantra, purifying the space and mind & Invoke blessings from the deity Savita for prosperity and positive experiences. Also, In case of errors during practice, the practitioner seeks forgiveness by chanting the names 'Achyuta,' 'Ananta,' and 'Govinda.' |

Only `title`, `description` and `pubDatetime` fields in frontmatter must be specified.

Title and description (excerpt) are important for search engine optimization (SEO) and thus AstroPaper encourages to include these in blog posts.

`slug` is the unique identifier of the url. Thus, `slug` must be unique and different from other posts. The whitespace of `slug` needs to be separated with `-` or `_` but `-` is recommended. However, even if you don't write the correct slug, AstroPaper will automatically slugify your incorrect slug. If slug is not specified, the slugified title of the post will be used as slug.

If you omit `tags` in a blog post (in other words, if no tag is specified), the default tag `others` will be used as a tag for that post. You can set the default tag in the `/src/content/_schemas.ts` file.

```ts
// src/contents/_schemas.ts
export const blogSchema = z.object({
  // ---
  // replace "others" with whatever you want
  tags: z.array(z.string()).default(["others"]),
  ogImage: z.string().optional(),
  description: z.string(),
});
```

### Sample Frontmatter

Here is the sample frontmatter for a post.

```yaml
# src/contents/sample-post.md
---
title: The title of the post
author: your name
pubDatetime: 2022-09-21T05:17:19Z
postSlug: the-title-of-the-post
featured: false
draft: false
tags:
  - some
  - example
  - tags
ogImage: ""
description: This is the example description of the example post.
---
```

## Adding table of contents

By default, a post (article) does not include any table of contents (toc). To include toc, you have to specify it in a specific way.

Write `Table of contents` in h2 format (## in markdown) and place it where you want it to be appeared on the post.

For instance, if you want to place your table of contents just under the intro paragraph (like I usually do), you can do that in the following way.

```md
---
# some frontmatter
---

Here are some recommendations, tips & ticks for creating new posts in AstroPaper blog theme.

## Table of contents

<!-- the rest of the post -->
```

## Headings

There's one thing to note about headings. The AstroPaper blog posts use title (title in the frontmatter) as the main heading of the post. Therefore, the rest of the heading in the post should be using h2 \~ h6.

This rule is not mandatory, but highly recommended for visual, accessibility and SEO purposes.

| Process                  | Description                                                                                                                                                                                                                                                                                |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Achamana                 | Purification ritual involving sipping water, cleansing body by touching various parts by chanting 24 names of lord Vishnu with his to prepare for worship                                                                                                                                  |
| Pranayama                | Controlled breathing exercises to regulate vital energy (prana) and focus the mind by chanting Gayatri mantra                                                                                                                                                                              |
| Sankalpa                 | A heartfelt vow or intention declared before starting the ritual, aligning actions with purpose                                                                                                                                                                                            |
| Marjana                  | Process of purifying oneself by Sprinkling water and praising the divine power of water                                                                                                                                                                                                    |
| Mantrachanam             | Recitation of specific mantras seeking protection from the divine forces represented by Surya, Manu, and the Lords of anger process & to remove sins                                                                                                                                       |
| Dvitiya Marjanam         | Secondary cleansing ritual reinforcing purity by sprinkling water and praising the divine power of water                                                                                                                                                                                   |
| Aghamarshana             | Ritualistic cleansing of sins and impurities using purifying power of water to wash over me & seeking forgiveness                                                                                                                                                                          |
| Arghya Pradhana          | A standing ritual is performed, with water being offered to the sun as an expression of respect and gratitude, while the Gayatri mantra is chanted - three times.                                                                                                                          |
| Tarpana                  | Offering water with mantras to ancestors, paying homage and seeking their blessings                                                                                                                                                                                                        |
| Bhootochhatanam          | Using hand gestures and mantras, you create a protective circle around yourself. It's like making an invisible shield from negative energies.                                                                                                                                              |
| Aasanam                  | Sitting posture, establishing stability and comfort for meditation.                                                                                                                                                                                                                        |
| Gayatri Avahana Vishesha | Invoking the Gayatri mantra, symbolizing divine universal wisdom and illumination.                                                                                                                                                                                                         |
| Karanyas                 | Touching specific body parts while reciting mantras to invoke divine energies.                                                                                                                                                                                                             |
| Anganyas                 | Similar to Karanyas, invoking deities through touch on different body parts.                                                                                                                                                                                                               |
| Aarahanam                | The practitioner seeks the presence of the goddess and inviting deities to reside in the heart and mind, establishing a connection while singing, acknowledging her as Gayatri.                                                                                                            |
| Dhyanam                  | The meditation involves visualization of different aspects of this form, attributing specific characteristics to different body parts and deities. The mantra, with twenty-four syllables, including references to Gayatri, Savitri, and Saraswati, is recited to please Lakshmi Narayana. |
| Gayatri Japa             | Repetition of the Gayatri mantra, seeking spiritual insight and transformation.                                                                                                                                                                                                            |
| Sandhyapostana           | Invocations to Mitra, praising him as a listener and supporter of truth, and acknowledges his role in sustaining the world                                                                                                                                                                 |
| Dikku Namaskara          | Salutations to the cardinal directions - East, South, West, North, East-Sky (up), East-Earth (down), East-Inner (oneself) by acknowledging divine presence everywhere.                                                                                                                     |
| Gayatri Dwasanam         | Acknowledging the structure and composition of the Gayatri mantra and also seeking blessings and auspiciousness.                                                                                                                                                                           |
| Gayatri Dwasanam         | Invokes blessings from the deity Savita for prosperity and positive experiences. Also, In case of errors during practice, the practitioner seeks forgiveness by chanting the names 'Achyuta,' 'Ananta,' and 'Govinda.'                                                                     |

## Bonus

### Image compression

When you put images in the blog post, it is recommended that the image is compressed. This will affect the overall performance of the website.

My recommendation for image compression sites.

- [TinyPng](https://tinypng.com/)
- [TinyJPG](https://tinyjpg.com/)

### OG Image

The default OG image will be placed if a post does not specify the OG image. Though not required, OG image related to the post should be specify in the frontmatter. The recommended size for OG image is **_1200 X 640_** px.

> Since AstroPaper v1.4.0, OG images will be generated automatically if not specified. Check out [the announcement](https://astro-paper.pages.dev/posts/dynamic-og-image-generation-in-astropaper-blog-posts/).
