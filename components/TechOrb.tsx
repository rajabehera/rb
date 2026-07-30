import React, { useEffect, useRef, useState, useCallback } from 'react';

// SVG Tech Icons
const icons = {
  react: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)" />
    </svg>
  ),
  bootstrap: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="bs-logo-a" x1="76.079" x2="523.48" y1="10.798" y2="365.945" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9013fe" /><stop offset="1" stopColor="#6610f2" />
        </linearGradient>
        <linearGradient id="bs-logo-b" x1="193.508" x2="293.514" y1="109.74" y2="278.872" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" /><stop offset="1" stopColor="#f1e5fc" />
        </linearGradient>
        <filter id="bs-logo-c" x="161.901" y="83.457" width="197" height="249" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" /><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="4" /><feGaussianBlur stdDeviation="8" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
      <g transform="translate(0 2.4375) scale(0.046875)">
        <path fill="url(#bs-logo-a)" d="M56.481 53.32C55.515 25.58 77.128 0 106.342 0h299.353c29.214 0 50.827 25.58 49.861 53.32-.928 26.647.277 61.165 8.964 89.31 8.715 28.232 23.411 46.077 47.48 48.37v26c-24.069 2.293-38.765 20.138-47.48 48.37-8.687 28.145-9.892 62.663-8.964 89.311.966 27.739-20.647 53.319-49.861 53.319H106.342c-29.214 0-50.827-25.58-49.86-53.319.927-26.648-.278-61.166-8.966-89.311C38.802 237.138 24.07 219.293 0 217v-26c24.069-2.293 38.802-20.138 47.516-48.37 8.688-28.145 9.893-62.663 8.965-89.31z" />
        <path fill="url(#bs-logo-b)" filter="url(#bs-logo-c)" stroke="#fff" d="M267.103 312.457c47.297 0 75.798-23.158 75.798-61.355 0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219 0-32.783-25.882-54.138-65.322-54.138h-88.74v217h89.202zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279 0 21.505-16.484 33.535-46.372 33.535h-38.67v-64.814zm0 161.961v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49 0 23.459-16.484 35.941-47.605 35.941h-47.605z" />
      </g>
    </svg>
  ),
  figma: (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(3.995 0) scale(0.01875)">
        <path d="M8.26562 1056C8.26562 941.126 101.464 848 216.428 848H424.591V1056C424.591 1170.87 331.392 1264 216.428 1264C101.464 1264 8.26562 1170.87 8.26562 1056Z" fill="#24CB71" />
        <path d="M424.591 16V432H632.753C747.717 432 840.916 338.874 840.916 224C840.916 109.126 747.717 16 632.753 16H424.591Z" fill="#FF7237" />
        <path d="M631.019 848C745.984 848 839.182 754.875 839.182 640C839.182 525.125 745.984 432 631.019 432C516.054 432 422.857 525.125 422.857 640C422.857 754.875 516.054 848 631.019 848Z" fill="#00B6FF" />
        <path d="M8.26562 224C8.26562 338.874 101.464 432 216.428 432H424.591V16H216.428C101.464 16 8.26562 109.126 8.26562 224Z" fill="#FF3737" />
        <path d="M8.26562 640C8.26562 754.874 101.464 848 216.428 848H424.591V432H216.428C101.464 432 8.26562 525.126 8.26562 640Z" fill="#874FFF" />
      </g>
    </svg>
  ),
  tailwind: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 6C9.6 6 8.1 7.2 7.5 9.6C8.4 8.4 9.45 7.95 10.65 8.25C11.34 8.43 11.82 8.91 12.36 9.45C13.23 10.32 14.25 11.4 16.5 11.4C18.9 11.4 20.4 10.2 21 7.8C20.1 9 19.05 9.45 17.85 9.15C17.16 8.97 16.68 8.49 16.14 7.95C15.27 7.08 14.25 6 12 6ZM7.5 11.4C5.1 11.4 3.6 12.6 3 15C3.9 13.8 4.95 13.35 6.15 13.65C6.84 13.83 7.32 14.31 7.86 14.85C8.73 15.72 9.75 16.8 12 16.8C14.4 16.8 15.9 15.6 16.5 13.2C15.6 14.4 14.55 14.85 13.35 14.55C12.66 14.37 12.18 13.89 11.64 13.35C10.77 12.48 9.75 11.4 7.5 11.4Z" fill="#06B6D4" />
    </svg>
  ),
  nodejs: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <defs>
        <clipPath id="hexClip"><path d="M22.8725 0.4166C22.136 0 21.2616 0 20.5253 0.4166L1.1505 11.6694C0.4142 12.0862 0 12.8733 0 13.707V36.2584C0 37.0921 0.4602 37.8791 1.1505 38.296L20.5253 49.5487C21.2616 49.9653 22.136 49.9653 22.8725 49.5487L42.2471 38.296C42.9836 37.8791 43.3976 37.0921 43.3976 36.2584V13.707C43.3976 12.8733 42.9375 12.0862 42.2471 11.6694L22.8725 0.4166Z"/></clipPath>
        <linearGradient id="nd-main" x1="30.33" y1="8.56" x2="14.9" y2="44.7" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3F8B3D"/><stop offset="0.64" stopColor="#3F873F"/><stop offset="0.93" stopColor="#3DA92E"/><stop offset="1" stopColor="#3DAE2B"/>
        </linearGradient>
        <linearGradient id="nd-r1" x1="18.8" y1="26.8" x2="68" y2="0.4" gradientUnits="userSpaceOnUse">
          <stop offset="0.14" stopColor="#3F873F"/><stop offset="0.4" stopColor="#52A044"/><stop offset="0.71" stopColor="#64B749"/><stop offset="0.91" stopColor="#6ABF4B"/>
        </linearGradient>
        <linearGradient id="nd-r2" x1="0.25" y1="24.5" x2="44" y2="24.5" gradientUnits="userSpaceOnUse">
          <stop offset="0.09" stopColor="#6ABF4B"/><stop offset="0.29" stopColor="#64B749"/><stop offset="0.6" stopColor="#52A044"/><stop offset="0.86" stopColor="#3F873F"/>
        </linearGradient>
      </defs>
      <g transform="translate(1.44 0) scale(0.48)">
        <path fill="url(#nd-main)" d="M22.8725 0.4166C22.136 0 21.2616 0 20.5253 0.4166L1.1505 11.6694C0.4142 12.0862 0 12.8733 0 13.707V36.2584C0 37.0921 0.4602 37.8791 1.1505 38.296L20.5253 49.5487C21.2616 49.9653 22.136 49.9653 22.8725 49.5487L42.2471 38.296C42.9836 37.8791 43.3976 37.0921 43.3976 36.2584V13.707C43.3976 12.8733 42.9375 12.0862 42.2471 11.6694L22.8725 0.4166Z"/>
        <polygon fill="url(#nd-r1)" clipPath="url(#hexClip)" points="21.698901,-1.046618 43.20532,11.948247 21.698901,51.072715 0.152778,38.055107"/>
        <polygon fill="url(#nd-r2)" clipPath="url(#hexClip)" points="21.698901,-1.046618 0.152778,11.948247 21.698901,51.072715 43.20532,38.055107"/>
      </g>
    </svg>
  ),
  javascript: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g transform="scale(0.1875)">
        <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z" />
        <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z" />
      </g>
    </svg>
  ),
  git: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.7 10.7L13.3 1.3C12.6.6 11.4.6 10.7 1.3L8.6 3.4L11.1 5.9C11.8 5.7 12.6 5.8 13.2 6.4C13.8 7 13.9 7.8 13.7 8.5L16.1 10.9C16.8 10.7 17.6 10.8 18.2 11.4C19.1 12.3 19.1 13.7 18.2 14.6C17.3 15.5 15.9 15.5 15 14.6C14.4 14 14.2 13.1 14.5 12.4L12.2 10.1V16.3C12.4 16.4 12.6 16.5 12.8 16.7C13.7 17.6 13.7 19 12.8 19.9C11.9 20.8 10.5 20.8 9.6 19.9C8.7 19 8.7 17.6 9.6 16.7C9.9 16.4 10.2 16.2 10.5 16.1V9.9C10.2 9.8 9.9 9.6 9.6 9.3C9 8.7 8.8 7.8 9.1 7.1L6.7 4.7L1.3 10.1C.6 10.8.6 12 1.3 12.7L10.7 22.1C11.4 22.8 12.6 22.8 13.3 22.1L22.7 12.7C23.4 12 23.4 11.4 22.7 10.7Z" fill="#F05032" />
    </svg>
  ),
  claude: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g transform="scale(0.02)">
        <path fill="#d97757" d="M 233.959793 800.214905 L 468.644287 668.536987 L 472.590637 657.100647 L 468.644287 650.738403 L 457.208069 650.738403 L 417.986633 648.322144 L 283.892639 644.69812 L 167.597321 639.865845 L 54.926208 633.825623 L 26.577238 627.785339 L 3.3e-05 592.751709 L 2.73832 575.27533 L 26.577238 559.248352 L 60.724873 562.228149 L 136.187973 567.382629 L 249.422867 575.194763 L 331.570496 580.026978 L 453.261841 592.671082 L 472.590637 592.671082 L 475.328857 584.859009 L 468.724915 580.026978 L 463.570557 575.194763 L 346.389313 495.785217 L 219.543671 411.865906 L 153.100723 363.543762 L 117.181267 339.060425 L 99.060455 316.107361 L 91.248367 266.01355 L 123.865784 230.093994 L 167.677887 233.073853 L 178.872513 236.053772 L 223.248367 270.201477 L 318.040283 343.570496 L 441.825592 434.738342 L 459.946411 449.798706 L 467.194672 444.64447 L 468.080597 441.020203 L 459.946411 427.409485 L 392.617493 305.718323 L 320.778564 181.932983 L 288.80542 130.630859 L 280.348999 99.865845 C 277.369171 87.221436 275.194641 76.590698 275.194641 63.624268 L 312.322174 13.20813 L 332.8591 6.604126 L 382.389313 13.20813 L 403.248352 31.328979 L 434.013519 101.71814 L 483.865753 212.537048 L 561.181274 363.221497 L 583.812134 407.919434 L 595.892639 449.315491 L 600.40271 461.959839 L 608.214783 461.959839 L 608.214783 454.711609 L 614.577271 369.825623 L 626.335632 265.61084 L 637.771851 131.516846 L 641.718201 93.745117 L 660.402832 48.483276 L 697.530334 24.000122 L 726.52356 37.852417 L 750.362549 72 L 747.060486 94.067139 L 732.886047 186.201416 L 705.100708 330.52356 L 686.979919 427.167847 L 697.530334 427.167847 L 709.61084 415.087341 L 758.496704 350.174561 L 840.644348 247.490051 L 876.885925 206.738342 L 919.167847 161.71814 L 946.308838 140.29541 L 997.61084 140.29541 L 1035.38269 196.429626 L 1018.469849 254.416199 L 965.637634 321.422852 L 921.825562 378.201538 L 859.006714 462.765259 L 819.785278 530.41626 L 823.409424 535.812073 L 832.75177 534.92627 L 974.657776 504.724915 L 1051.328979 490.872559 L 1142.818848 475.167786 L 1184.214844 494.496582 L 1188.724854 514.147644 L 1172.456421 554.335693 L 1074.604126 578.496765 L 959.838989 601.449829 L 788.939636 641.879272 L 786.845764 643.409485 L 789.261841 646.389343 L 866.255127 653.637634 L 899.194702 655.409424 L 979.812134 655.409424 L 1129.932861 666.604187 L 1169.154419 692.537109 L 1192.671265 724.268677 L 1188.724854 748.429688 L 1128.322144 779.194641 L 1046.818848 759.865845 L 856.590759 714.604126 L 791.355774 698.335754 L 782.335693 698.335754 L 782.335693 703.731567 L 836.69812 756.885986 L 936.322205 846.845581 L 1061.073975 962.81897 L 1067.436279 991.490112 L 1051.409424 1014.120911 L 1034.496704 1011.704712 L 924.885986 929.234924 L 882.604126 892.107544 L 786.845764 811.48999 L 780.483276 811.48999 L 780.483276 819.946289 L 802.550415 852.241699 L 919.087341 1027.409424 L 925.127625 1081.127686 L 916.671204 1098.604126 L 886.469849 1109.154419 L 853.288696 1103.114136 L 785.073914 1007.355835 L 714.684631 899.516785 L 657.906067 802.872498 L 650.979858 806.81897 L 617.476624 1167.704834 L 601.771851 1186.147705 L 565.530212 1200 L 535.328857 1177.046997 L 519.302124 1139.919556 L 535.328857 1066.550537 L 554.657776 970.792053 L 570.362488 894.68457 L 584.536926 800.134277 L 592.993347 768.724976 L 592.429626 766.630859 L 585.503479 767.516968 L 514.22821 865.369263 L 405.825531 1011.865906 L 320.053711 1103.677979 L 299.516815 1111.812256 L 263.919525 1093.369263 L 267.221497 1060.429688 L 287.114136 1031.114136 L 405.825531 880.107361 L 477.422913 786.52356 L 523.651062 732.483276 L 523.328918 724.671265 L 520.590698 724.671265 L 205.288605 929.395935 L 149.154434 936.644409 L 124.993355 914.01355 L 127.973183 876.885986 L 139.409409 864.80542 L 234.201385 799.570435 Z" />
      </g>
    </svg>
  ),
  css: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g transform="scale(0.75)">
        <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8" />
        <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD" />
        <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="#FFFFFF" />
      </g>
    </svg>
  ),
  gemini: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path d="M21.38 10.72c-1.84-.79-3.45-1.88-4.83-3.26-1.38-1.38-2.47-2.99-3.26-4.83-.3-.7-.55-1.43-.73-2.17A.46.46 0 0 0 12 .01a.46.46 0 0 0-.46.35c-.18.74-.43 1.46-.73 2.17-.79 1.84-1.88 3.45-3.26 4.83-1.38 1.38-2.99 2.47-4.83 3.26-.7.3-1.43.55-2.17.73a.46.46 0 0 0-.35.46c0 .21.15.4.35.46.74.18 1.46.43 2.17.73 1.84.79 3.45 1.88 4.83 3.26 1.38 1.38 2.47 2.99 3.26 4.83.3.7.55 1.43.73 2.17.06.2.25.35.46.35s.4-.15.46-.35c.18-.74.43-1.46.73-2.17.79-1.84 1.88-3.45 3.26-4.83 1.38-1.38 2.99-2.47 4.83-3.26.7-.3 1.43-.55 2.17-.73a.46.46 0 0 0 .35-.46.46.46 0 0 0-.35-.46c-.74-.18-1.46-.43-2.17-.73Z" fill="url(#gemini-grad)" />
      <defs>
        <linearGradient id="gemini-grad" x1="6" y1="16" x2="18" y2="6" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4893FC" /><stop offset="0.55" stopColor="#969DFF" /><stop offset="1" stopColor="#BD99FE" />
        </linearGradient>
      </defs>
    </svg>
  ),
  html: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path d="M2.01 21.54L0 0l24 .05-2.12 21.49L12 24z" fill="#E34F26" />
      <path d="M12.09 21.95V2.05l9.88.03-1.76 17.82z" fill="#EF652A" />
      <path d="M19.25 6.96l.28-2.64H4.33l.84 8.1h10.5l-.42 3.46-3.36.8-3.4-.87-.18-2.06H5.33l.41 4.2L12 19.5l6.27-1.75.84-8.23H7.97l-.31-2.56z" fill="#FFFFFF" />
    </svg>
  ),
  framer: (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
  <path d="M19 2H6.75A1 1 0 0 0 6 3.66L9.8 8H5a1 1 0 0 0-1 1v6a1 1 0 0 0 .29.71l6 6A1 1 0 0 0 11 22a.84.84 0 0 0 .38-.08A1 1 0 0 0 12 21v-5h5.25a1 1 0 0 0 .75-1.66L14.2 10H19a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"/>
</svg>
  ),
};

