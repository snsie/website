import { FC } from 'react'

export const Logo: FC<{ fillColor?: string }> = ({ fillColor }) => {
  return (
    <svg width="102" height="25" viewBox="0 0 102 25" fill={fillColor} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M99.5885 15.1557L94.95 8.16702L94.9474 8.16288C94.1896 6.99457 93.8054 5.8335 93.8054 4.71175C93.8054 3.88544 94.0107 3.13727 94.3827 2.60433C94.7985 2.00879 95.3968 1.70714 96.161 1.70714C96.7504 1.70714 97.2656 1.8722 97.6908 2.19713C98.0897 2.50189 98.4218 2.95203 98.6781 3.53516L98.7296 3.65364C98.756 3.71366 98.807 3.75971 98.8701 3.77989C98.9333 3.80007 99.0022 3.79283 99.0596 3.76023L99.1717 3.69555H99.1727L100.139 3.13778L100.141 3.13675L100.243 3.07776C100.296 3.04672 100.335 2.99601 100.35 2.93703C100.365 2.87804 100.355 2.81544 100.323 2.76318L100.264 2.66797L100.262 2.66487C99.4269 1.31029 97.9708 0.564697 96.161 0.564697C94.8464 0.564697 93.6591 1.00036 92.8171 1.79148C91.973 2.58467 91.5083 3.70332 91.5083 4.94252C91.5083 6.51286 91.8698 7.67755 92.7981 9.09733C92.7997 9.09992 92.8013 9.1025 92.8034 9.10509L97.4345 16.115L97.4392 16.1227C98.4112 17.5715 98.8838 18.8619 98.8838 20.0685C98.8838 21.0961 98.6612 21.955 98.2402 22.5521C97.7818 23.2025 97.0935 23.5326 96.1941 23.5326C95.2947 23.5326 94.559 23.1989 94.0564 22.5412C93.5933 21.9348 93.3381 21.0568 93.3381 20.068V19.2981C93.3381 19.1724 93.2344 19.0704 93.1065 19.0704H91.1731C91.0452 19.0704 90.9415 19.1724 90.9415 19.2981V20.232C90.9415 22.7653 93.1997 24.675 96.1946 24.675C97.6834 24.675 98.9533 24.2104 99.8669 23.3308C100.77 22.46 101.248 21.2637 101.248 19.8709C101.248 18.3787 100.705 16.8363 99.5895 15.1562L99.5885 15.1557Z"
        fill={fillColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.3323 23.9087L43.4581 24.0842C43.5081 24.154 43.5144 24.2451 43.4744 24.3206C43.4344 24.3962 43.3554 24.4438 43.2686 24.4438H40.5694C40.4921 24.4438 40.42 24.406 40.3768 24.3429C40.3342 24.2797 40.3258 24.1995 40.3552 24.1292L40.421 23.9714C40.6278 23.4772 40.6215 23.1528 40.5357 22.7301C40.5348 22.7273 40.5343 22.7242 40.5338 22.7213L40.5336 22.7203L39.6848 18.1774H34.2248L33.7086 21.0128V21.0143L33.6917 21.107C33.6723 21.2156 33.576 21.2948 33.4639 21.2948H32.7624C32.6934 21.2948 32.6287 21.2653 32.5845 21.2136C32.5403 21.1618 32.5219 21.0935 32.534 21.0273L32.5582 20.8938L35.762 3.04517C35.7626 3.04362 35.7631 3.04206 35.7631 3.04051C35.8457 2.56811 35.871 2.27371 35.8499 2.02535C35.8299 1.78941 35.7647 1.57417 35.6231 1.28183V1.28028L35.5452 1.11885C35.511 1.04848 35.5163 0.965691 35.5589 0.899463C35.6015 0.833234 35.6752 0.793393 35.7547 0.793393H37.4729C38.197 0.793393 38.8428 1.34599 38.9806 2.08071C38.9817 2.08382 38.9822 2.08692 38.9828 2.09003L42.8534 22.5945C42.8536 22.5953 42.8538 22.5961 42.854 22.597C42.8545 22.5989 42.855 22.601 42.855 22.6028L42.8645 22.6592C42.9255 23.0245 42.995 23.4389 43.3302 23.9056L43.3323 23.9087ZM36.9109 3.49014L34.4506 17.0349H39.458L36.9109 3.49014Z"
        fill={fillColor}
      />
      <path
        d="M0.231555 0.793911H9.80792C9.9358 0.793911 10.0395 0.895841 10.0395 1.02157V1.70921C10.0395 1.83494 9.9358 1.93687 9.80792 1.93687H6.16883V22.6928C6.16883 22.9422 6.17672 23.1218 6.21566 23.3023C6.25619 23.4907 6.33355 23.6904 6.46616 23.9512L6.54984 24.1162C6.58562 24.1866 6.58142 24.2704 6.53931 24.3377C6.49721 24.4044 6.42248 24.4453 6.34249 24.4453H3.69803C3.61752 24.4453 3.54279 24.4044 3.50069 24.3372C3.45858 24.2699 3.4549 24.1861 3.49069 24.1152L3.57436 23.9501C3.70698 23.6899 3.78381 23.4902 3.82434 23.3023C3.86328 23.1212 3.87117 22.9417 3.87117 22.6923V1.93635H0.231555C0.103673 1.93635 0 1.83442 0 1.70869V1.02157C0 0.895841 0.103673 0.793911 0.231555 0.793911Z"
        fill={fillColor}
      />
      <path
        d="M67.1003 1.28856C67.2335 1.55037 67.3108 1.75009 67.3508 1.93687C67.3898 2.11745 67.3977 2.29751 67.3977 2.54638V19.4921C67.3977 19.6179 67.5013 19.7198 67.6292 19.7198H75.0027C75.1305 19.7198 75.2342 19.6179 75.2342 19.4921V18.8055C75.2342 18.6798 75.1305 18.5779 75.0027 18.5779H69.6948V9.05645H75.0027C75.1305 9.05645 75.2342 8.95452 75.2342 8.82879V8.14219C75.2342 8.01646 75.1305 7.91453 75.0027 7.91453H69.6948V1.93687H75.0027C75.1305 1.93687 75.2342 1.83494 75.2342 1.70921V1.02209C75.2342 0.896358 75.1305 0.794428 75.0027 0.794428H67.224C67.1435 0.794428 67.0693 0.835304 67.0267 0.902567C66.9846 0.969831 66.9803 1.05365 67.0167 1.12402L67.1003 1.28907V1.28856Z"
        fill={fillColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M76.0778 22.7648L76.3446 23.159L76.3441 23.1595L76.4088 23.2558C76.4425 23.3065 76.4551 23.3686 76.4425 23.4281C76.4299 23.4876 76.3941 23.5398 76.342 23.5729L76.2436 23.6356C76.243 23.6358 76.2424 23.6362 76.2417 23.6366L76.2409 23.6371C76.2405 23.6373 76.2402 23.6375 76.2399 23.6376C74.989 24.4344 73.4555 24.8385 71.6825 24.8385C69.7674 24.8385 68.2544 24.5074 66.9198 23.7965C65.6305 23.1099 64.468 22.0419 63.2602 20.4359V20.4348C62.6392 19.6127 62.1298 18.8671 61.6804 18.2089L61.552 18.0211C61.0862 17.3397 60.6663 16.7369 60.2479 16.2588C59.8153 15.7652 59.4069 15.4341 58.9643 15.2178C58.4991 14.9901 57.9823 14.8773 57.3466 14.8654V24.2171C57.3466 24.3429 57.2429 24.4448 57.1151 24.4448H55.2816C55.1537 24.4448 55.05 24.3429 55.05 24.2171V2.54638C55.05 2.29699 55.0421 2.11745 55.0032 1.93687C54.9632 1.75009 54.8858 1.55037 54.7527 1.28856L54.669 1.1235C54.6327 1.05313 54.6369 0.969313 54.679 0.90205C54.7216 0.834786 54.7958 0.793911 54.8763 0.793911H57.9676C59.9663 0.793911 61.6304 1.44947 62.7797 2.68971C63.9196 3.92011 64.5222 5.69742 64.5222 7.82915C64.5222 11.019 62.9987 13.4539 60.481 14.4086C62.2161 15.2752 63.5444 16.9511 65.2531 19.2707L65.2579 19.2769C67.2298 21.9643 69.0317 23.6299 71.9172 23.6299C73.4854 23.6299 74.5848 23.3432 75.5936 22.6711H75.5947L75.6899 22.6075C75.741 22.5733 75.8031 22.5609 75.8641 22.5723C75.9247 22.5837 75.9783 22.6188 76.0126 22.669L76.0768 22.7632L76.0778 22.7648ZM57.5666 1.93687H57.3466V13.7214H57.5661C59.0633 13.7214 60.2089 13.1963 60.972 12.1604C61.7146 11.1535 62.0908 9.78704 62.0908 7.82915C62.0908 5.87127 61.7646 4.45201 61.0925 3.49066C60.3626 2.44497 59.209 1.93687 57.5666 1.93687Z"
        fill={fillColor}
      />
      <path
        d="M86.8888 0.793911H88.7233C88.8512 0.793911 88.9549 0.895841 88.9549 1.02157V19.7389C88.9549 21.1892 88.4828 22.4202 87.5892 23.2987C86.6735 24.1985 85.3637 24.674 83.8017 24.674C81.9919 24.674 80.5352 23.9284 79.7001 22.5738L79.639 22.475C79.6069 22.4227 79.5969 22.3601 79.6122 22.3011C79.6274 22.2422 79.6659 22.1915 79.7195 22.1604L79.8211 22.1014L79.8232 22.1004L80.902 21.4785C80.9594 21.4454 81.0283 21.4381 81.0915 21.4583C81.1546 21.4785 81.2057 21.5245 81.232 21.5845L81.282 21.6989C81.2823 21.6997 81.2825 21.7003 81.2828 21.701C81.2831 21.7016 81.2833 21.7022 81.2836 21.703C81.5404 22.2872 81.873 22.7373 82.2708 23.0416C82.6966 23.3665 83.2118 23.5316 83.8012 23.5316C84.8364 23.5316 85.5731 23.1373 86.0536 22.327C86.4483 21.6611 86.6572 20.7091 86.6572 19.5749V1.02157C86.6572 0.895841 86.7609 0.793911 86.8888 0.793911Z"
        fill={fillColor}
      />
      <path
        d="M36.152 23.41H36.1515L35.8852 23.0493L35.8205 22.9608C35.7473 22.862 35.6078 22.8377 35.5042 22.9055L35.4142 22.9645L35.4121 22.966C35.0616 23.1958 34.6985 23.3023 34.2696 23.3023H26.9419V12.0098H32.5171C32.645 12.0098 32.7487 11.9079 32.7487 11.7822V11.0951C32.7487 10.9693 32.645 10.8674 32.5171 10.8674H26.9419V1.93687H32.5171C32.645 1.93687 32.7487 1.83494 32.7487 1.70921V1.02157C32.7487 0.895841 32.645 0.793911 32.5171 0.793911H24.4716C24.3911 0.793911 24.3169 0.834786 24.2743 0.90205C24.2317 0.969313 24.228 1.05313 24.2643 1.1235L24.3475 1.287V1.28856C24.4811 1.55037 24.5585 1.75009 24.5985 1.93635C24.6374 2.11745 24.6448 2.29751 24.6448 2.54638V24.2171C24.6448 24.3429 24.7485 24.4448 24.8763 24.4448H34.4032C35.0705 24.4448 35.5742 24.2756 36.0867 23.8798L36.1741 23.8115C36.272 23.7359 36.2915 23.5973 36.2178 23.4984L36.152 23.4094V23.41Z"
        fill={fillColor}
      />
      <path
        d="M76.7235 23.2827C76.7235 22.5697 77.3135 21.9897 78.0387 21.9897C78.7644 21.9897 79.3543 22.5692 79.3543 23.2827C79.3543 23.9962 78.7638 24.5762 78.0387 24.5762C77.3135 24.5762 76.7235 23.9957 76.7235 23.2827Z"
        fill={fillColor}
      />
      <path
        d="M21.8093 23.9501C21.6767 23.6899 21.5998 23.4896 21.5588 23.3023C21.5198 23.1212 21.5125 22.9412 21.5125 22.6923V1.02157C21.5125 0.895841 21.4088 0.793911 21.2809 0.793911H19.4474C19.3196 0.793911 19.2159 0.895841 19.2159 1.02157V13.7214H13.6375V1.02157C13.6375 0.895841 13.5338 0.793911 13.406 0.793911H11.5725C11.4446 0.793911 11.3409 0.895841 11.3409 1.02157V24.2171C11.3409 24.3429 11.4446 24.4448 11.5725 24.4448H13.406C13.5338 24.4448 13.6375 24.3429 13.6375 24.2171V14.8644H19.2159V24.2171C19.2159 24.3429 19.3196 24.4448 19.4474 24.4448H21.6861C21.7667 24.4448 21.8409 24.4039 21.8835 24.3366C21.9256 24.2694 21.9298 24.1856 21.8935 24.1147L21.8098 23.9496L21.8093 23.9501Z"
        fill={fillColor}
      />
      <path
        d="M43.6086 0.793911H53.1849C53.3128 0.793911 53.4165 0.895841 53.4165 1.02157V1.70921C53.4165 1.83494 53.3128 1.93687 53.1849 1.93687H49.5453V22.6923C49.5453 22.9412 49.5532 23.1212 49.5922 23.3018C49.6327 23.4896 49.71 23.6894 49.8427 23.9496L49.8437 23.9517L49.9263 24.1152C49.9621 24.1856 49.9579 24.2694 49.9158 24.3366C49.8737 24.4034 49.799 24.4443 49.719 24.4443H47.0745C46.994 24.4443 46.9193 24.4034 46.8772 24.3361C46.8351 24.2694 46.8314 24.1856 46.8672 24.1147L46.9509 23.9496C47.0835 23.6894 47.1608 23.4902 47.2008 23.3023C47.2398 23.1212 47.2477 22.9417 47.2477 22.6923V1.93635H43.6086C43.4807 1.93635 43.377 1.83442 43.377 1.70869V1.02157C43.377 0.895841 43.4807 0.793911 43.6086 0.793911Z"
        fill={fillColor}
      />
    </svg>
  )
}