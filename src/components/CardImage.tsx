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
    <>
   <div className="divide-y divide-gray-200 dark:divide-gray-700">
  <div className="pb-3 sm:pb-4">
    <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-4 items-center">
      <div className="flex-shrink-0">
        <img
          className="w-52 h-48 sm:w-24 sm:h-24"
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
        {/* <p className="text-sm text-gray-500 truncate dark:text-gray-400"> */}
          <Datetime datetime={pubDatetime} />
          {description}
        {/* </p> */}
      </div>
    </div>
  </div>
</div>


      {/* <li className="my-3">
      <img
    className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
    src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
    alt="" />
     
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
      <p>{description}</p>
    </li> */}
    </>
  );
}
