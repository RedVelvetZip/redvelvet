import { ReactElement } from "react";
import Navbar from "./NavbarSide";

export default function LayoutDev({children} : { children: ReactElement}) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}