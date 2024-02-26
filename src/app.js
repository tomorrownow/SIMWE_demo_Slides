import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Intro from './slides/intro';
import HighResDanaRd from './slides/high-res-dana-rd';
import SMCInclusion from './slides/smc_inclusion';
import Hydrograph from './slides/hydrograph';
import Saybrook from './slides/saybrook';
import Cesium3D from './slides/Cesium3D';
import DataFusion from './slides/DataFusion';

let slidesElement = document.getElementById('slides'); 
let slides = [
   Intro(),
   HighResDanaRd(),
   SMCInclusion(),
   Hydrograph(),
   DataFusion(),
   Saybrook(),
   Cesium3D()
]
slidesElement.insertAdjacentHTML('beforeend', slides.join(' '));

let deck = new Reveal({
   plugins: [ Markdown ]
})
deck.initialize({view: 'scroll'});