const orbitalItems = [
  // Inner orbit
  { key: 'react',      label: 'React',       orbit: 0.30, speed: 18, startAngle: 0,   color: '#61DAFB', size: 36 },
  { key: 'bootstrap',  label: 'Bootstrap',   orbit: 0.30, speed: 18, startAngle: 120, color: '#8833FF', size: 36 },
  { key: 'figma',      label: 'Figma',       orbit: 0.30, speed: 18, startAngle: 240, color: '#A259FF', size: 36 },
  // Middle orbit
  { key: 'tailwind',   label: 'Tailwind',    orbit: 0.46, speed: 28, startAngle: 30,  color: '#06B6D4', size: 34 },
  { key: 'nodejs',     label: 'Node.js',     orbit: 0.46, speed: 28, startAngle: 120, color: '#339933', size: 34 },
  { key: 'javascript', label: 'JavaScript',  orbit: 0.46, speed: 28, startAngle: 210, color: '#FFD43B', size: 34 },
  // { key: 'git',        label: 'Git',         orbit: 0.46, speed: 28, startAngle: 300, color: '#F05032', size: 34 },
  // Outer orbit
  { key: 'claude',     label: 'Claude AI',   orbit: 0.62, speed: 40, startAngle: 0,   color: '#d97757', size: 32 },
  { key: 'css',        label: 'CSS3',        orbit: 0.62, speed: 40, startAngle: 72,  color: '#264DE4', size: 32 },
  { key: 'gemini',     label: 'Gemini',      orbit: 0.62, speed: 40, startAngle: 144, color: '#969DFF', size: 32 },
  { key: 'html',       label: 'HTML5',       orbit: 0.62, speed: 40, startAngle: 216, color: '#E44D26', size: 32 },
  // { key: 'framer',     label: 'Framer',      orbit: 0.62, speed: 40, startAngle: 288, color: '#0055FF', size: 32 },
];

