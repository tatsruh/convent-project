import { useState } from "react";

const SvgComponent = () => {
    const [color, setColor] = useState("#fff"); // Initial color

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            onClick={() => setColor(color === "#fff" ? "#ff5733" : "#fff")} // Toggle color
            style={{ cursor: "pointer" }}
        >
            <path d="M0 0h512v512H0z" fill="#000" fillOpacity="1"></path>
            <g className="" transform="translate(0,0)">
                <path
                    d="M256 41c-28.25 0-58.36 18.25-81.166 44.857-3.138 3.66-6.123 7.477-8.947 11.403L208 69.184l23.127 15.418c..."
                    fill={color} // Dynamic color
                    fillOpacity="1"
                ></path>
            </g>
        </svg>
    );
};

export default SvgComponent;
