import Image from "next/image";
import Link from "next/link";
import styles from "../styles/navbar.module.scss";
// import WalletConnect from "./WalletConnect";
import logo from "../assets/logo-circle.png"

const Navbar = () => {
    // const themeMap = {
    //     dark: "light",
    //     light: "solar",
    //     solar: "dark"
    // };

    //   const theme = localStorage.getItem('theme')
    //     || (tmp = Object.keys(themeMap)[0],
    //         localStorage.setItem('theme', tmp),
    //         tmp);
    //   const bodyClass = document.body.classList;
    //   bodyClass.add(theme);

    //   function toggleTheme() {
    //     const current = localStorage.getItem('theme')!;
    //     const next = themeMap[current];

    //     bodyClass.replace(current, next);
    //     localStorage.setItem('theme', next);
    //   }

    //   document.getElementById('themeButton').onclick = toggleTheme;

    return (
        <>
            <nav className={styles["navbar"]}>
                <ul className={styles["navbar-nav"]}>

                    <li className={styles["logo"]}>
                        <Link href="/" className={styles["nav-link"]}>
                            <a href="#" className={styles["nav-link"]}>
                                <span className={`${styles["link-text"]} ${styles["logo-text"]}`}>Red Velvet</span>
                                {/* <div className={styles["logo-image"]}>
                                <Image src={logo}></Image>
                            </div> */}
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fad"
                                    data-icon="angle-double-right"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    className={` ${styles["svg-inline--fa"]} ${styles["fa-angle-double-right"]} ${styles["fa-w-14"]} ${styles["fa-5x"]}`}
                                >
                                    <g className={styles["fa-group"]} >
                                        <path
                                            fill="currentColor"
                                            d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                                            className={styles["fa-secondary"]}
                                        ></path>
                                        <path
                                            fill="currentColor"
                                            d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                                            className={styles["fa-primary"]}
                                        ></path>
                                    </g>
                                </svg>
                            </a>
                        </Link>
                    </li>

                    <li className={styles["nav-item"]}
                        id={styles["mobile-home"]}
                        >
                        <Link href="/" className={styles["nav-link-logo"]}>
                            <a href="#" className={styles["nav-link-logo"]}>
                                {/* <span className={`${styles["link-text"]} ${styles["logo-text"]}`}>Red Velvet</span> */}
                                <div className={styles["logo-image"]}>
                                    <Image src={logo}></Image>
                                </div>
                            </a>
                        </Link>
                    </li>

                    <li className={styles["nav-item"]}>
                        <Link href="/posts" className={styles["nav-link"]}>
                            <a href="#" className={styles["nav-link"]}>
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fad"
                                    data-icon="atom"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className={`${styles["svg-inline--fa"]} ${styles["fa-atom"]} ${styles["fa-w-14"]} ${styles["fa-5x"]}`}
                                >
                                    <g className={styles["fa-group"]}>
                                        <path
                                            fill="currentColor"
                                            d="M256 224C238.4 224 223.1 238.4 223.1 256S238.4 288 256 288c17.63 0 32-14.38 32-32S273.6 224 256 224zM470.2 128c-10.88-19.5-40.51-50.75-116.3-41.88C332.4 34.88 299.6 0 256 0S179.6 34.88 158.1 86.12C82.34 77.38 52.71 108.5 41.83 128c-16.38 29.38-14.91 73.12 25.23 128c-40.13 54.88-41.61 98.63-25.23 128c29.13 52.38 101.6 43.63 116.3 41.88C179.6 477.1 212.4 512 256 512s76.39-34.88 97.9-86.13C368.5 427.6 441 436.4 470.2 384c16.38-29.38 14.91-73.13-25.23-128C485.1 201.1 486.5 157.4 470.2 128zM95.34 352c-4.001-7.25-.1251-24.75 15-48.25c6.876 6.5 14.13 12.87 21.88 19.12c1.625 13.75 4.001 27.13 6.751 40.13C114.3 363.9 99.09 358.6 95.34 352zM132.2 189.1C124.5 195.4 117.2 201.8 110.3 208.2C95.22 184.8 91.34 167.2 95.34 160c3.376-6.125 16.38-11.5 37.88-11.5c1.75 0 3.876 .375 5.751 .375C136.1 162.2 133.8 175.6 132.2 189.1zM256 64c9.502 0 22.25 13.5 33.88 37.25C278.6 105 267.4 109.3 256 114.1C244.6 109.3 233.4 105 222.1 101.2C233.7 77.5 246.5 64 256 64zM256 448c-9.502 0-22.25-13.5-33.88-37.25C233.4 407 244.6 402.7 256 397.9c11.38 4.875 22.63 9.135 33.88 12.89C278.3 434.5 265.5 448 256 448zM256 336c-44.13 0-80.02-35.88-80.02-80S211.9 176 256 176s80.02 35.88 80.02 80S300.1 336 256 336zM416.7 352c-3.626 6.625-19 11.88-43.63 11c2.751-12.1 5.126-26.38 6.751-40.13c7.752-6.25 15-12.63 21.88-19.12C416.8 327.2 420.7 344.8 416.7 352zM401.7 208.2c-6.876-6.5-14.13-12.87-21.88-19.12c-1.625-13.5-3.876-26.88-6.751-40.25c1.875 0 4.001-.375 5.751-.375c21.5 0 34.51 5.375 37.88 11.5C420.7 167.2 416.8 184.8 401.7 208.2z"
                                            className={styles["fa-secondary"]}
                                        ></path>
                                    </g>
                                </svg>

                                <span className={styles["link-text"]}>Blog</span>
                            </a>
                        </Link>
                    </li >

                    <li className={styles["nav-item"]}>
                        <Link href="/portfolio" className={styles["nav-link"]}>
                            <a href="#" className={styles["nav-link"]}>
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fad"
                                    data-icon="space-station-moon-alt"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 512"
                                    className={`${styles["svg-inline--fa"]} ${styles["fa-w-16"]} ${styles["fa-5x"]}`}
                                >
                                    <g className={styles["fa-group"]} >
                                        <path
                                            fill="currentColor"
                                            d="M128 96h384v256h64V80C576 53.63 554.4 32 528 32h-416C85.63 32 64 53.63 64 80V352h64V96zM624 384h-608C7.25 384 0 391.3 0 400V416c0 35.25 28.75 64 64 64h512c35.25 0 64-28.75 64-64v-16C640 391.3 632.8 384 624 384zM365.9 286.2C369.8 290.1 374.9 292 380 292s10.23-1.938 14.14-5.844l48-48c7.812-7.813 7.812-20.5 0-28.31l-48-48c-7.812-7.813-20.47-7.813-28.28 0c-7.812 7.813-7.812 20.5 0 28.31l33.86 33.84l-33.86 33.84C358 265.7 358 278.4 365.9 286.2zM274.1 161.9c-7.812-7.813-20.47-7.813-28.28 0l-48 48c-7.812 7.813-7.812 20.5 0 28.31l48 48C249.8 290.1 254.9 292 260 292s10.23-1.938 14.14-5.844c7.812-7.813 7.812-20.5 0-28.31L240.3 224l33.86-33.84C281.1 182.4 281.1 169.7 274.1 161.9z"
                                            className={styles["fa-secondary"]}
                                        ></path>

                                    </g >
                                </svg >
                                <span className={styles["link-text"]}>Portfolio</span>
                            </a>
                        </Link>
                    </li >

                    <li className={styles["nav-item"]}>
                        <Link href="/about" className={styles["nav-link"]}>
                            <a href="#" className={styles["nav-link"]}>
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fad"
                                    data-icon="robot"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 512"
                                // className={`${styles["svg-inline--fa"]} ${styles["fa-w-20"]} ${styles["fa-5x"]}`}
                                >
                                    <g className={styles["fa-group"]} >
                                        <path
                                            fill="currentColor"
                                            d="M9.375 233.4C3.375 239.4 0 247.5 0 256v128c0 8.5 3.375 16.62 9.375 22.62S23.5 416 32 416h32V224H32C23.5 224 15.38 227.4 9.375 233.4zM464 96H352V32c0-17.62-14.38-32-32-32S288 14.38 288 32v64H176C131.8 96 96 131.8 96 176V448c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V176C544 131.8 508.3 96 464 96zM256 416H192v-32h64V416zM224 296C201.9 296 184 278.1 184 256S201.9 216 224 216S264 233.9 264 256S246.1 296 224 296zM352 416H288v-32h64V416zM448 416h-64v-32h64V416zM416 296c-22.12 0-40-17.88-40-40S393.9 216 416 216S456 233.9 456 256S438.1 296 416 296zM630.6 233.4C624.6 227.4 616.5 224 608 224h-32v192h32c8.5 0 16.62-3.375 22.62-9.375S640 392.5 640 384V256C640 247.5 636.6 239.4 630.6 233.4z"
                                            className={styles["fa-secondary"]}
                                        ></path>

                                    </g>
                                </svg >
                                <span className={styles["link-text"]}>About</span>
                            </a>
                        </Link>
                    </li >

                    <li className={styles["nav-item"]}>
                        <Link href="/contact" className={styles["nav-link"]}>
                            <a href="#" className={styles["nav-link"]}>
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fad"
                                    data-icon="chat"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 580 512"
                                // className={`${styles["svg-inline--fa"]} ${styles["fa-w-16"]} ${styles["fa-7x"]}`}
                                >
                                    <g className={styles["fa-group"]} >
                                        <path
                                            fill="currentColor"
                                            d="M511.1 63.1v287.1c0 35.25-28.75 63.1-64 63.1h-144l-124.9 93.68c-7.875 5.75-19.12 .0497-19.12-9.7v-83.98h-96c-35.25 0-64-28.75-64-63.1V63.1c0-35.25 28.75-63.1 64-63.1h384C483.2 0 511.1 28.75 511.1 63.1z"
                                            className={styles["fa-secondary"]}
                                        ></path>
                                    </g>
                                </svg >
                                <span className={styles["link-text"]}>Contact</span>
                            </a>
                        </Link>
                    </li >

                    {/* <li className={styles["nav-item"]}
                        id={styles["themeButton"]}
                    // onClick={toggleTheme()}
                    >
                        <a href="#" className={styles["nav-link"]}>
                            <svg
                                className={`${styles["theme-icon"]} ${styles["svg-inline--fa"]} ${styles["fa-moon-stars"]} ${styles["fa-w-16"]} ${styles["fa-7x"]}`}
                                id="lightIcon"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fad"
                                data-icon="moon-stars"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <g className={styles["fa-group"]}>
                                    <path
                                        fill="currentColor"
                                        d="M320 32L304 0l-16 32-32 16 32 16 16 32 16-32 32-16zm138.7 149.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208z"
                                        className={styles["fa-secondary"]}
                                    ></path>
                                    <path
                                        fill="currentColor"
                                        d="M332.2 426.4c8.1-1.6 13.9 8 8.6 14.5a191.18 191.18 0 0 1-149 71.1C85.8 512 0 426 0 320c0-120 108.7-210.6 227-188.8 8.2 1.6 10.1 12.6 2.8 16.7a150.3 150.3 0 0 0-76.1 130.8c0 94 85.4 165.4 178.5 147.7z"
                                        className={styles["fa-primary"]}
                                    ></path>
                                </g>
                            </svg >
                            <svg
                                id="solarIcon"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fad"
                                data-icon="sun"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className={`${styles["theme-icon"]} ${styles["svg-inline--fa"]} ${styles["fa-sun"]} ${styles["fa-w-16"]} ${styles["fa-7x"]}`}
                            >
                                <g className={styles["fa-group"]}>
                                    <path
                                        fill="currentColor"
                                        d="M502.42 240.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.41-94.8a17.31 17.31 0 0 0-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4a17.31 17.31 0 0 0 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.41-33.5 47.3 94.7a17.31 17.31 0 0 0 31 0l47.31-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3a17.33 17.33 0 0 0 .2-31.1zm-155.9 106c-49.91 49.9-131.11 49.9-181 0a128.13 128.13 0 0 1 0-181c49.9-49.9 131.1-49.9 181 0a128.13 128.13 0 0 1 0 181z"
                                        className={styles["fa-secondary"]}
                                    ></path>
                                    <path
                                        fill="currentColor"
                                        d="M352 256a96 96 0 1 1-96-96 96.15 96.15 0 0 1 96 96z"
                                        className={styles["fa-primary"]}
                                    ></path>
                                </g>
                            </svg>
                            <svg
                                className={`${styles["theme-icon"]} ${styles["svg-inline--fa"]} ${styles["fa-sunglasses"]} ${styles["fa-w-18"]} ${styles["fa-7x"]}`}
                                id="darkIcon"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fad"
                                data-icon="sunglasses"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                            >
                                <g className={styles["fa-group"]}>
                                    <path
                                        fill="currentColor"
                                        d="M574.09 280.38L528.75 98.66a87.94 87.94 0 0 0-113.19-62.14l-15.25 5.08a16 16 0 0 0-10.12 20.25L395.25 77a16 16 0 0 0 20.22 10.13l13.19-4.39c10.87-3.63 23-3.57 33.15 1.73a39.59 39.59 0 0 1 20.38 25.81l38.47 153.83a276.7 276.7 0 0 0-81.22-12.47c-34.75 0-74 7-114.85 26.75h-73.18c-40.85-19.75-80.07-26.75-114.85-26.75a276.75 276.75 0 0 0-81.22 12.45l38.47-153.8a39.61 39.61 0 0 1 20.38-25.82c10.15-5.29 22.28-5.34 33.15-1.73l13.16 4.39A16 16 0 0 0 180.75 77l5.06-15.19a16 16 0 0 0-10.12-20.21l-15.25-5.08A87.95 87.95 0 0 0 47.25 98.65L1.91 280.38A75.35 75.35 0 0 0 0 295.86v70.25C0 429 51.59 480 115.19 480h37.12c60.28 0 110.38-45.94 114.88-105.37l2.93-38.63h35.76l2.93 38.63c4.5 59.43 54.6 105.37 114.88 105.37h37.12C524.41 480 576 429 576 366.13v-70.25a62.67 62.67 0 0 0-1.91-15.5zM203.38 369.8c-2 25.9-24.41 46.2-51.07 46.2h-37.12C87 416 64 393.63 64 366.11v-37.55a217.35 217.35 0 0 1 72.59-12.9 196.51 196.51 0 0 1 69.91 12.9zM512 366.13c0 27.5-23 49.87-51.19 49.87h-37.12c-26.69 0-49.1-20.3-51.07-46.2l-3.12-41.24a196.55 196.55 0 0 1 69.94-12.9A217.41 217.41 0 0 1 512 328.58z"
                                        className={styles["fa-secondary"]}
                                    ></path>
                                    <path
                                        fill="currentColor"
                                        d="M64.19 367.9c0-.61-.19-1.18-.19-1.8 0 27.53 23 49.9 51.19 49.9h37.12c26.66 0 49.1-20.3 51.07-46.2l3.12-41.24c-14-5.29-28.31-8.38-42.78-10.42zm404-50l-95.83 47.91.3 4c2 25.9 24.38 46.2 51.07 46.2h37.12C489 416 512 393.63 512 366.13v-37.55a227.76 227.76 0 0 0-43.85-10.66z"
                                        className={styles["fa-primary"]}
                                    ></path>
                                </g>
                            </svg>
                            <span className={styles["link-text"]}>Under Construction</span>
                        </a >
                    </li > */}
                </ul >
            </nav >
        </>
    );
};

export default Navbar;
