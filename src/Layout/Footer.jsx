import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaAppStore, FaGooglePlay} from "react-icons/fa"

const Select = () => (
  <div className="flex justify-center w-full">
    <div className="mb-3 w-full">
      <select readOnly value={"1"} className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        <option>English</option>
        <option value="1">English</option>
        <option value="2">Francais</option>
        <option value="3">Espanol</option>
        <option value="3">Deutsch</option>
        <option value="3">Portugues</option>
      </select>
    </div>
  </div>
)

const Socials = () => (
  <>
    <div className={"flex flex-col my-2 justify-start xs:flex-row xs:items-center md:flex-col md:justify-start md:items-start lg:flex-row lg:items-center"}>
      <div className={"bg-gray-800 cursor-pointer flex items-center my-2 mr-2 rounded-md max-w-[160px] px-4 pb-2 text-white hover:bg-gray-700"}>
        <div className={"mr-2 pt-2"}>
          <FaAppStore className={"text-2xl"} />
        </div>
        <div>
                  <span className={"text-[10px] leading-0"}>
                    Download on the
                  </span>
          <p className={"capitalize text-[18px] pb-1 leading-3"}>app store</p>
        </div>
      </div>
      <div className={"bg-gray-800 cursor-pointer flex items-center my-2 mr-2 rounded-md max-w-[160px] px-4 pb-2 text-white hover:bg-gray-700"}>
        <div className={"mr-2 pt-2"}>
          <FaGooglePlay className={"text-2xl"} />
        </div>
        <div>
                  <span className={"text-[10px] leading-0"}>
                    GET IT ON
                  </span>
          <p className={"capitalize text-[18px] pb-1 leading-3"}>Google Play</p>
        </div>
      </div>
    </div>
    <div className={"flex flex-wrap items-center justify-around my-4 py-2 max-w-[12rem]"}>
              <span className={"block cursor-pointer text-gray-800 hover:text-primary-500"}>
                <FaTwitter className={"text-2xl"} />
              </span><span className={"block cursor-pointer text-gray-800 hover:text-primary-500"}>
                <FaFacebookF className={"text-2xl"} />
              </span><span className={"block cursor-pointer text-gray-800 hover:text-primary-500"}>
                <FaInstagram className={"text-2xl"} />
              </span><span className={"block cursor-pointer text-gray-800 hover:text-primary-500"}>
                <FaLinkedinIn className={"text-2xl"} />
              </span>
    </div>
  </>
)

const linkItems = [
  {title: "about", links: ["about calendly", "contact sales", "newsroom", "careers", "security"]},
  {title: "solutions", links: ["customer success", "sales", "recruiting", "information technology", "marketing"]},
  {title: "popular features", links: ["embed calendly", "availability", "sending notifications", "using calendly mobile"]},
  {title: "support", links: ["help center", "video tutorials", "cookie settings"]},
  {title: "add-ons", links: ["download for chrome", "download for firefox"]},
  {title: "developers", links: ["developer tools"]}
]

const GridLinkItem = ({ title }) => (
  <li className={"my-4"}>
    <a
      className={"capitalize cursor-pointer leading-7 text-base text-gray-600 tracking-wider hover:text-primary-500 hover:underline xs:text-sm sm:text-base md:text-sm"}
      href={"#"}
    >
      {title}
    </a>
  </li>
)

const GridLink = ({title, links}) => (
  <div className={"w-full"}>
    <h1 className={"capitalize font-black my-1 text-gray-700 text-xl tracking-wide xs:text-lg sm:text-xl md:text-lg md:mt-0"}>
      {title || ""}
    </h1>
    <ul>
      {links && links.map((item, index)=>(
        <GridLinkItem key={index} title={item} />
      ))}
    </ul>
  </div>
)

const Footer = () => (
    <footer className={"bg-white w-full"}>
      <div className={"container flex flex-col items-center mx-auto p-4 md:flex-row md:items-start"}>
        <div className={"w-full md:pr-2 lg:pr-4 md:w-[40%]"}>
          <h1 className={"font-black my-1 text-gray-800 text-2xl tracking-wide md:mt-0 md:pt-4 md:text-4xl"}>
            Easy {" "}
            <p className={"text-primary-500"}>ahead</p>
          </h1>
          <p className={"leading-7 my-3 text-base text-gray-600 tracking-wide xs:text-sm sm:text-base md:text-base md:py-4"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eos esse labore, nesciunt porro quasi.
          </p>
          <div className={"hidden md:block mt-4 w-full pr-1"}>
              <Select />
              <Socials />
          </div>
        </div>
        <div className={"my-4 p-4 w-full md:my-0 md:w-[60%]"}>
          <div className={"gap-4 grid grid-cols-2 w-full sm:grid-cols-3"}>
            {linkItems.map((item, index) => (
              <GridLink key={index} {...item} />
            ))}
          </div>
          <div className={"md:hidden mt-4 w-full pr-1"}>
            <Select />
            <Socials />
          </div>
        </div>
      </div>
      <div className={"container flex items-center justify-between mx-auto p-5"}>
        <p className={"text-sm text-gray-400"}>
          &copy;Copyright Calendly 2022
        </p>
        <p className={"text-sm text-gray-400"}>
          Privacy / Terms and Conditions
        </p>
      </div>
    </footer>
)

export default Footer