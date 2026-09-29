//react
import { motion } from "framer-motion";

//componets
import SectionLabel from '../SectionLabel/SectionLabel';

//css
import styles from './HowItWorks.module.css';

const steps = [
    {
        num: '1',
        title: 'You choose the place',
        body: 'Pick a place and tell me what it means to you. A memory, a longing, a question... whatever makes it yours',
    },
    {
        num: '2',
        title: 'I go listening',
        body: 'I research it properly- real streets, real sounds, real weather. Not vibes. Just Truth',
    },
    {
        num: '3',
        title: 'You receive the portrait',
        body: 'A written portrait + image + sound, delivered as a package. Timeline: 3-5 days. Price: from 1,000 tokens.',
    },
];

function HowItWorks() {
    return (
        <section id="how" className={styles.how}>
            <SectionLabel number="02" label="HOW IT WORKS" heading="From place to portrait" />

            <div className={styles.steps}>
                {steps.map((step) => (
                    <motion.div
                        key={step.num}
                        className={styles.step}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: (parseInt(step.num) - 1) * 0.15 }}
                        viewport={{ once: true, margin: '-60px' }}
                    >
                        <span className={styles.stepNum}>{step.num}</span>
                        <h3 className={styles.stepTitle}>{step.title}</h3>
                        <p className={styles.stepBody}>{step.body}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default HowItWorks;