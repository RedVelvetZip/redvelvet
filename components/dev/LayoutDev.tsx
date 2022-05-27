import Navbar from "./NavbarSide";

export default function LayoutDev({children} : { children: any}) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}