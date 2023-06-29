import Datetime from "./Datetime";
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
  const { title, pubDatetime, description, imgSrc, imgAlt, categories } =
    frontmatter;
  return (
    <li className="">
      <div className="divide-gray-200 dark:divide-gray-700 divide-y">
        <div className="pb-3 sm:pb-4">
          <div className="flex flex-col items-start items-center space-x-4 sm:flex-row sm:items-center">
            <div className="flex-shrink-0">
              <img
                className="h-28 w-28 sm:h-24 sm:w-24"
                width="200px"
                src={imgSrc}
                alt={imgAlt}
              />
            </div>
            <div className="">
              <a
                href={href}
                className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
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
              <div className={`flex items-center opacity-80`}>
                <Datetime datetime={pubDatetime} /> |{" "}
                <span className="dark:bg-gray-700 dark:text-green-400 border-green-400 mr-2 rounded border px-2.5 py-0.5 text-xs font-medium font-semibold">
                  {categories}
                </span>
              </div>
              {description}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
