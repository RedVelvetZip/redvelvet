import Navbar from "./NavbarSide";
// import NavbarTop from "./NavbarTop";
import Footer from"./Footer";

export default function Layout(children) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}