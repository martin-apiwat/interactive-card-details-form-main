import React from "react";
import styles from "./App.module.css";
import cardFrontImg from "./assets/bg-card-front.png";
import cardBackImg from "./assets/bg-card-back.png";
import TextInput from "./components/TextInput/TextInput";
import Button from "./components/Button/Button";

const App = () => {
   return (
      <div className={styles.container}>
         <div className={styles.colorSection}>
            <div className={styles.cards}>
               <img src={cardFrontImg} alt="" />
               <img className={styles.cardBackImg} src={cardBackImg} alt="" />
            </div>
         </div>
         <div className={styles.whiteSection}>
            <div className={styles.cardDetails}>
               <div className={styles.cardHolderName}>
                  <TextInput
                     id="name"
                     label="Cardholder Name"
                     placeholder="e.g. John Appleseed"
                  />
               </div>
               <div className={styles.CardNumber}>
                  <TextInput
                     id="name"
                     label="Card Number"
                     placeholder="e.g. 1234 5678 9123 0000"
                  />
               </div>
               <div className={styles.expDateCVC}>
                  <TextInput id="name" label="EXP.Date (MM)" placeholder="MM" />
                  <TextInput id="name" label="EXP.Date (YY)" placeholder="YY" />
                  <TextInput id="CVC" label="CVC" placeholder="e.g. 123" />
               </div>
               <Button />
            </div>
         </div>
      </div>
   );
};

export default App;
