//imports
import { motion } from 'framer-motion';

function SectionLabel({ number, label, heading }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-80px' }}
            style={{ marginBottom: '2.5rem' }}
        >
            <p className="overline">{number} — {label}</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 400 }}>
                {heading}
            </h2>
        </motion.div>
            
   );
}

export default SectionLabel;