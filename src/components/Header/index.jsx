import styles from './header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__brand}>
                <svg
                    xmlns="http://www.w3.org/2000/svg" width="28" height="25" viewBox="0 0 28 25" fill="none" aria-label="Tecboard Logo">
                    <title>Tecboard Símbolo</title>
                    <desc>Símbolo da marca Tecboard</desc>
                    <rect x="0.5" width="6.97349" height="7" rx="1" fill="white" />
                    <rect x="10.5645" width="6.97349" height="7" rx="1" fill="white" />
                    <rect width="6.97349" height="7" rx="1" transform="matrix(1 0 0 -1 8.57202 25)" fill="white" />
                    <rect width="6.97349" height="7" rx="1" transform="matrix(1 0 0 -1 18.6362 25)" fill="white" />
                    <line y1="-0.5" x2="18.7754" y2="-0.5" transform="matrix(0.424476 0.905439 -0.904195 0.427121 3.59082 4)" stroke="white" />
                    <line y1="-0.5" x2="18.7754" y2="-0.5" transform="matrix(0.424476 0.905439 -0.904195 0.427121 13.6553 4)" stroke="white" />
                    <rect x="4.31885" y="9" width="6.97349" height="7" rx="1" fill="white" />
                    <rect x="14.3833" y="9" width="6.97349" height="7" rx="1" fill="white" />
                    <rect x="20.5266" width="6.97349" height="7" rx="1" fill="white" />
                </svg>
                <img src="/images/tecboard-logotipo.png" alt="Marca Tecboard" />
            </div>
        </header>
    )
}