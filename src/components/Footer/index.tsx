"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo/logo-2.svg"
                    alt="logo"
                    className="w-full dark:hidden"
                    width={140}
                    height={30}
                  />
                  <Image
                    src="/images/logo/logo.svg"
                    alt="logo"
                    className="hidden w-full dark:block"
                    width={140}
                    height={30}
                  />
                </Link>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  At Nation Pride IT Solutions, we are dedicated to delivering
                  innovative web development services tailored to your unique
                  needs. Our team of experts is passionate about creating
                  modern, user-friendly websites that enhance your online
                  presence.
                </p>
                <div className="flex items-center">
                  <a
                    href="https://www.linkedin.com/company/nation-pride-it-solutions/?viewAsMember=true"
                    aria-label="social-link"
                    className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-light text-body-color duration-300 hover:bg-primary hover:text-white dark:bg-gray-dark dark:hover:bg-primary sm:ml-3"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      className="fill-current"
                    >
                      <path d="M14.3442 0H1.12455C0.499798 0 0 0.497491 0 1.11936V14.3029C0 14.8999 0.499798 15.4222 1.12455 15.4222H14.2942C14.919 15.4222 15.4188 14.9247 15.4188 14.3029V1.09448C15.4688 0.497491 14.969 0 14.3442 0ZM4.57316 13.1089H2.29907V5.7709H4.57316V13.1089ZM3.42362 4.75104C2.67392 4.75104 2.09915 4.15405 2.09915 3.43269C2.09915 2.71133 2.69891 2.11434 3.42362 2.11434C4.14833 2.11434 4.74809 2.71133 4.74809 3.43269C4.74809 4.15405 4.19831 4.75104 3.42362 4.75104ZM13.1947 13.1089H10.9206V9.55183C10.9206 8.7061 10.8956 7.58674 9.72108 7.58674C8.52156 7.58674 8.34663 8.53198 8.34663 9.47721V13.1089H6.07255V5.7709H8.29665V6.79076H8.32164C8.64651 6.19377 9.37122 5.59678 10.4958 5.59678C12.8198 5.59678 13.2447 7.08925 13.2447 9.12897V13.1089H13.1947Z" />
                    </svg>
                  </a>
                  <a
                    href="https://x.com/nation_pride_"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-light text-body-color duration-300 hover:bg-primary hover:text-white dark:bg-gray-dark dark:hover:bg-primary sm:ml-3"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/nation_pride_it_solution?igsh=MWZkbDlwbXU2aWx1Yw=="
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-light text-body-color duration-300 hover:bg-primary hover:text-white dark:bg-gray-dark dark:hover:bg-primary sm:ml-3"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.327 3.608 1.302.975.975 1.24 2.242 1.302 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.327 2.633-1.302 3.608-.975.975-2.242 1.24-3.608 1.302-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.327-3.608-1.302-.975-.975-1.24-2.242-1.302-3.608C2.175 15.585 2.163 15.205 2.163 12s.012-3.584.07-4.85c.062-1.366.327-2.633 1.302-3.608.975-.975 2.242-1.24 3.608-1.302C8.416 2.175 8.796 2.163 12 2.163M12 0C8.741 0 8.332.013 7.052.072 5.77.13 4.504.392 3.46 1.436 2.415 2.48 2.153 3.747 2.094 5.03 2.035 6.31 2.022 6.72 2.022 12s.013 5.69.072 6.97c.059 1.283.321 2.55 1.366 3.594 1.045 1.044 2.312 1.307 3.594 1.366 1.28.059 1.69.072 6.97.072s5.69-.013 6.97-.072c1.283-.059 2.55-.321 3.594-1.366 1.044-1.045 1.307-2.312 1.366-3.594.059-1.28.072-1.69.072-6.97s-.013-5.69-.072-6.97c-.059-1.283-.321-2.55-1.366-3.594-1.045-1.045-2.312-1.307-3.594-1.366C16.69.013 16.279 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>

                  {/* Uncomment the below block if needed */}
                  {/* <a
    href="/"
    aria-label="social-link"
    target="_blank"
    rel="noopener noreferrer"
    className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-light text-body-color duration-300 hover:bg-primary hover:text-white dark:bg-gray-dark dark:hover:bg-primary sm:ml-3"
  >
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      className="fill-current"
    >
      <path d="M17.3145 0H0.6855C0.3068 0 0 0.3068 0 0.6855V13.3145C0 13.6932 0.3068 14 0.6855 14H17.3145C17.6932 14 18 13.6932 18 13.3145V0.6855C18 0.3068 17.6932 0 17.3145 0ZM16.0018 2.0244C16.0018 3.1135 15.1565 3.9493 14.0908 3.9493C13.0705 3.9493 12.217 3.1135 12.217 2.0244C12.217 0.9353 13.0705 0.0995 14.0908 0.0995C15.1565 0.0995 16.0018 0.9353 16.0018 2.0244ZM10.0208 14H7.985V6.353V14H5.979V0.626V6.353V14H3.973V1.169V6.353H3.973V14H2.093V4.136V14H0.645V1.707C0.645 0.3425 1.2394 0 1.9019 0H3.005V3.769C4.5872 2.548 7.6134 2.151 10.0208 2.151V14H10.0208Z" />
    </svg>
  </a> */}
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Useful Links
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/blog"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Terms
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Support & Help
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/contact"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Open Support Ticket
                    </Link>
                  </li>
                  <li>
                    <div className="mb-4 inline-block text-base text-body-color dark:text-body-color-dark">
                      <strong>Email:</strong>
                      <a
                        href="mailto:nationprideitsolution@gmail.com"
                        className="duration-300 hover:text-primary dark:hover:text-primary ms-1"
                      >
                        Nationprideitsolution@gmail.com
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="mb-4 inline-block text-base text-body-color dark:text-body-color-dark">
                      <strong>Phone:</strong>
                      <span className="duration-300 hover:text-primary dark:hover:text-primary ms-1">
                        +91 81208-00945
                      </span>
                    </div>
                  </li>
                  <li>
                    <h3 className="text-base text-body-color">Our Address:</h3>
                    <p className="text-body-color dark:text-body-color-dark">
                      Currently working remotely.
                    </p>
                    <p className="text-body-color dark:text-body-color-dark">
                      Indore, Madhya Pradesh, 452003, India
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
        </div>
        <div className="absolute right-0 top-14 z-[-1]">
          <svg
            width="55"
            height="99"
            viewBox="0 0 55 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
            <mask
              id="mask0_94:899"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="99"
              height="99"
            >
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="#4A6CF7"
              />
            </mask>
            <g mask="url(#mask0_94:899)">
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="url(#paint0_radial_94:899)"
              />
              <g opacity="0.8" filter="url(#filter0_f_94:899)">
                <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_94:899"
                x="12.4852"
                y="-15.1763"
                width="82.7646"
                height="82.7646"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="10.5"
                  result="effect1_foregroundBlur_94:899"
                />
              </filter>
              <radialGradient
                id="paint0_radial_94:899"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
              >
                <stop stopOpacity="0.47" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-24 left-0 z-[-1]">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_94:889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94:889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94:889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94:889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94:889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_94:889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
