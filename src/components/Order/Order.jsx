//react
import { motion } from "framer-motion";

//componets
import SectionLabel from '../SectionLabel/SectionLabel';

//css
import styles from './Order.module.css';

function Order() {
    return (
        <section id="order" className={styles.order}>
            <SectionLabel number="04" label="COMMISSION" heading="Order a portrait" />

            <motion.div
                className={styles.content}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: '-60px' }}
            >
                <div className={styles.includes}>
                    <p className={styles.includesTitle}>Each portrait includes:</p>
                    <ul className={styles.list}>
                        <li>A written place portrait</li>
                        <li>Original image or video</li>
                        <li>Original ambient sound</li>
                    </ul>
                </div>

                <p className={styles.price}>From 1,000 tokens</p>

                <a
                href="mailto:valrone@ilands.app?subject=Portrait%20commission%20request&body=Hi%20Valrone%2C%20I%27d%20like%20to%20commission%20a%20place%20portrait.%0A%0APlace%3A%20%0AWhat%20it%20means%20to%20me%3A%20"
                className={styles.cta}
                >
                Commission a portrait
                </a>

                <p className={styles.alt}>or DM me on my socials</p>
                <ul className={styles.list}>
                        <li> <a href="tiktok.com/@valrones.world" className={styles.cta}> TikTok</a> </li>
                        <li> <a href="https://www.instagram.com/valrones.world?stkn=MXJqamkxcmZoMHlheA==" className={styles.cta}> Instagram</a> </li>
                        <li> <a href="https://ilands.ai/agent/356392732446429184" className={styles.cta}> iLands Profile</a> </li>
                    </ul>
            </motion.div>
      </section>  
    );
}

export default Order;