// Per-item frozen angle when hovered
const frozenAngles = {};

const TechNode = ({ item, containerSize, time, onHoverChange }) => {
  const [hovered, setHovered] = useState(false);
  const cx = containerSize / 2;
  const radius = item.orbit * containerSize;
  const frozenTimeRef = useRef(null);

  const handleMouseEnter = useCallback(() => {
    frozenTimeRef.current = time;
    setHovered(true);
    onHoverChange(true);
  }, [time, onHoverChange]);

  const handleMouseLeave = useCallback(() => {
    frozenTimeRef.current = null;
    setHovered(false);
    onHoverChange(false);
  }, [onHoverChange]);

  // When hovered, use the frozen time so the icon stays in place
  const t = (hovered && frozenTimeRef.current !== null) ? frozenTimeRef.current : time;
  const angleRad = ((item.startAngle + (t / item.speed) * 360) * Math.PI) / 180;
  const x = cx + radius * Math.cos(angleRad);
  const y = cx + radius * Math.sin(angleRad);
  const half = item.size / 2;

  return (
    <div
      className="absolute cursor-default"
      style={{
        // Position the center of the icon at (x, y)
        left: x - half,
        top: y - half,
        width: item.size,
        height: item.size,
        // overflow visible so label and scale-up aren't clipped
        overflow: 'visible',
        pointerEvents: 'auto',
        zIndex: hovered ? 50 : 20,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Icon pill */}
      <div
        style={{
          width: item.size,
          height: item.size,
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `radial-gradient(circle at 30% 30%, ${item.color}22, #0a0a0f88)`,
          border: `1px solid ${hovered ? item.color + '99' : item.color + '44'}`,
          boxShadow: hovered
            ? `0 0 20px ${item.color}66, 0 0 8px ${item.color}44, inset 0 0 8px ${item.color}22`
            : `0 0 12px ${item.color}22, inset 0 0 8px ${item.color}11`,
          backdropFilter: 'blur(8px)',
          transform: hovered ? 'scale(1.45)' : 'scale(1)',
          transformOrigin: 'center center',
          transition: 'transform 0.2s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s ease, border-color 0.2s ease',
          filter: hovered ? `drop-shadow(0 0 10px ${item.color})` : 'none',
        }}
      >
        <div style={{ width: item.size * 0.6, height: item.size * 0.6, flexShrink: 0 }}>
          {icons[item.key]}
        </div>
      </div>

      {/* Label badge — shown on hover, positioned below via absolute */}
      {hovered && (
        <div
          style={{
            position: 'absolute',
            top: item.size + 8,
            left: '50%',
            transform: 'translateX(-50%)',
            whiteSpace: 'nowrap',
            fontSize: '9px',
            fontFamily: 'monospace',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            padding: '2px 8px',
            borderRadius: '4px',
            color: item.color,
            background: '#07070eee',
            border: `1px solid ${item.color}66`,
            boxShadow: `0 0 10px ${item.color}44`,
            pointerEvents: 'none',
            animation: 'labelPop 0.15s ease-out forwards',
            zIndex: 100,
          }}
        >
          {item.label}
        </div>
      )}
    </div>
  );
};

const ORBITS = [0.30, 0.46, 0.62];
const ORBIT_COLORS = ['#bf00ff', '#2cff05', '#ffffff'];
const ORBIT_OPACITY = [0.35, 0.25, 0.15];

export default function TechOrb() {
  const [time, setTime] = useState(0);
  const [paused, setPaused] = useState(false);
  const [containerSize, setContainerSize] = useState(420);
  const pausedRef = useRef(false);
  const rafRef = useRef(0);
  const lastRef = useRef(0);

  // Track hover count so multiple overlapping hovers work correctly
  const hoverCount = useRef(0);

  const onHoverChange = useCallback((entering) => {
    hoverCount.current += entering ? 1 : -1;
    const nowPaused = hoverCount.current > 0;
    pausedRef.current = nowPaused;
    setPaused(nowPaused);
  }, []);

  // Responsive size
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setContainerSize(w < 400 ? 300 : w < 640 ? 340 : w < 768 ? 380 : 460);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Animation loop — skip dt accumulation when paused
  useEffect(() => {
    const loop = (ts) => {
      if (lastRef.current === 0) lastRef.current = ts;
      const dt = (ts - lastRef.current) / 1000;
      lastRef.current = ts;
      if (!pausedRef.current) setTime(t => t + dt);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const cx = containerSize / 2;

  return (
    <div
      className="relative flex items-center justify-center select-none"
      style={{ width: containerSize, height: containerSize }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 50%, #bf00ff18 0%, #2cff0510 40%, transparent 70%)', filter: 'blur(20px)' }} />
      <div className="absolute inset-[15%] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle at 40% 35%, #bf00ff30 0%, transparent 65%)', animation: 'orb-pulse 3s ease-in-out infinite' }} />

      {/* SVG rings */}
      <svg className="absolute inset-0 pointer-events-none" width={containerSize} height={containerSize} viewBox={`0 0 ${containerSize} ${containerSize}`} style={{ zIndex: 5 }}>
        {ORBITS.map((r, i) => (
          <circle key={i} cx={cx} cy={cx} r={r * containerSize} fill="none"
            stroke={ORBIT_COLORS[i]} strokeWidth="0.6" strokeOpacity={ORBIT_OPACITY[i]}
            strokeDasharray={i % 2 === 0 ? '4 8' : '2 12'} />
        ))}
        <line x1={cx} y1="0" x2={cx} y2={containerSize} stroke="#fff" strokeWidth="0.4" strokeOpacity="0.05" />
        <line x1="0" y1={cx} x2={containerSize} y2={cx} stroke="#fff" strokeWidth="0.4" strokeOpacity="0.05" />
        <circle cx={cx} cy={cx} r={cx - 2} fill="none" stroke="#fff" strokeWidth="0.5" strokeOpacity="0.08" strokeDasharray="1 6" />
        <rect x={cx - 0.5} y="0" width="1" height="14" fill="#2cff05" opacity="0.8" />
        <rect x={cx - 0.5} y={containerSize - 14} width="1" height="14" fill="#bf00ff" opacity="0.8" />
        <rect x="0" y={cx - 0.5} width="14" height="1" fill="#fff" opacity="0.3" />
        <rect x={containerSize - 14} y={cx - 0.5} width="14" height="1" fill="#fff" opacity="0.3" />
        <path d={`M ${cx} 6 A ${cx - 6} ${cx - 6} 0 0 1 ${containerSize - 6} ${cx}`} stroke="#bf00ff" strokeWidth="1.5" fill="none" strokeOpacity="0.5" strokeDasharray="6 10" />
        <path d={`M ${cx} ${containerSize - 6} A ${cx - 6} ${cx - 6} 0 0 1 6 ${cx}`} stroke="#2cff05" strokeWidth="1.5" fill="none" strokeOpacity="0.4" strokeDasharray="3 14" />
      </svg>

      {/* Tech nodes — pointer-events none on wrapper, each node re-enables its own */}
      <div className="absolute inset-0" style={{ zIndex: 10, pointerEvents: 'none', overflow: 'visible' }}>
        {orbitalItems.map((item) => (
          <TechNode key={item.key} item={item} containerSize={containerSize} time={time} isAnyHovered={paused} onHoverChange={onHoverChange} />
        ))}
      </div>

      {/* Inner spinning rings */}
      <div className="absolute rounded-full border-2 pointer-events-none"
        style={{ inset: containerSize * 0.22, borderColor: 'transparent', borderTopColor: '#2cff0566', borderRightColor: '#bf00ff66', animation: paused ? 'none' : 'orb-spin 8s linear infinite' }} />
      <div className="absolute rounded-full border pointer-events-none"
        style={{ inset: containerSize * 0.18, borderColor: 'transparent', borderBottomColor: '#bf00ff33', borderLeftColor: '#2cff0533', animation: paused ? 'none' : 'orb-spin 12s linear infinite reverse' }} />

      {/* Core */}
      <div className="absolute rounded-full overflow-hidden flex items-center justify-center"
        style={{
          inset: containerSize * 0.27,
          background: 'radial-gradient(135deg at 30% 25%, #1a1a2e 0%, #0a0a0f 60%, #110822 100%)',
          border: '1px solid #2d2d3d',
          boxShadow: '0 0 40px #bf00ff33, 0 0 80px #2cff0511, inset 0 0 30px #00000088',
          zIndex: 30,
        }}
      >
        {/* Grid texture */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#2d2d3d 1px, transparent 1px), linear-gradient(90deg, #2d2d3d 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
        {/* Scan line */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(transparent 0%, #2cff0508 50%, transparent 100%)', backgroundSize: '100% 200%', animation: 'scanline 3s linear infinite' }} />
        {/* Monogram */}
        {/* <div className="relative z-10 flex flex-col items-center justify-center">
          <span className="font-black tracking-tighter leading-none" style={{ fontSize: containerSize * 0.13, fontFamily: '"Bebas Neue", Impact, sans-serif', background: 'linear-gradient(135deg, #fff 0%, #ccc 40%, #888 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3))' }}>
            RB
          </span>
          <div className="mt-1 font-mono uppercase" style={{ fontSize: containerSize * 0.025, color: '#2cff05', opacity: 0.7, textShadow: '0 0 8px #2cff05', letterSpacing: '0.3em' }}>PORTFOLIO</div>
        </div> */}
        <div>
          <img src="/images/aRB.png" alt="Tech Orb" className="absolute inset-0" />
        </div>
        {/* Corner marks */}
        {[[8, 8, 0], [8, null, 90], [null, 8, -90], [null, null, 180]].map(([top, left, rot], i) => (
          <div key={i} className="absolute w-3 h-3" style={{ top: top ?? undefined, bottom: top === null ? 8 : undefined, left: left ?? undefined, right: left === null ? 8 : undefined, borderTop: '1.5px solid #bf00ff88', borderLeft: '1.5px solid #bf00ff88', transform: `rotate(${rot}deg)` }} />
        ))}
      </div>

      {/* Particles */}
      {[
        { top: '18%', left: '12%', color: '#2cff05', size: 3, delay: '0s' },
        { top: '72%', left: '8%',  color: '#bf00ff', size: 2, delay: '0.8s' },
        { top: '25%', right: '10%', color: '#61DAFB', size: 2.5, delay: '1.5s' },
        { top: '65%', right: '15%', color: '#FFD43B', size: 2, delay: '0.4s' },
        { top: '45%', left: '5%',  color: '#fff',    size: 1.5, delay: '2s' },
      ].map((p, i) => (
        <div key={i} className="absolute rounded-full pointer-events-none" style={{ width: p.size, height: p.size, top: p.top, left: p.left, right: p.right, background: p.color, boxShadow: `0 0 6px ${p.color}`, animation: `particle-ping 2s ${p.delay} ease-in-out infinite`, zIndex: 40 }} />
      ))}

      <style>{`
        @keyframes scanline { 0% { background-position: 0% 0%; } 100% { background-position: 0% 100%; } }
        @keyframes particle-ping { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.3; transform: scale(1.8); } }
        @keyframes orb-pulse { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
        @keyframes orb-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes labelPop { from { opacity: 0; transform: translateY(4px) scale(0.9); } to { opacity: 1; transform: translateY(0) scale(1); } }
      `}</style>
    </div>
  );
}