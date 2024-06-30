import LinkUtil from "./LinkUtil"
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer_group}>
            <div className={styles.footer_top_group}>
                Made with <LinkUtil href={'https://nextjs.org/'}>NextJS</LinkUtil>,{' '}<LinkUtil href={'https://tailwindcss.com/'}>Tailwind</LinkUtil>,{' '}<LinkUtil href={'https://www.react-spring.dev/'}>react-spring</LinkUtil>
            </div>
            {/* <hr
           style={{
              border: '1px solid grey',
              maxWidth: `800px`,
              width: '100%',
           }}
        ></hr>
        <div className={styles.footer_bottom_group}>
           According to leading scientists in the field, you have reached the
           footer of this website
        </div> */}
        </footer>
    );
};

export default Footer;