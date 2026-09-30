//react imports
import { useState, useRef, useEffect } from "react";
import { motion } from 'framer-motion';
import { Howl } from 'howler';

//css
import styles from './PortraitCard.module.css';

function PortraitCard({ portrait }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const howlRef = useRef(null);
    const howlIdRef = useRef(null);

    const hasAudio = !!portrait.audio;
    const hasVideo = !!portrait.video;

    //the audio playback with howler
    const toggleAudio = () => {
        //create howl instance on first click
        if (!howlRef.current) {
            howlRef.current = new Howl({
                src: [portrait.audio],
                loop: true,
                volume: 0,
                format: ['mp3'],
            });
        }

        if (isPlaying) {
            //fade out over 500ms then sthap
            howlRef.current.fade(0.7, 0, 500, howlIdRef.current);
            setTimeout(() => {
                if (howlRef.current) {
                    howlRef.current.stop();
                }
                setIsPlaying(false);
            }, 500)
        } else {
            //play then fade in over 800ms
            howlIdRef.current = howlRef.current.play();
            howlRef.current.fade(0, 0.7, 800, howlIdRef.current);
            setIsPlaying(true);
        }
    };


    //cleanup: unload howl when component unmounts
    useEffect(() => {
        return () => {
            if (howlRef.current) {
                howlRef.current.unload();
                howlRef.current = null;
            }
        };
    }, []);
    
    return (
         <>
        {/* The Card */}
        <motion.article
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
        >
            {/* Image */}
            <div className={styles.imageWrapper}>
            <img
                src={portrait.image}
                alt={portrait.place}
                className={styles.image}
            />

            {/* Video play overlay (only on video cards) */}
            {hasVideo && (
                <button
                className={styles.videoOverlay}
                onClick={() => setShowVideo(true)}
                aria-label={`Play video: ${portrait.tagline}`}
                >
                <span className={styles.playIcon}>▶</span>
                </button>
            )}
            </div>

            {/* Card info */}
            <div className={styles.info}>
            <h3 className={styles.place}>{portrait.place}</h3>
            <p className={styles.tagline}>{portrait.tagline}</p>

            {/* Audio player (only on audio cards) */}
            {hasAudio && (
                <button
                className={`${styles.audioButton} ${isPlaying ? styles.audioButtonActive : ''}`}
                onClick={toggleAudio}
                aria-label={isPlaying ? 'Pause ambient sound' : 'Play ambient sound'}
                >
                {/* Waveform bars */}
                <div className={styles.waveform}>
                    <span className={styles.bar} />
                    <span className={styles.bar} />
                    <span className={styles.bar} />
                    <span className={styles.bar} />
                    <span className={styles.bar} />
                </div>
                <span className={styles.audioLabel}>
                    {isPlaying ? 'Listening…' : 'Listen'}
                </span>
                </button>
            )}
            </div>
        </motion.article>

        {/* Video Modal */}
        {showVideo && hasVideo && (
            <div
            className={styles.modal}
            onClick={() => setShowVideo(false)}
            role="dialog"
            aria-modal="true"
            >
            <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                className={styles.closeButton}
                onClick={() => setShowVideo(false)}
                aria-label="Close video"
                >
                ✕
                </button>
                <video
                src={portrait.video}
                controls
                autoPlay
                className={styles.video}
                >
                Your browser does not support video playback.
                </video>
            </div>
            </div>
        )}
        </>
    );
}

export default PortraitCard;