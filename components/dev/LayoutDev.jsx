import Navbar from "./NavbarSide";

export default function LayoutDev(children) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}