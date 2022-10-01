import {image} from "tailwindcss/lib/util/dataTypes";

const DoBetter = ({ title, image, heading, reverse }) => (
  <div className={`flex flex-col items-center p-4 ${reverse ? "md:flex-row-reverse" : "md:flex-row"} md:justify-between`}>
    <div className={"w-full md:w-1/2"}>
      <div className={"my-2 max-w-xs mx-auto"}>
        <img className={"w-full h-full"} src={image} alt=""/>
      </div>
    </div>
    <div className={"p-4 w-full sm:px-6 md:w-1/2"}>
      <p className={"font-medium my-2 text-center text-gray-400 tracking-wide text-sm uppercase md:text-left md:text-base"}>{heading}</p>
      <h1 className={"font-bold my-2 text-center text-gray-800 text-xl md:text-left md:text-2xl lg:leading-20 lg:text-4xl"}>
        {title}
      </h1>
      <p className={"leading-6 text-base text-center text-gray-700 text-sm md:text-left md:text-base lg:text-lg"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, assumenda corporis delectus dicta dolores doloribus eum in, minima omnis possimus quasi quia, saepe? Assumenda maiores quia unde. Aspernatur assumenda autem commodi, debitis et quae rerum veniam.
      </p>
    </div>
  </div>
)

const DoBest = () => (
  <div className={"bg-gray-50"}>
    <div className={"container mx-auto px-4 py-8"}>
      <h1 className={"container-header "}>
        Do more of what you do best
      </h1>
      <p className={"max-w-xl mx-auto text-base text-gray-800 text-center leading-6 md:text-lg text-base text-gray-800 text-center leading-6 md:text-lg"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, commodi consequatur deleniti eveniet fuga incidunt nihil quos sed sunt tempora.
      </p>

      <div>
        <DoBetter image={"/static/Homepage_Gif05_BG_A.svg"} heading={"workflow management"} title={"Automate remainders and follow-ups"} reverse />
        <DoBetter image={"/static/HomePage_GIF1_BG_2.svg"} heading={"on-demand scheduling"} title={"Make more connections and reduce cancellations"} />
        <DoBetter image={"/static/Homepage_Gif02_BG_A.svg"} heading={"the courteous approach"} title={"Delight invitees with modern scheduling"} reverse />
      </div>
    </div>
  </div>
)
export default DoBest