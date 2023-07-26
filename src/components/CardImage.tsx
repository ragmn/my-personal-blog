import Datetime from "./Datetime";
import Readingtime from "./Readingtime";
import type { BlogFrontmatter } from "@content/_schemas";

export interface Props {
  href?: string;
  frontmatter: BlogFrontmatter;
  secHeading?: boolean;
}

export default function CardImage({
  href,
  frontmatter,
  secHeading = true,
}: Props) {
  const {
    title,
    pubDatetime,
    description,
    imgSrc,
    imgAlt,
    categories,
    readingTime,
  } = frontmatter;
  return (
    // <li className="">
    <div className="bg-white dark:divide-gray-700 flex flex-col justify-between rounded-lg p-5 shadow-lg">
      <img className="h-44 w-full object-cover" src={imgSrc} alt={imgAlt} />
      <div className="p-4">
        <a
          href={href}
          className="block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
        >
          {secHeading ? (
            <h2 className="text-lg font-medium decoration-dashed hover:underline">
              {title}
            </h2>
          ) : (
            <h3 className="text-lg font-medium decoration-dashed hover:underline">
              {title}
            </h3>
          )}
        </a>
        <div className="mt-2 flex items-center opacity-80">
          <Datetime datetime={pubDatetime} />
          <Readingtime readingTime={readingTime} />|{" "}
          <span className="dark:bg-gray-700 dark:text-green-400 border-green-400 mr-2 rounded border px-2.5 py-0.5 text-xs font-medium font-semibold">
            {categories}
          </span>
        </div>
        <p className="mt-2">{description}</p>
      </div>
    </div>

    // </li>
  );
}
