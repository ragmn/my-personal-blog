import { LOCALE } from "@config";

export interface Props {
  readingTime: string;
  size?: "sm" | "lg";
}

export default function Datetime({ readingTime, size = "sm" }: Props) {
  return (
    <>
      |
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          size === "sm" ? "scale-90" : "scale-100"
        } inline-block h-6 w-6 fill-skin-base`}
        aria-hidden="true"
        fill="#000000"
        version="1.1"
        id="Capa_1"
        width="800px"
        height="800px"
        viewBox="0 0 88.965 88.966"
      >
        <g>
          <g>
            <polygon points="66.436,56.656 61.639,56.656 61.639,72.438 75.096,72.438 75.096,67.641 66.436,67.641   " />
            <path d="M65.049,46.49v-3.342V23.541c0,0,0.008-6.385,0-6.465l-3.746-7.59l3.324-6.32c0.354-0.67,0.33-1.475-0.062-2.121    C64.174,0.397,63.471,0,62.715,0H5.301C4.11,0,3.143,0.967,3.143,2.16l0.052,80.307h10.369V16.841H7.461V4.32h51.68l-2.186,4.15    c-0.328,0.625-0.332,1.369-0.007,1.998l3.295,6.373h-42.43v65.625h7.915h6.818h14.526h2.236c3.865,4,9.273,6.5,15.264,6.5    c11.719,0,21.25-9.532,21.25-21.25C85.825,56.158,76.547,46.746,65.049,46.49z M64.575,81.966c-7.857,0-14.25-6.394-14.25-14.25    s6.393-14.25,14.25-14.25s14.25,6.394,14.25,14.25S72.432,81.966,64.575,81.966z" />
          </g>
        </g>
      </svg>
      <span className={`italic ${size === "sm" ? "text-sm" : "text-base"}`}>
        {readingTime}
      </span>
    </>
  );
}
