import { LOCALE } from "@config";

export interface Props {
  readingTime: string;
  size?: "sm" | "lg";
}

export default function Datetime({ readingTime, size = "sm" }: Props) {
  return (
    <>
      |
      <img
        src="/assets/clock.png"
        alt="Your Image"
        className={`${
          size === "sm" ? "scale-90" : "scale-100"
        } inline-block h-6 w-6`}
      ></img>
      <span className={`italic ${size === "sm" ? "text-sm" : "text-base"}`}>
        {readingTime}
      </span>
    </>
  );
}
