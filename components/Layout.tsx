import Navbar from "./Navbar";
// import NavbarTop from "./NavbarTop";
import Footer from"./Footer";

export default function Layout({children} : { children: any}) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}