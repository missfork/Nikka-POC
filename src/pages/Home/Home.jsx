import React from "react";
import style from "./Home.module.scss";

function Home() {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <h2 className={style.logo}>NIKAA</h2>
        <h1 className={style.slogan}>The Only AI Stack You Will Ever Need</h1>
        <p className={style.summary}>
          Your enterprise AI platform that delivers on business outcomes –
          obsessively{" "}
        </p>{" "}
        <p className={style.summary}>
          Ditch the treadmill. Ramp up to peak productivity
        </p>
        <div className={style.loadMore}>
          learn more{" "}
          
        </div>
      </div>
    </div>
  );
}

export default Home;
