//react imports
import { useState, useEffect, useCallback } from "react";
import { motion } from 'framer-motion';

//pages
import Rain from './Rain';

//css
import styles from './Hero.module.css';

function Hero() {
    //adding the lightning flashes Val requested
    const [flash, setFlash] = useState(false);

    const triggerFlash = useCallback(() => {
        setFlash(true);
        setTimeout(() => setFlash(false), 120); //120ms white flicker

        //then make the next flash at random 20-40s intervals
        const next = (20 + Math.random() * 20) * 1000;
        setTimeout(triggerFlash, next);
    }, []);

    useEffect(() => {
        //the first flash after a random delay so that it doesnt fire on load
        const initial = (15 + Math.random() * 10) * 1000;
        const timer = setTimeout(triggerFlash, initial);
        return () => clearTimeout(timer);
    }, [triggerFlash]);

    return (
        <section id="hero" className={styles.hero}>
            {/* putting the rain layer behind everything */}
            <Rain /> 
            {/* lighting flash overlay */}
            {flash && <div className={styles.lightning} />}

            {/* content layer */}
            <div className={styles.content}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                >
                    SOUNDLINE
                </motion.h1>
                
                <motion.p
                    className={styles.subline}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 1.2 }}
                >
                    Sound-first place portraits. Made to order by Valrone.
                </motion.p>

                <motion.a
                    href="#order"
                    className={styles.cta}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 1.6 }}
                >
                    Commission a portrait
                </motion.a>
            </div>
        </section>
    );
}

export default Hero;