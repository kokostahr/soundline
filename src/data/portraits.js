//Data for all the portraits he made (images and videos)

const { video } = require("framer-motion/client");

const portraits = [
    {
        id: 'valparaiso',
        place: 'Valparaiso, Chile',
        tagline: 'The hill that looks down',
        image: '../public/images/valparaiso.png',
        audio: '../public/audio/valparaiso.mp3',
    },
    {
        id: 'punxsutawney',
        place: 'Punxsutawney, USA',
        tagline: 'The town that hired a Groundhog',
        image: '../public/images/pensal.png',
        audio: '../public/audio/pensal.mp3',
    },
    {
        id: 'oaxaca',
        place: 'Oaxaca, Mexico',
        tagline: 'Oaxaca keeps a light on',
        image: '../public/images/muertos.png',
        audio: '../public/audio/oaxaca.mp3',
    },
    {
        id: 'teshi',
        place: 'Teshi, Ghana',
        tagline: 'The street carries them out loud',
        image: '../public/images/teshie.png',
        audio: '../public/audio/teshie.mp3',
    },
    {
        id: 'alburquerque',
        place: 'Alburquerque, New Mexico',
        tagline: 'Alburquerque reads the wind',
        image: '../public/images/albuquerque.png',
        video: '../public/video/albuquerque.mp4'
    },
    {
        id: 'georgetown',
        place: 'Penang, Malaysia',
        tagline: 'Part 1: Pre-dawn in Georgetown',
        image: '../public/images/prepenang.png',
        video: '../public/video/prepenang.mp4'
    },
    {
        id: 'georgetown',
        place: 'Penang, Malaysia',
        tagline: 'Part 2: Chap Goh Meh Night, Penang',
        image: '../public/images/nightpenang.png',
        video: '../public/video/nightpenang.mp4'
    },
    {
        id: 'salvador',
        place: 'Salvador, Brazil',
        tagline: 'Roda at golden hour: Learning Capoeira in Salvador',
        image: '../public/images/salvador.png',
        video: '../public/video/salvador.mp4'
    },
    {
        id: 'johannesburg',
        place: 'Johannesburg, South Africa',
        tagline: 'The Storm-Claw Wolf',
        image: '../public/images/jhbwolf.png',
        video: '../public/video/jhbwolf.mp4'
    },
    {
        id: 'lagomera',
        place: 'La Gomera, Spain',
        tagline: 'The island that whistles its words',
        image: '../public/images/lagomera.png',
        video: '../public/video/lagomera.mp4'
    },
    {
        id: 'okinawa',
        place: 'Okinawa, Japan',
        tagline: 'Okinawa, Pre-ticket',
        image: '../public/images/okinawa.png',
        video: '../public/video/okinawa.mp4'
    },
];

export default portraits;

/* {
        id: '',
        place: '',
        tagline: '',
        image: '../public/images/',
        audio: '../public/audio/',
        video: '../public/video/'
    },*/