import React from "react";

function Button({ text = "Click Me", className, onClick }) {
    return (
        <div
            className={`lg:text-[15px] sm:text-[10px] text-center text-white bg-custom-green py-6 px-36 rounded-xl cursor-pointer hover:bg-white hover:text-custom-green ${className}`}
            onClick={onClick}
        >
            {text}
        </div>
    );
}

export default Button;
