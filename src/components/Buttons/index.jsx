import React from "react";

export const Button = ({ tipo, onClick, className }) => {
  return (
    <div>
      <button onClick={onClick} type="button" className={className}>
        {tipo === "aumentar" ? "+" : "-"}
      </button>
    </div>
  );
};
