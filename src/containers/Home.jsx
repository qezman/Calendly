import Layout from "../Layout"
import {Hero, TryCalendly, ScheduleMeetings, WorldWide, Schedules, Services, DoBest, Testimonials} from "../components/Home";

const Home = () => (
    <Layout>
      <Hero />
      <WorldWide />
      <Services />
      <Schedules />
      <ScheduleMeetings />
      <DoBest/>
      <Testimonials />
      <TryCalendly />
    </Layout>
)

export default Home;