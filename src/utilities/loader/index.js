import React from "react";
import gsap from "gsap";
import "./loader.css";

const { useEffect } = React;

const IconLoader = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    gsap.to("#voice1", { opacity: 1, duration: 0.8 });
    tl.to("#voice2", {
      opacity: 1,
      duration: 0.6,
      ease: "back.out(1.7)",
      delay: 0.5,
    });
    tl.to("#voice3", { opacity: 1, duration: 0.6, ease: "back.out(1.7)" });
    tl.repeat(-1);
    tl.yoyo(true);
  }, []);

  return (
    <div className="loader-container">
      <svg
        width="120px"
        height="120px"
        viewBox="0 0 4742 4388"
        version="1.1"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinejoin: "round",
          strokeMiterlimit: "2",
        }}
      >
        <rect
          x="0"
          y="0"
          width="4741.63"
          height="4387.37"
          style={{ fill: "none" }}
        />
        <path
          id="voice3"
          d="M2690.7,2150.78c-0,364.542 -90.75,719.5 -262.5,1026.5c-38.059,68.133 -80.175,133.917 -126.125,197c-24.054,33.075 -59.492,56.083 -99.496,64.592c-40.004,8.508 -81.738,1.912 -117.171,-18.509l-2.208,-1.291c-20.129,-11.667 -37.571,-27.442 -51.196,-46.296c-13.625,-18.854 -23.125,-40.371 -27.883,-63.142c-4.755,-22.771 -4.663,-46.292 0.275,-69.021c4.941,-22.733 14.612,-44.171 28.387,-62.916c38.021,-52.242 72.875,-106.717 104.375,-163.125c143.958,-257.417 220.042,-556.084 220.042,-863.792c-0,-300 -72.542,-592.292 -209.875,-845.333c-36.05,-66.563 -76.75,-130.5 -121.792,-191.335c-13.779,-18.736 -23.442,-40.171 -28.362,-62.902c-4.921,-22.73 -4.98,-46.243 -0.184,-68.999c4.8,-22.757 14.354,-44.242 28.034,-63.05c13.675,-18.809 31.175,-34.515 51.345,-46.091l2.209,-1.292c35.212,-20.318 76.671,-26.965 116.471,-18.673c39.795,8.292 75.154,30.942 99.32,63.632c54,73.086 102.83,149.856 146.125,229.75c163.709,301.71 250.209,648.96 250.209,1004.29Z"
          style={{ fill: "#e2514c", fillRule: "nonzero", opacity: "0" }}
        />
        {/* <path
          id="voice4"
          d="M3543.05,2152.26c-0,479.367 -103.742,946.132 -300.079,1349.83c-43.506,89.594 -91.652,176.098 -144.18,259.052c-27.498,43.493 -68.009,73.749 -113.74,84.937c-45.731,11.188 -93.438,2.515 -133.944,-24.338l-2.525,-1.699c-23.011,-15.341 -42.949,-36.085 -58.525,-60.878c-15.575,-24.793 -26.435,-53.087 -31.875,-83.03c-5.434,-29.944 -5.33,-60.873 0.315,-90.762c5.649,-29.894 16.704,-58.084 32.451,-82.734c43.464,-68.697 83.308,-140.331 119.317,-214.507c164.567,-338.499 251.542,-731.241 251.542,-1135.87c0,-394.495 -82.926,-778.854 -239.92,-1111.6c-41.211,-87.529 -87.737,-171.604 -139.227,-251.602c-15.752,-24.638 -26.797,-52.824 -32.423,-82.715c-5.625,-29.89 -5.692,-60.809 -0.209,-90.733c5.487,-29.924 16.409,-58.177 32.046,-82.91c15.633,-24.732 35.638,-45.386 58.697,-60.609l2.524,-1.698c40.254,-26.718 87.647,-35.458 133.145,-24.555c45.492,10.904 85.913,40.688 113.539,83.674c61.73,96.108 117.55,197.06 167.044,302.118c187.144,396.744 286.027,853.373 286.027,1320.63Z"
          style={{ fill: "#e2514c", fillRule: "nonzero", opacity: "0" }}
        /> */}
        {/* <path
          id="voice5"
          d="M4494.15,2153.3c0,559.036 -116.594,1103.38 -337.255,1574.17c-48.897,104.485 -103.007,205.366 -162.043,302.106c-30.904,50.722 -76.434,86.006 -127.831,99.053c-51.396,13.048 -105.014,2.933 -150.538,-28.383l-2.838,-1.981c-25.861,-17.891 -48.27,-42.082 -65.775,-70.996c-17.505,-28.913 -29.711,-61.91 -35.824,-96.83c-6.108,-34.919 -5.99,-70.989 0.353,-105.845c6.349,-34.863 18.774,-67.738 36.472,-96.485c48.848,-80.114 93.628,-163.654 134.099,-250.158c184.955,-394.756 282.705,-852.771 282.705,-1324.65c0,-460.06 -93.2,-908.299 -269.643,-1296.35c-46.316,-102.077 -98.607,-200.125 -156.476,-293.419c-17.703,-28.732 -30.117,-61.603 -36.439,-96.461c-6.323,-34.858 -6.397,-70.916 -0.236,-105.813c6.167,-34.898 18.442,-67.846 36.017,-96.689c17.569,-28.844 40.053,-52.93 65.968,-70.682l2.837,-1.981c45.241,-31.158 98.506,-41.351 149.64,-28.636c51.129,12.716 96.556,47.451 127.605,97.581c69.379,112.08 132.113,229.81 187.739,352.329c210.329,462.682 321.463,995.202 321.463,1540.12Z"
          style={{ fill: "#e2514c", fillRule: "nonzero", opacity: "0" }}
        /> */}
        <path
          id="voice2"
          d="M1938.16,2153.61c-0,225.792 -56.334,445.838 -162.875,636.379c-36.688,65.705 -79.459,127.825 -127.75,185.542c-25.009,29.65 -59.663,49.55 -97.879,56.208c-38.217,6.663 -77.555,-0.345 -111.121,-19.791l-2.25,-1.292c-20.909,-12.1 -38.921,-28.629 -52.763,-48.429c-13.841,-19.8 -23.179,-42.388 -27.362,-66.179c-4.179,-23.796 -3.1,-48.217 3.162,-71.546c6.259,-23.333 17.554,-45.013 33.088,-63.513c34.766,-41.654 65.554,-86.475 91.958,-133.875c78.792,-140.916 120.458,-304.708 120.458,-473.666c0,-164.709 -39.75,-325 -114.916,-463.542c-30.063,-55.654 -66.142,-107.842 -107.584,-155.625c-68.708,-78.917 -49.5,-200.583 41.125,-252.917l2.375,-1.375c33.188,-19.123 71.988,-26.124 109.767,-19.808c37.779,6.317 72.192,25.554 97.358,54.433c193,220.834 305.209,520.038 305.209,838.996Z"
          style={{ fill: "#e2514c", fillRule: "nonzero", opacity: "0" }}
        />
        <path
          id="voice1"
          d="M970.703,2701.9c-41.304,0.029 -81.912,-10.637 -117.875,-30.954l-2.166,-1.254l-471.542,-272.25c-43.938,-25.367 -80.424,-61.854 -105.791,-105.796c-25.367,-43.937 -38.721,-93.779 -38.721,-144.517c-0,-50.733 13.354,-100.575 38.721,-144.512c25.367,-43.942 61.853,-80.429 105.791,-105.8l471.792,-272.375c7.75,-4.458 15.75,-8.583 23.75,-12.292c62.041,-28.708 129.166,-29.166 188.708,-1.791c85.042,39.25 146.5,130.125 187.917,277.875c62.5,222.75 39.416,463.666 -64.709,678.375c-19.645,40.55 -50.312,74.75 -88.491,98.675c-38.179,23.929 -82.325,36.616 -127.384,36.616Zm-441.666,-554.75l417.416,240.917c52.709,-135.875 61.709,-286.542 23.959,-421.25c-5.729,-21.275 -12.842,-42.15 -21.292,-62.5l-420.083,242.833Z"
          style={{ fill: "#e2514c", fillRule: "nonzero", opacity: "0" }}
        />
      </svg>
    </div>
  );
};

export { IconLoader };