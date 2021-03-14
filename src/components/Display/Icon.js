import React from "react";

const icon = {
    borderRadius: "40px",
    height: "50px",
    width: "50px",
}

function Icon() {
    return (
        <div>
            <img 
            src="http://webcoban.vn/image/cat-2.jpg" 
            style={icon} 
            alt=""
            />
        </div>
    )
}

export default Icon;