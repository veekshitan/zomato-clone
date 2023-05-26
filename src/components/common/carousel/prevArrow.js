import React from "react"

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style, display: "flex", background: "white", bordeRadius: '50%', justifyContent:"center", alignItems:"center", padding: "4px" }}
        onClick={onClick}
      >

        </div>
    );
};

export default PrevArrow;