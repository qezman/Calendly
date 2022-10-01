import { FaRegCheckCircle } from "react-icons/all";

const Service = ({ title }) => (
  <div className={"bg-white border border-gray-200 p-5 rounded-lg w-full"}>
    <div className={"my-2"}>
      <span>
        <FaRegCheckCircle className={"text-xl text-primary-600 lg:text-2xl"} />
      </span>
    </div>
    <div className={"my-2"}>
      <h3 className={"font-bold text-base tracking-wider text-gray-700 lg:text-lg"}>
        {title}
      </h3>
    </div>
    <div className={"my-2"}>
      <p className={"leading-7 text-sm text-gray-600 tracking-wide lg:text-base"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus dolorum fugiat id, magnam sapiente vero. Adipisci blanditiis consequatur corporis, ea, error fugiat, magni molestias perspiciatis quae quos ratione saepe sed tempora.
      </p>
    </div>
  </div>
)

const Services = () => (
  <div className={"bg-gray-100"}>
    <div className={"container mx-auto py-8"}>
      <h1 className={"container-header"}>
        We make it easy to get started
      </h1>
      <div className={"gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}>
        <div className={"py-2 px-4 md:px-2 lg:px-2"}>
          <Service title={"Create simple rules"} />
        </div>
        <div className={"py-2 px-4 md:px-2 lg:px-2"}>
          <Service title={"Share your link"} />
        </div>
        <div className={"py-2 px-4 md:px-2 lg:px-2"}>
          <Service title={"Get booked"} />
        </div>
      </div>
    </div>
  </div>
)

export default Services