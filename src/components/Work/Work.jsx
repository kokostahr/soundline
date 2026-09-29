//data and components
import portraits from '../../data/portraits';
import SectionLabel from '../SectionLabel/SectionLabel';
import PortraitCard from './PortraitCard';

//css
import styles from './Work.module.css';

function Work() {
    return (
        <section id='work' className={styles.work}>
            <SectionLabel number="01" label="THE WORK" heading="Place Portraits" />

            <div className={styles.grid}>
                {portraits.map((portrait) => (
                    <PortraitCard key={portrait.id} portrait={portrait} />
                ))}
            </div>
        </section>
    );
}

export default Work;
