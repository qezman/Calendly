import {FaChevronRight, FaQuoteLeft, FaQuoteRight} from "react-icons/all";

const Testimonials = () => (
  <div className={"bg-white"}>
    <div className={"container mx-auto px-4 py-1"}>
      <div className={"flex flex-col items-center p-4 md:flex-row md:justify-between"}>
        <div className={"w-full md:w-1/2"}>
          <div className={"my-2 max-w-md  mx-auto"}>
            <img className={"w-full h-full"} src="/static/Bitly.jpg" alt=""/>
          </div>
        </div>
        <div className={"p-3 w-full sm:px-6 md:w-1/2 md:pl-12"}>
          <p className={"font-medium my-2 text-center text-gray-400 tracking-wide text-sm uppercase md:text-left md:text-base"}>bitly</p>
          <p className={"font-bold my-2 text-center text-gray-800 text-xl md:text-left md:text-2xl lg:leading-20 lg:text-3xl"}>
            &quot;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut autem et natus, quisquam sint, aut autem et natus, quisquam sint.&quot;
          </p>
          <p className={"font-bold leading-6 text-base my-4 text-left text-primary-700 text-xl md:text-2xl md:text-base lg:text-3xl"}>
            - John Doe
          </p>
          <div className={"flex items-center"}>
            <p className={"text-sm font-medium text-gray-700 hover:text-primary-500 md:text-base mr-1"}>
              See how teams use Calendly
            </p>
            <span className={"inline-block flex items-center justify-center p-2 bg-gray-900 text-white text-sm rounded-full"}>
              <FaChevronRight className={"text-sm"} style={{fontSize: "8px"}} />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Testimonials