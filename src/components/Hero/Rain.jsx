//react
import { useMemo } from "react";

//css
import styles from './Rain.module.css';
import { delay } from "framer-motion";

function Rain() {
    //generate 50 raindrops with random positions and timing
    const drops = useMemo(
        () =>
            Array.from({ length: 50 }, (_, i) => ({
                id: i,
                left: Math.random() * 100,  //from 0-100% across the screen
                delay: Math.random() * 2,    //0-2s stagger
                duration: 1.5 + Math.random(),  //1.5-2.5s fall duration
                height: 60 + Math.random() * 80,    //rain is 60-140px long
                opacity: 0.06 + Math.random() * 0.1,    //super subtle
            })),
        []
    );


    return (
        <div className={styles.rainContainer} aria-hidden="true">
            {drops.map((drop) => (
                <div
                key={drop.id}
                className={styles.drop}
                style={{
                    left: `${drop.left}%`,
                    height: `${drop.height}px`,
                    opacity: drop.opacity,
                    animationDelay: `${drop.delay}s`,
                    animationDuration: `${drop.duration}s`,
                }}
                />
            ))}
        </div>
    );
}

export default Rain;