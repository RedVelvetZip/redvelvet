import { ReactElement } from "react";
import Navbar from "./NavbarSide";

import type { LayoutProps } from '../../types/pageWithLayouts'

const LayoutDev: LayoutProps = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default LayoutDev