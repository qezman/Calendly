import {FaUsers, FaUser, FaPeopleArrows, FaPeopleCarry} from "react-icons/all";

const Schedule = ({title, Icon}) => (
  <div className={"bg-white w-full rounded-lg border border-gray-200 p-4 md:flex md:items-start md:py-6"}>
    <span className={"block my-1 text-primary-600 text-xl md:my-0 md:pt-1 md:mr-6 md:text-2xl lg:text-4xl lg:pt-2"}>
      <Icon />
    </span>
    <div className={"my-1 md:my-0"}>
      <h5 className={"capitalize my-1 font-bold text-lg text-gray-900 md:text-xl md:mt-0"}>
        {title}
      </h5>
      <p className={"leading-6 text-gray-900 text-sm md:text-base"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum officia sed voluptates.
      </p>
    </div>
  </div>
)

const Schedules = () => (
  <div className={"bg-gray-50"}>
    <div className={"container mx-auto py-8"}>
      <h1 className={"container-header "}>
        Scheduling for any meeting type
      </h1>
      <div className={"p-4"}>
        <div className={"my-4"}>
          <Schedule Icon={FaUser} title={"one-to-one"} />
        </div>
        <div className={"my-4"}>
          <Schedule Icon={FaUsers} title={"group"} />
        </div>
        <div className={"my-4"}>
          <Schedule Icon={FaPeopleArrows} title={"collective"} />
        </div>
        <div className={"my-4"}>
          <Schedule Icon={FaPeopleCarry} title={"round-robin"} />
        </div>
      </div>
    </div>
  </div>
)

export default Schedules