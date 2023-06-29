import Datetime from "./Datetime";
import type { BlogFrontmatter } from "@content/_schemas";

export interface Props {
  href?: string;
  frontmatter: BlogFrontmatter;
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, description, imgSrc, imgAlt, categories } =
    frontmatter;
  return (
    <li className="my-3">
      {imgSrc ? (
        <img
          src={imgSrc}
          alt={imgAlt}
          className="mx-auto h-28 w-28 sm:h-24 sm:w-24"
        ></img>
      ) : (
        <></>
      )}

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
        </span>{" "}
      </div>
      <p>{description}</p>
    </li>
  );
}
