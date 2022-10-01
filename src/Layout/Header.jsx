import { useState } from "react";
import {FaChevronRight, FaChevronDown} from "react-icons/all";

const MenuIcon = ({ visible, setVisible }) => (
  <div
    onClick={setVisible}
    className={"cursor-pointer flex flex-col justify-between h-[15px] lg:hidden"}
  >
    <div className={`${
      visible ? "rotate-45 translate-y-2" : ""
    } bg-gray-800 duration-500 transition transform h-[2px] w-[20px]`} />
    <div className={`${
      visible ? "hidden" : ""
    } bg-gray-800 h-[2px] w-[15px]`} />
    <div className={`${
      visible ? "-rotate-45 -translate-y-[0.275rem]" : ""
    } bg-gray-800 duration-500 transition transform  h-[2px] w-[20px]`} />
  </div>
)

const NavLink = ({ bg, title, links }) => {
  const [visible, setVisible] = useState(false);
  return (
    <li className={"lg:relative"}>
      <div
        onClick={() => links && setVisible(!visible)}
        className={"border-b-2 border-gray-400 border-dotted cursor-pointer flex items-center justify-between py-4 lg:border-none"}>
        <a className={"cursor-pointer capitalize font-bold text-gray-900 tracking-wider text-base hover:text-primary-500"}>
          {title}
        </a>
        {links && (
          <span className={"block font-bold mr-3 text-sm text-gray-700 lg:mx-1 lg:pt-[3px] lg:text-[8px]"}>
            {visible ? <FaChevronDown /> : <FaChevronRight />}
        </span>
        )}
      </div>
      {links && (
        <ul className={`${
          visible ? "block" : "hidden"
        } bg-gray-100 px-3 lg:absolute lg:bg-white`}>
          {links.map((link, index) =>(
            <NavLink title={link} key={index} />
          ))}
        </ul>
      )}
    </li>
  )
}

const Header = () => {
  const [visible, setVisible] = useState(false);

  return (
    <header className="bg-white fixed w-full z-50">
      <div className="container flex items-center justify-between p-4 relative mx-auto lg:py-2">
        <div className="flex items-center">
          <div className={"h-[35px] w-[35px] xs:hidden md:h-[40px] md:w-[40px]"}>
            <img
              className="h-full w-full"
              src="/static/logo-1.svg"
              alt=""
            />
          </div>
          <div className="hidden h-[35px] w-[160px] xs:block md:h-[40px] md:w-[170px]">
            <img
              className="h-full w-full"
              src="/static/logo-2.svg"
              alt=""
            />
          </div>
        </div>
        <ul className={`${
          visible ? "opacity-100 visible z-50" : "opacity-0 invisible z-[-50]"
        } absolute bg-white duration-500 left-0 px-6 py-4 rounded-lg top-16 transition transform w-full lg:flex lg:items-center lg:justify-around lg:py-2 lg:static lg:visible lg:opacity-100 lg:z-50`
        }
        >
          <NavLink title={"individuals"} />
          <NavLink title={"teams"} />
          <NavLink title={"enterprise"} />
          <NavLink title={"products"} links={["features","integrations", "solutions"]} />
          <NavLink title={"pricing"} />
          <NavLink title={"resources"} links={["about"]} />
        </ul>
        <div className={"flex items-center min-w-[15%]"}>

          <div className={"px-4"}>
            <a
              className={"bg-primary-700 block capitalize cursor-pointer font-bold px-4 py-2 rounded-full text-sm text-gray-100 w-full hover:bg-primary-500 sm:text-base md:px-5 md:py-3 md:text-lg lg:text-sm"}
              href="#"
            >
              get started
            </a>
          </div>
          <MenuIcon setVisible={() => setVisible(!visible)} visible={visible} />
        </div>

      </div>
    </header>
  )
}

export default Header