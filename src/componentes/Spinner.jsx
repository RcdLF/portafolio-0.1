import style from "./Spinner.module.css";
//ICONS

import Image from "next/image";
import Css from "public/icons/icons8-css.svg";
import Docker from "public/icons/icons8-estibador.svg";
import Express from "public/icons/icons8-express-js.svg";
import Git from "public/icons/icons8-github.svg";
import JavaScript from "public/icons/icons8-javascript.svg";
import Mongo from "public/icons/icons8-mongodb.svg";
import mySql from "public/icons/icons8-mysql.svg";
import Next from "public/icons/icons8-next.js.svg";
import NodeJS from "public/icons/icons8-node-js.svg";
import ReactIcon from "public/icons/icons8-reaccionar.svg";
import TailWind from "public/icons/icons8-tailwindcss.svg";
import Firebase from "/public/icons/icons8-firebase.svg";
import Html from "/public/icons/icons8-html.svg";

const MockUp = [
  Html,
  Css,
  JavaScript,
  Docker,
  Express,
  Git,
  Mongo,
  mySql,
  Next,
  NodeJS,
  ReactIcon,
  TailWind,
  Firebase,
];

function Spiner() {
  const deg = 360 / MockUp.length;
  return (
    <div className={style.circle}>
      <div className={style.giros}>
        {MockUp.map((icon, i) => (
          <span key={i}>
            <Image src={icon} alt="Not Found" className={style.span_images} />
          </span>
        ))}
      </div>
    </div>
  );
}

export default Spiner;
