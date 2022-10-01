import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => (
    <>
        <Header />
        <div className="pt-16 md:pt-20">
          {children}
        </div>
        <Footer />
    </>
)

export default Layout