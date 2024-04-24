import React from "react";

function Button({ text = "Click Me" }) {
    return (
        <div className="text-[12px] md:text-[10px] text-white bg-custom-green py-6 px-36 rounded-xl cursor-pointer hover:bg-white hover:text-custom-green ">
            {text}
        </div>
    );
}

export default Button;
