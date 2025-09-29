import styles from "./footer.module.css";

export function Footer() {
    return (
        <footer className={styles.footerCopyright}>
            <div>
                <img src="/images/tecboard-logotipo.png" alt="Logotipo Tecboard" />
                <p>Desenvolvido por Alura. Projeto fictício sem fins comerciais</p>
            </div>
            <a
                href="https://www.danilobatista.com.br"
                target="_blank"
                className={styles.footerCopyright__link}
                rel="noopener"
            ><span>portifólio de design |</span> danilo<span>batista®</span> 2025
            </a>
        </footer>
    );
}
