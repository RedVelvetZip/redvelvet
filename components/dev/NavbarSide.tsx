import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/navbar.module.scss";
import logo from "../../assets/logo-circle.png";
// import { ConnectButton } from '@rainbow-me/rainbowkit';
import { resumeFS } from "../../data/resume";

const Navbar = () => {
  return (
    <>
      <nav className={styles["navbar"]}>
        <ul className={styles["navbar-nav"]}>
          <li className={styles["logo"]}>
            <Link href="/" className={styles["nav-link"]}>
              <a href="#" className={styles["nav-link"]}>
                <span
                  className={`${styles["link-text"]} ${styles["logo-text"]}`}
                >
                  Red Velvet
                </span>
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
                  <g className={styles["fa-group"]}>
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

          <li className={styles["nav-item"]} id={styles["mobile-home"]}>
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
            <Link href="/projects" className={styles["nav-link"]}>
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
                  <g className={styles["fa-group"]}>
                    <path
                      fill="currentColor"
                      d="M128 96h384v256h64V80C576 53.63 554.4 32 528 32h-416C85.63 32 64 53.63 64 80V352h64V96zM624 384h-608C7.25 384 0 391.3 0 400V416c0 35.25 28.75 64 64 64h512c35.25 0 64-28.75 64-64v-16C640 391.3 632.8 384 624 384zM365.9 286.2C369.8 290.1 374.9 292 380 292s10.23-1.938 14.14-5.844l48-48c7.812-7.813 7.812-20.5 0-28.31l-48-48c-7.812-7.813-20.47-7.813-28.28 0c-7.812 7.813-7.812 20.5 0 28.31l33.86 33.84l-33.86 33.84C358 265.7 358 278.4 365.9 286.2zM274.1 161.9c-7.812-7.813-20.47-7.813-28.28 0l-48 48c-7.812 7.813-7.812 20.5 0 28.31l48 48C249.8 290.1 254.9 292 260 292s10.23-1.938 14.14-5.844c7.812-7.813 7.812-20.5 0-28.31L240.3 224l33.86-33.84C281.1 182.4 281.1 169.7 274.1 161.9z"
                      className={styles["fa-secondary"]}
                    ></path>
                  </g>
                </svg>
                {/* <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fad"
                                    data-icon="space-station-moon-alt"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className={`${styles["svg-inline--fa"]} ${styles["fa-w-12"]} ${styles["nav-link-icon"]}`}
                                >
                                    <g className={styles["fa-group"]} >
                                        <path
                                            fill="currentColor"
                                            d="M160 80C160 112.8 140.3 140.1 112 153.3V241.1C130.8 230.2 152.7 224 176 224H272C307.3 224 336 195.3 336 160V153.3C307.7 140.1 288 112.8 288 80C288 35.82 323.8 0 368 0C412.2 0 448 35.82 448 80C448 112.8 428.3 140.1 400 153.3V160C400 230.7 342.7 288 272 288H176C140.7 288 112 316.7 112 352V358.7C140.3 371 160 399.2 160 432C160 476.2 124.2 512 80 512C35.82 512 0 476.2 0 432C0 399.2 19.75 371 48 358.7V153.3C19.75 140.1 0 112.8 0 80C0 35.82 35.82 0 80 0C124.2 0 160 35.82 160 80V80zM80 104C93.25 104 104 93.25 104 80C104 66.75 93.25 56 80 56C66.75 56 56 66.75 56 80C56 93.25 66.75 104 80 104zM368 56C354.7 56 344 66.75 344 80C344 93.25 354.7 104 368 104C381.3 104 392 93.25 392 80C392 66.75 381.3 56 368 56zM80 456C93.25 456 104 445.3 104 432C104 418.7 93.25 408 80 408C66.75 408 56 418.7 56 432C56 445.3 66.75 456 80 456z"
                                            className={styles["fa-secondary"]}
                                        ></path>

                                    </g >
                                </svg > */}
                <span className={styles["link-text"]}>Projects</span>
              </a>
            </Link>
          </li>

          {/* <li className={styles["nav-item"]}>
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
                    </li > */}

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
                  <g className={styles["fa-group"]}>
                    <path
                      fill="currentColor"
                      d="M9.375 233.4C3.375 239.4 0 247.5 0 256v128c0 8.5 3.375 16.62 9.375 22.62S23.5 416 32 416h32V224H32C23.5 224 15.38 227.4 9.375 233.4zM464 96H352V32c0-17.62-14.38-32-32-32S288 14.38 288 32v64H176C131.8 96 96 131.8 96 176V448c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V176C544 131.8 508.3 96 464 96zM256 416H192v-32h64V416zM224 296C201.9 296 184 278.1 184 256S201.9 216 224 216S264 233.9 264 256S246.1 296 224 296zM352 416H288v-32h64V416zM448 416h-64v-32h64V416zM416 296c-22.12 0-40-17.88-40-40S393.9 216 416 216S456 233.9 456 256S438.1 296 416 296zM630.6 233.4C624.6 227.4 616.5 224 608 224h-32v192h32c8.5 0 16.62-3.375 22.62-9.375S640 392.5 640 384V256C640 247.5 636.6 239.4 630.6 233.4z"
                      className={styles["fa-secondary"]}
                    ></path>
                  </g>
                </svg>
                <span className={styles["link-text"]}>About Me</span>
              </a>
            </Link>
          </li>

          {/* <li className={styles["nav-item"]}>
                        <Link href="/skills" className={styles["nav-link"]}>
                            <a href="#" className={styles["nav-link"]}>
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fad"
                                    data-icon="chat"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 600 512"
                                >
                                    <g className={styles["fa-group"]} >
                                        <path
                                            fill="currentColor"
                                            d="M331.8 224.1c28.29 0 54.88 10.99 74.86 30.97l19.59 19.59c40.01-17.74 71.25-53.3 81.62-96.65c5.725-23.92 5.34-47.08 .2148-68.4c-2.613-10.88-16.43-14.51-24.34-6.604l-68.9 68.9h-75.6V97.2l68.9-68.9c7.912-7.912 4.275-21.73-6.604-24.34c-21.32-5.125-44.48-5.51-68.4 .2148c-55.3 13.23-98.39 60.22-107.2 116.4C224.5 128.9 224.2 137 224.3 145l82.78 82.86C315.2 225.1 323.5 224.1 331.8 224.1zM384 278.6c-23.16-23.16-57.57-27.57-85.39-13.9L191.1 158L191.1 95.99l-127.1-95.99L0 63.1l96 127.1l62.04 .0077l106.7 106.6c-13.67 27.82-9.251 62.23 13.91 85.39l117 117.1c14.62 14.5 38.21 14.5 52.71-.0016l52.75-52.75c14.5-14.5 14.5-38.08-.0016-52.71L384 278.6zM227.9 307L168.7 247.9l-148.9 148.9c-26.37 26.37-26.37 69.08 0 95.45C32.96 505.4 50.21 512 67.5 512s34.54-6.592 47.72-19.78l119.1-119.1C225.5 352.3 222.6 329.4 227.9 307zM64 472c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24S88 434.7 88 448C88 461.3 77.25 472 64 472z"
                                            className={styles["fa-secondary"]}
                                        ></path>
                                    </g>
                                </svg >
                                <span className={styles["link-text"]}>Skills</span>
                            </a>
                        </Link>
                    </li > */}

          {/* <li className={styles["nav-item"]}>
                        <a
                            href={resumeFS}
                            className={styles["nav-link"]}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fad"
                                data-icon="chat"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className={`${styles["svg-inline--fa"]} ${styles["fa-w-12"]} ${styles["nav-link-icon"]}`}
                            >
                                <g className={styles["nav-link-icon"]} >
                                    <path
                                        fill="currentColor"
                                        d="M0 64C0 28.65 28.65 0 64 0H224V128C224 145.7 238.3 160 256 160H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64zM256 128V0L384 128H256z"
                                        // d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM407.4 331.5C412.4 319.7 400.4 309 388.1 312.8C348.4 324.9 303.7 331.8 256.3 331.8C208.9 331.8 164.1 324.9 124.5 312.8C112.2 309 100.2 319.7 105.2 331.5C130.1 390.6 188.4 432 256.3 432C324.2 432 382.4 390.6 407.4 331.5H407.4zM152.8 124.6L136.2 159.3L98.09 164.3C95.03 164.7 92.48 166.8 91.52 169.8C90.57 172.7 91.39 175.9 93.62 178L121.5 204.5L114.5 242.3C113.1 245.4 115.2 248.4 117.7 250.2C120.2 252.1 123.5 252.3 126.2 250.8L159.1 232.5L193.8 250.8C196.5 252.3 199.8 252.1 202.3 250.2C204.8 248.4 206 245.4 205.5 242.3L198.5 204.5L226.4 178C228.6 175.9 229.4 172.7 228.5 169.8C227.5 166.8 224.1 164.7 221.9 164.3L183.8 159.3L167.2 124.6C165.9 121.8 163.1 120 159.1 120C156.9 120 154.1 121.8 152.8 124.6V124.6zM344.8 124.6L328.2 159.3L290.1 164.3C287 164.7 284.5 166.8 283.5 169.8C282.6 172.7 283.4 175.9 285.6 178L313.5 204.5L306.5 242.3C305.1 245.4 307.2 248.4 309.7 250.2C312.2 252.1 315.5 252.3 318.2 250.8L352 232.5L385.8 250.8C388.5 252.3 391.8 252.1 394.3 250.2C396.8 248.4 398 245.4 397.5 242.3L390.5 204.5L418.4 178C420.6 175.9 421.4 172.7 420.5 169.8C419.5 166.8 416.1 164.7 413.9 164.3L375.8 159.3L359.2 124.6C357.9 121.8 355.1 120 352 120C348.9 120 346.1 121.8 344.8 124.6H344.8z"
                                        className={styles["fa-secondary"]}
                                    ></path>
                                </g>
                            </svg >
                            <span className={styles["link-text"]}>Resume</span>
                        </a>
                    </li > */}

          <li className={styles["nav-item"]}>
            <Link
              href="https://redvelvetzip.substack.com/"
              className={styles["nav-link"]}
            >
              <a
                href="https://redvelvetzip.substack.com/"
                className={styles["nav-link"]}
              >
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
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
