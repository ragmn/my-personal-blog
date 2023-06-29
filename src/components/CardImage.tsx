import Datetime from "./Datetime";
import type { BlogFrontmatter } from "@content/_schemas";

export interface Props {
  href?: string;
  frontmatter: BlogFrontmatter;
  secHeading?: boolean;
}

export default function CardImage({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, description, imgSrc,imgAlt } = frontmatter;
  return (
    <li>
   <div className="divide-y divide-gray-200 dark:divide-gray-700">
  <div className="pb-3 sm:pb-4">
    <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-4 items-center">
      <div className="flex-shrink-0">
        <img
          className="w-28 h-28 sm:w-24 sm:h-24" width="200px" 
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
          <Datetime datetime={pubDatetime} />
          {description}
      </div>
    </div>
  </div>
</div>
    </li>
  );
}
