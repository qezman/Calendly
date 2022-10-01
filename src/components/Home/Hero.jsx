const Hero = () => (
  <section className={"bg-white"}>
    <div className={"container mx-auto py-6"}>
    <div className={"flex flex-col items-center lg:flex-row-reverse"}>
      <div className={"flex items-center justify-center py-6 w-full"}>
        <div className={"w-4/5"}>
          <img
            className={"h-full w-full"}
            alt={""}
            src={"/static/HomePage_GIF1_BG_2.svg"}
          />
        </div>
      </div>
      <div className={"p-4 w-full sm:px-8"}>
        <h1 className={"font-bold text-center text-gray-700 text-2xl sm:max-w-xs sm:text-left sm:text-6xl"}>
          Easy scheduling <span className={"text-primary-500"}>ahead</span>
        </h1>
        <p className={"leading-6 my-4 px-2 text-center text-gray-700 text-sm sm:text-left sm:text-base md:leading-8 lg:mt-3 mb-1 lg:leading-7"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cupiditate dolore error esse est ipsum, natus obcaecati quidem tenetur voluptatem! Animi atque commodi nisi perferendis quas quia rerum vitae voluptatem.
        </p>
        <div className={"my-4 px-2 sm:my-6 lg:my-2"}>
          <input
            className={"form form-input my-1 px-6 py-4 shadow-lg rounded-full text-gray-600 text-sm w-full focus:outline-gray-400 sm:text-base"}
            placeholder={"Enter your email"}
            required
            type={"email"}
          />
          <div>
            <button
              className={"bg-gray-700 cursor-pointer capitalize font-medium rounded-full my-2 px-12 py-4 text-gray-100 text-sm tracking-widest focus:ring-2 focus:ring-gray-700 focus:ring-offset-1 hover:bg-gray-600 sm:my-4 sm:text-base lg:mb-0"}
            >
              sign up
            </button>
          </div>
        </div>
        <p className={"font-medium text-center text-sm text-gray-400 sm:my-2 sm:px-3 sm:text-left sm:text-base lg:my-0 lg:px-4"}>
          Create your free account. No credit card required.
        </p>
      </div>
    </div>
    </div>
  </section>
)

export default Hero