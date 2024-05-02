import React from "react";

function Button({ text = "Click Me" }) {
    return (
        <div className="lg:text-[15px] sm:text-[10px] text-center text-white bg-custom-green py-6 px-36 rounded-xl cursor-pointer hover:bg-white hover:text-custom-green ">
            {text}
        </div>
    );
}

export default Button;
