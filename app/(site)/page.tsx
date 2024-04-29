import Link from "next/link";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col jusitfy-center py-8 sm:px-6 lg:px-8 bg-gray-100 -mt-2">
      <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col justify-center items-center min-h-full">
        <svg
          width="200"
          height="200"
          viewBox="0 0 472 472"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto w-auto"
        >
          <g filter="url(#filter0_d_2_5)">
            <path
              d="M374.168 236C376.008 236 377.504 234.508 377.461 232.669C376.623 197.04 362.363 162.989 337.466 137.375C311.794 110.963 276.835 95.6027 240.017 94.557C203.2 93.5113 167.425 106.863 140.295 131.775C113.166 156.687 96.8187 191.196 94.7281 227.969C92.6376 264.742 104.968 300.881 129.1 328.707C153.231 356.533 187.262 373.853 223.961 376.987C260.66 380.121 297.135 368.821 325.635 345.489C353.274 322.862 371.301 290.647 376.172 255.342C376.423 253.52 375.106 251.868 373.278 251.659C371.45 251.451 369.803 252.764 369.55 254.587C364.877 288.168 347.712 318.805 321.414 340.333C294.256 362.567 259.499 373.334 224.528 370.348C189.557 367.362 157.129 350.857 134.134 324.342C111.138 297.826 99.3883 263.388 101.38 228.347C103.373 193.305 118.95 160.422 144.802 136.683C170.654 112.944 204.744 100.221 239.828 101.217C274.912 102.214 308.225 116.851 332.688 142.019C356.376 166.39 369.959 198.774 370.796 232.669C370.841 234.508 372.329 236 374.168 236Z"
              fill="url(#paint0_linear_2_5)"
            />
            <path
              d="M342.745 129.255C344.167 127.833 344.17 125.525 342.715 124.137C314.541 97.259 277.219 81.9691 238.195 81.415C197.956 80.8437 159.081 95.9849 129.829 123.621C100.576 151.258 83.2531 189.211 81.5397 229.417C79.8262 269.623 93.8575 308.913 120.652 338.938C147.447 368.963 184.894 387.357 225.035 390.211C265.176 393.065 304.848 380.155 335.622 354.224C366.395 328.292 385.845 291.383 389.838 251.339C393.71 212.504 382.748 173.689 359.236 142.65C358.022 141.048 355.729 140.789 354.155 142.04C352.582 143.292 352.325 145.579 353.537 147.183C375.87 176.737 386.278 213.667 382.594 250.617C378.789 288.775 360.255 323.946 330.931 348.657C301.606 373.367 263.802 385.669 225.551 382.95C187.3 380.23 151.617 362.702 126.084 334.091C100.551 305.48 87.1802 268.04 88.813 229.727C90.4458 191.414 106.953 155.248 134.828 128.913C162.703 102.578 199.748 88.1499 238.091 88.6943C275.22 89.2214 310.734 103.747 337.566 129.287C339.022 130.673 341.324 130.676 342.745 129.255Z"
              fill="url(#paint1_linear_2_5)"
            />
            <path
              d="M153.505 93.1141C152.406 91.2114 149.97 90.5554 148.094 91.6985C111.749 113.838 85.0498 148.914 73.4261 189.955C61.4406 232.273 66.4283 277.597 87.3293 316.296C108.23 354.995 143.397 384.019 185.358 397.201C227.319 410.383 272.766 406.684 312.043 386.89C351.319 367.096 381.33 332.768 395.698 291.198C410.066 249.629 407.659 204.095 388.988 164.272C370.318 124.449 336.855 93.4756 295.71 77.9331C255.807 62.8598 211.729 63.452 172.311 79.4939C170.276 80.3221 169.354 82.6702 170.23 84.6853C171.106 86.7003 173.448 87.6189 175.484 86.7931C213.001 71.5754 254.933 71.0349 292.898 85.3763C332.106 100.187 363.993 129.702 381.784 167.649C399.576 205.597 401.87 248.987 388.178 288.599C374.487 328.211 345.889 360.923 308.462 379.785C271.035 398.647 227.728 402.172 187.743 389.61C147.758 377.049 114.247 349.392 94.33 312.515C74.4132 275.638 69.6604 232.449 81.0815 192.123C92.1409 153.075 117.521 119.693 152.073 98.5909C153.948 97.4457 154.603 95.0169 153.505 93.1141Z"
              fill="url(#paint2_linear_2_5)"
            />
            <path
              d="M185.418 244.189L220.078 145.851C220.219 145.451 220.597 145.183 221.021 145.183H280.416C281.205 145.183 281.683 146.053 281.261 146.719L245.881 202.541C245.5 203.142 245.851 203.937 246.552 204.061L285.428 210.921C286.198 211.057 286.521 211.984 286.003 212.569L189.931 321.037C189.154 321.915 187.762 320.97 188.29 319.924L230.084 237.082C230.466 236.325 229.791 235.466 228.965 235.658L186.587 245.495C185.819 245.674 185.156 244.933 185.418 244.189Z"
              fill="url(#paint3_linear_2_5)"
              stroke="url(#paint4_linear_2_5)"
              stroke-width="5"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_2_5"
              x="-4"
              y="0"
              width="480"
              height="480"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2_5"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2_5"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_2_5"
              x1="236"
              y1="94.5"
              x2="236"
              y2="377.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#7411C1" />
              <stop offset="1" stop-color="#D30DA8" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2_5"
              x1="126.681"
              y1="126.681"
              x2="345.319"
              y2="345.319"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#7411C1" />
              <stop offset="1" stop-color="#D30DA8" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_2_5"
              x1="89.6689"
              y1="320.484"
              x2="382.331"
              y2="151.516"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#7411C1" />
              <stop offset="1" stop-color="#D30DA8" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_2_5"
              x1="236"
              y1="145.183"
              x2="236"
              y2="326.817"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#6D3232" />
              <stop offset="1" stop-color="#D11C1C" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_2_5"
              x1="236"
              y1="145.183"
              x2="227.606"
              y2="343.1"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#6D3232" />
              <stop offset="1" stop-color="#D11C1C" />
            </linearGradient>
          </defs>
        </svg>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-800">
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
      <div className="text-center mt-4">
        Developed By{" "}
        <Link
          href="https://mrinmoy3009.vercel.app/"
          className="font-bold underline underline-offset-2"
        >
          Mrinmoy Saikia
        </Link>
      </div>
    </div>
  );
}
