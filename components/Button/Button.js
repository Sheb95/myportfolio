import React from "react";
import btnStyles from "./styles.module.css";

const Button = ({ text }) => {
   return (
      <div>
         <button className={btnStyles.but}>{text}</button>
      </div>
   );
};

export default Button;
