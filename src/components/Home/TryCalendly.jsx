import { useState } from "react"

const SvgIcon = () => {
  const [rotate, setRotate] = useState(false);
  const color = rotate ? "#1a79ff" : "#18e884"

  return (
    <a
      href={"#"}
      className={`relative duration-1000 transform transition ${rotate ? "scale-110" : "scale-100"}`}
      onMouseEnter={() => setRotate(true)}
      onMouseLeave={() => setRotate(false)}
    >
      <div
        className={`cursor-pointer transform transition duration-1000 ${rotate ? "-rotate-45" : ""}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="170" height="180" viewBox="0 0 287 205">
          <g id="Group_1" data-name="Group 1" transform="translate(-710 -375)">
            <path id="Polygon_4" data-name="Polygon 4" d="M121.8,18A34,34,0,0,1,165.2,18l49.236,40.83C238.95,79.153,224.577,119,192.736,119H94.263c-31.841,0-46.213-39.847-21.7-60.172Z" transform="translate(710 375)" fill={color}/>
            <path id="Polygon_5" data-name="Polygon 5" d="M121.8,18A34,34,0,0,1,165.2,18l49.236,40.83C238.95,79.153,224.577,119,192.736,119H94.263c-31.841,0-46.213-39.847-21.7-60.172Z" transform="translate(997 580) rotate(180)" fill={color}/>
            <rect id="Rectangle_1" data-name="Rectangle 1" width="167" height="96" rx="32" transform="translate(770 429)" fill={color}/>
          </g>
        </svg>
      </div>
      <p className={"absolute top-[44%] left-[32.5%] text-gray-100 capitalize font-bold text-sm md:text-base"}>
        sign up
      </p>
    </a>
  )
}

const TryCalendly = () => (
  <div className={"container mx-auto px-5 py-12 w-full"}>
    <div className={"flex flex-col items-start md:flex-row"}>
      <h1 className={"font-bold text-center text-gray-700 text-xl sm:max-w-xs sm:text-left sm:text-5xl"}>
        Try Calendly free
      </h1>
      <SvgIcon />
    </div>
    <div>
      <p
        className={"font-bold max-w-sm my-6 text-sm tracking-wide text-gray-800 sm:text-base md:text-lg"}
      >
        After your 14-day trial of our Terms plan, enjoy the Free version of Calendly - forever.
      </p>
      <p
        className={"font-medium my-6 text-sm tracking-wide text-gray-500"}
      >
        To inquire about our Enterprise plans, click <a className={"cursor-pointer font-bold text-gray-800 hover:text-primary-500 hover:underline"} href={"#"}>here.</a>
      </p>
    </div>
  </div>
)

export default TryCalendly