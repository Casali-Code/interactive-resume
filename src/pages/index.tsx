import Head from "next/head";
import TypeIt from "typeit-react";

import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Guilherme Casali - FullStack Developer</title>
      </Head>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <div className={styles.headerTitle}>
            <h1>Olá! Me chamo </h1>
            <TypeIt
              options={{
                strings: ["Guilherme Casali. "],
              }}
            />
          </div>
          <div>
            <h2 className={styles.headerSubTitle}>
              O seu próximo Desenvolvedor FullStack! 😄
            </h2>
          </div>
          <div className={styles.headerDescription}>
            <p>
              Prazer em te conhecer! Sou um desenvolvedor fullstack com foco em{" "}
              <span>Node</span>, <span>React</span> e <span>React Native</span>.
              Tenho conhecimento em design gráfico, por isso me destaco por
              combinar meus conhecimentos de frontend com UI e UX. Sou
              apaixonado por encontrar maneiras instigantes e diferentes de
              proporcionar experiências aos usuários de minhas aplicações.
              Também adoro aplicar conceitos de gamificação para tornar minhas
              implementações mais atrativas tanto para o cliente quanto para o
              usuário.
            </p>
            <div className={styles.techs}>
              <a href="https://github.com/Casali-Code" target="_blank">
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/guilhermecasali/"
                target="_blank"
              >
                <FiLinkedin />
              </a>
              <a href="mailto:guilhermecasali.dev@gmail.com">
                <FiMail />
              </a>
              <a href="tel:+5554981592385">
                <FiPhone />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
