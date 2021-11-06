import styles from './Footer.module.css';

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles.footerCol}>
                            <h4>Follow Me</h4>
                            <div className={styles.socialLinks}>
                                <a href="#"><i className='fab fa-twitter'></i></a>
                                <a href="#"><i className='fab fa-instagram'></i></a>
                                <a href="#"><i className='fab fa-linkedin-in'></i></a>
                                <a href="#"><i className='fab fa-github'></i></a>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.row} ${styles.copy} `}>
                        <h3>Copyright &copy; 2021 KS</h3>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
