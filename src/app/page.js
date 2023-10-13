import Spiner from "@/componentes/Spinner";
import Image from "next/image";
import Avatar from "public/images/Avatar.jpg";
import Enotario from "public/images/Enotario.png";
import HenryChym from "public/images/HenryChym.png";
import Aboard from "public/images/Welcome aboard-amico.svg";
import Cv from "../../public/images/file-document-svgrepo-com.svg";
import Github from "../../public/images/github-142-svgrepo-com.svg";
import Linkedin from "../../public/images/linkedin-logo-svgrepo-com.svg";
import style from "./Page.module.css";

function Page() {
  return (
    <>
      <section id="profile">
        <div className={style.hero_image}>
          <Image src={Aboard} alt="Profile picture" width={400} height={400} />
        </div>
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

        <div className={style.section_container}>
          <div className={style.hero_image}>
            <Image
              src={Avatar}
              alt="Profile picture"
              className={style.about_pic}
              width={400}
              height={400}
            />
          </div>
          <div className={style.about_details_container}>
            <div className={style.about_container}>
              <div className={style.details_container}>
                <span class="material-symbols">workspace_premium</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={style.redes}>
        <h2 className={style.title_emojis}>
          Redes <p>📲</p>
        </h2>
        <ul className={style.list}>
          <li className={style.listLi}></li>
          <li className={style.listLi}></li>
          <li className={style.listLi}>
            <a href="./cvpdf.pdf" download="Lucio Fuentes CV 2023.pdf">
              <Image src={Cv} width={48} height={48} />
            </a>
          </li>
        </ul>
      </div>
      <div className={style.tech}>
        <h2 className={style.title_emojis}>
          My tech stack<p>💼</p>
        </h2>
        <Spiner />
      </div>

      <section className={style.proyectos}>
        <h2 className={style.title_emojis}>
          Mis proyectos<p>👷‍♂️</p>
        </h2>
        <div className={style.card_group}>
          <a href="https://enotar.io">
            <div className={style.card}>
              <div className={style.card_info}>
                <h3>ENOTAR.IO</h3>
                <p>
                  Go to site
                  <span class="material-symbols">open_in_new</span>
                </p>
              </div>
              <Image src={Enotario} width={355} height={255} />
            </div>
          </a>
          <div className={style.card}>
            <div className={style.card_info}>
              <h3>Enotar.io</h3>
              <p>
                Go to repository
                <span class="material-symbols">open_in_new</span>
              </p>
            </div>
            <Image src={HenryChym} width={355} height={255} />
          </div>

          <div className={style.card}>
            <div className={style.card_info}>
              <h3>Enotar.io</h3>
              <p>
                Go to repository
                <span class="material-symbols">open_in_new</span>
              </p>
            </div>
            <Image src={Enotario} width={355} height={255} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
