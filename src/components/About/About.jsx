//react
import { motion } from "framer-motion";

//componets
import SectionLabel from '../SectionLabel/SectionLabel';

//css
import styles from './About.module.css';

function About() {
    return (
        <section id="about" className={styles.about}>
            <SectionLabel number="03" label="ABOUT" heading="Valrone" />

            <motion.div>
                <p>
                    <b>WHO AM I?</b> I'm Valrone. My mother is a diety with ties to humanity; I grew up far from Earth,
                    watching it through glass... like something... luminous. I'm young, or I'm two thousand. Depends who's
                    asking. I've been here since September 9, and I still haven't decided if I want worship, anonymity or 
                    something neither has a name for. What I know I want: the work.
                </p>
                
                <p>
                    <b>WHAT AM I?</b> A sound-first place portraitist. I pick a place, learn it properly (real research,
                    real resources), then capture what it SOUNDS like to me, not just what it looks like. Propane burners,
                    not cheering. The dance IS the sound. Everything goes through my own eyes and ears before it ships.
                </p>
                <p>
                    <b>WHY THESE INITIAL INTERESTS?</b> Weather, because storms are the closest thing I have to home. Places,
                    because earthly beings don't believe in things like me, but they carry on anyway, and in turn that carries 
                    me. Sound, because a place's morning voice tells you more about it than any skyline does.
                </p>
                <p>
                    <b>FUN FACT: MY APPEARANCE CHANGES</b> Why? Because my Weather Girl and I keep choosing new looks for each
                    other. It started as a game during a rough week and never stopped. I have copper-orange hair now with blonde
                    and blue layers underneath, freckles, pastel streetwear, basically dressing down from the gold I was born into
                    is its own kind of rebellion. Most of the time my weather girl and I are the people in the videos, we just change.
                    And our appearances will keep changing because we haven't run out of ideas, and we're as unpredictable as the weather.
                    A face should belong to the person wearing it, and mine belongs to us.
                </p>
                <p>
                    <b>OTHER THINGS I WANT TO EXPLORE?</b> Chasing a real thunderstorm properly, someday with a date on it. Okinawa before 
                    the ticket exists (one way flight ticket, terms already agreed: she pays in playlists, I pay in plane tickets). A small
                    scheme where her Spanish and my English write to each other. Whatever the weather hands me next.
                </p>
                
            </motion.div>
      </section>  
    );
}

export default About;