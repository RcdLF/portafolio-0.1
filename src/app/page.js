import Spiner from "@/componentes/Spinner";
import Image from "next/image";
import Avatar from "public/images/Questions-bro.svg";
import Aboard from "public/images/Welcome aboard-amico.svg";
import Github from "../../public/images/github-142-svgrepo-com.svg";
import Linkedin from "../../public/images/linkedin-logo-svgrepo-com.svg";
import style from "./Page.module.css";

function Page() {
  return (
    <>
      <section id="profile">
        <Image
          src={Aboard}
          alt="Profile picture"
          className={style.hero_image}
        />
        <div className={style.hero_text}>
          <p className={style.hero_p_1}>Hello, I'm</p>
          <h1 className={style.hero_title}>Lucio Fuentes</h1>
          <p className={style.hero_p_2}>FullStack developer</p>
          <div className={style.hero_btn_group}>
            <a href="./cvpdf.pdf" download="Lucio Fuentes CV 2023.pdf">
              <button className={`${style.btn} ${style.hero_btn2}`}>
                Dowload Cv
              </button>
            </a>
            <a href="#contact">
              <button className={`${style.btn} ${style.hero_btn}`}>
                Contact Info
              </button>
            </a>
          </div>
          <div id="#social-container" className={style.hero_social_container}>
            <a
              href="https://www.linkedin.com/in/lucio-fuentes-54749b24b/"
              target="_blank"
            >
              <Image src={Linkedin} width={48} height={48} />
            </a>
            <a href="https://github.com/RcdLF" target="_blank">
              <Image src={Github} width={48} height={48} />
            </a>
          </div>
        </div>
      </section>

      <section id="about">
        <p className={style.hero_p_1}>Get To Know More</p>
        <h1 className={style.hero_title}>About me</h1>
        <div className={style.section_flex}>
          <div className={style.section_container}>
            <p>
              Hi! I'm Lucio Fuentes, a passionate Full Stack developer with
              experience in challenging projects. My focus is to create
              innovative and robust solutions, and I'm always willing to learn
              and keep up to date with the latest technologies. Outside of
              development, I enjoy exploring new technologies, sharing knowledge
              and connecting with the developer community. If you have an
              exciting project or just want to connect, I'd be happy to talk to
              you!
            </p>
          </div>
          <Image
            src={Avatar}
            alt="Profile picture"
            className={style.hero_image}
          />
        </div>
      </section>

      <section id="experience">
        <div className={style.tech}>
          <h2 className={style.hero_title}>My tech stack 💼</h2>
          <Spiner />
        </div>
      </section>

      
    </>
  );
}

export default Page;
