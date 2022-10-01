const ScheduleMeeting = ({ image, title }) => (
  <div>
    <div className={"mt-3 mb-1 max-w-xs mx-auto"}>
      <img src={image} alt=""/>
    </div>
    <div className={"p-3"}>

      <h3 className={"text-lg mt-1 mb-3 font-bold text-center md:text-xl text-gray-900"}>{title}</h3>
      <p className={"text-base my-2 px-2 text-gray-800 text-center md:px-8 md:text-left leading-6 md:text-lg"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet architecto, cumque est expedita illum laboriosam nostrum provident saepe sapiente, sequi temporibus!</p>
    </div>
  </div>
)

const ScheduleMeetings = () => (
  <div className={"bg-white"}>
    <div className={"container mx-auto px-4 py-8"}>
      <h1 className={"container-header "}>
        Schedule meetings without the back-and-forth emails
      </h1>
      <p className={"max-w-xl mx-auto text-base text-gray-800 text-center leading-6 md:text-lg"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, commodi consequatur deleniti eveniet fuga incidunt nihil quos sed sunt tempora.
      </p>
      <div className={"md:flex md:items-start"}>
        <div>
          <ScheduleMeeting image={"public/Homepage_Gif02_BG_A.svg"} title={"Meet the way you want"} />
        </div>
        <div>
          <ScheduleMeeting image={"public/Homepage_Gif03_BG_A.svg"} title={"Calendly coordinates it all"} />
        </div>
      </div>
      <div className={"flex justify-center my-4 w-full"}>
        <div>
          <button className={"font-medium text-sm rounded-full px-4 py-4 md:py-6 md:px-8 border-2 border-gray-800 text-gray-800 hover:border-primary-500 hover:text-primary-500"}>
            See how teams use Calendly
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default ScheduleMeetings;