import React from "react";
import styles from "./TextInput.module.css";

const TextInput = ({ label, id, placeholder }) => {
   return (
      <div className={styles.container}>
         <label htmlFor={id}>{label}</label>
         <input type="text" id={id} name={id} placeholder={placeholder} />
      </div>
   );
};

export default TextInput;
