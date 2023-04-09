<script lang="ts">
  // Images
  import MonsteraLeaf1 from '$lib/images/monstera-leaf-1.png';
  import MonsteraLeaf2 from '$lib/images/monstera-leaf-2.png';
  import MonsteraLeaf3 from '$lib/images/monstera-leaf-3.png';

  // Waves
  import NavBg from '$lib/images/nav-bg.svg';
  import Wave1 from '$lib/images/waves/wave1.svg';
  import Wave2 from '$lib/images/waves/wave2.svg';
  import Wave3 from '$lib/images/waves/wave3.svg';
  import Wave4 from '$lib/images/waves/wave4.svg';
  import Wave5 from '$lib/images/waves/wave5.svg';

  // Icons
  import TwitterIcon from '$lib/icons/twitter.svg';
  import LinkedinIcon from '$lib/icons/linkedin.svg';
  import GithubIcon from '$lib/icons/github.svg';
  import ExternalLinkIcon from '$lib/icons/external-link.svg';

  // PassportStamps
  import Columbus from '$lib/components/PassportStamps/Columbus.svelte';
  import Canada from '$lib/components/PassportStamps/Canada.svelte';
  import Irvine from '$lib/components/PassportStamps/Irvine.svelte';
  import Nyc from '$lib/components/PassportStamps/Nyc.svelte';
  import Mexico from '$lib/components/PassportStamps/Mexico.svelte';
  import Caribbean from '$lib/components/PassportStamps/Caribbean.svelte';
  import Europe from '$lib/components/PassportStamps/Europe.svelte';

  // Other vectors
  import BootOnBall from '$lib/components/BootOnBall.svelte';
  import Ramen from '$lib/components/Ramen.svelte';
  import Tea from '$lib/components/Tea.svelte';
  import LaptopGuy from '$lib/components/LaptopGuy.svelte';
  import LaptopGuyBlob from '$lib/components/LaptopGuyBlob.svelte';
  import Bicycle from '$lib/components/Bicycle.svelte';
  import CopyToClipboard from '$lib/components/CopyToClipboard.svelte';
  import VerticalDivider from '$lib/components/VerticalDivider.svelte';

  import Flamingo from '$lib/images/flamingo.svg';
  import Blob1 from '$lib/images/blob1.svg';

  // Svelte imports
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  const block = '&#9640';
  const blocks = (count: number) => {
    let str = '';
    for (var i = 0; i < count; i++) {
      str = i === 0 ? block : str + `${block}`;
    }
    return str;
  };
  let mounted = false;
  let scrollPosition = 0;
  $: console.log('🚀 ~ scrollPosition', scrollPosition);

  onMount(() => {
    mounted = true;
  });
</script>

<style lang="scss">
  .blocks {
    white-space: nowrap;
    letter-spacing: 6px;
  }
  .centered-content {
    width: 1000px;
    margin: 0 auto;
  }
  .section-container {
    position: relative; /* to enable anchor offset */
    width: 100%;
  }
  .section-number {
    position: absolute;
    top: -215px;
    font-size: 10rem;
    color: #ffffffdd !important;
  }
  .section-title {
    font-family: 'TheSeasons';
    font-size: 6rem;
    white-space: nowrap;
  }
  .section-subtitle {
    font-family: 'Kristi';
    font-size: 3rem;
    margin-bottom: 30px;
    white-space: nowrap;
    font-style: italic;
    opacity: 0.6;
  }
  .section-heading {
    font-family: 'TheSeasons';
    font-size: 2.5rem;
    margin-bottom: 15px;
    white-space: nowrap;
  }
  .section-subheading {
    font-family: 'TheSeasons';
    font-size: 1.8rem;
    margin-bottom: 15px;
    white-space: nowrap;
  }

  #hero {
    height: 1200px;
    width: 100%;
    position: relative;
  }
  #hero-bg {
    position: absolute;
    height: 100%;
    width: 100%;
    /* background-image: radial-gradient(#15944615, #00000029), url(https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format); */
    background-image: radial-gradient(#01120ef0, #000000), url(https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format);
    /* background-image: radial-gradient(#10101af0, #000000), url(https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format); */
    background-size: cover;
    z-index: -1;
  }
  #hero-grain {
    position: absolute;
    height: 1200px;
    width: 100%;
    background-image: url('$lib/images/grain.png');
    z-index: -1;
  }
  #nav-bg {
    position: absolute;
    top: -40px;
  }
  #nav-wave {
    position: absolute;
    bottom: 0;
    z-index: 0;
  }

  nav {
    height: 120px;
    width: 100%;
    margin-bottom: 140px;
    position: fixed;
    z-index: 2;
  }

  nav #nav-wrapper {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 0;
  }

  nav #links {
    display: flex;
    align-items: center;
    list-style-type: none;
  }

  nav #links li {
    margin-left: 50px;
  }
  nav #links a {
    text-decoration: none;
  }
  nav #links a > span {
    color: #fff;
  }
  nav #links a span:not(:first-child) {
    color: var(--accent1-bright);
  }
  nav #links a:hover span:not(:first-child) {
    color: #fff;
  }

  #logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #logo img {
    filter: invert(1);
  }
  #logo a {
    font-family: 'TheSeasons';
    font-size: 2rem;
    color: #fff;
    text-decoration: none;
  }
  #logo a:hover {
    color: var(--accent1-bright);
  }

  #intro-container {
    position: relative;
    padding-top: 220px;
    /* background: linear-gradient(90deg, #ffffff01, #ffffff0a, #ffffff01); */
  }

  #intro-title {
    display: flex;
    flex-direction: column;
  }
  #intro-title #name {
    font-family: 'TheSeasons', 'arial';
    font-size: 12rem;
    text-align: center;
  }
  #intro-title span {
    font-family: 'Kristi';
    font-size: 3rem;
    color: var(--accent1-dim);
    display: inline-block;
    transform: rotate(357deg);
  }
  #intro-title span:first-child {
    margin-bottom: 10px;
  }
  #intro-title span:last-child {
    text-align: right;
    /* margin-right: 100px; */
  }
  #intro-body {
    display: flex;
    align-items: center;
    position: relative;
  }
  #intro-body #pfp {
    position: relative;
    width: 35%;
    height: 300px;
    margin: 0 40px 0 20px;
    /* background-image: url('$lib/images/datemike.png'); */
    /* background-image: url('https://assets-global.website-files.com/6138c9622e9b54fc73014187/615afa18bda6a353e0fb4724_5c058ac4a0316f6562f614ba_culture-cliches.png'); */
    background-image: url('$lib/images/pfp.png');
    background-position: center;
    background-size: cover;
    -webkit-mask-image: url('$lib/images/blob1.svg');
    mask-image: url('$lib/images/blob.svg');
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    filter: grayscale(1) brightness(0.9) contrast(1.3);
  }
  #intro-body #details {
    position: relative;
    width: 60%;
    line-height: 2;
    font-size: 1rem;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  #intro-body #details p {
    //
  }
  #intro-social svg {
    vertical-align: middle;
    margin: 10px 5px 0 0;
    filter: drop-shadow(rgba(255, 215, 77, 0.6) -1px -1px 2px) drop-shadow(rgba(124, 127, 255, 0.6) 1px 1px 2px);
  }
  #intro-npx {
    display: flex;
    align-items: center;
    width: max-content;
  }

  #chevrons-down {
    position: absolute;
    left: 50%;
    bottom: 175px;
    transform: scale(1.5) translateX(-50%);
    color: var(--accent1-bright);
    opacity: 0.5;
    animation: bounce 1s infinite;
  }

  @keyframes bounce {
    0% {
      bottom: 175px;
      opacity: 0.6;
    }
    75% {
      bottom: 180px;
      opacity: 0.1;
    }
    100% {
      bottom: 175px;
      opacity: 0.6;
    }
  }

  #backstory-container {
    background-color: var(--accent1-bright);
  }
  #backstory {
    position: absolute;
    top: -50px;
  }
  #backstory-top-wave {
    position: relative;
  }
  #backstory-container a {
    color: var(--accent1-darkest);
  }
  #backstory-container a:hover {
    color: var(--accent1-dark);
  }
  #backstory-content {
    position: relative;
    margin-top: 100px;
    color: var(--accent1-dark);
  }
  #backstory-text p {
    color: var(--accent1-darkest);
    font-size: 1rem;
    margin-bottom: 10px;
    line-height: 1.5;
  }
  #backstory-text p:last-child {
    margin-bottom: 0px;
  }
  #backstory-bottom-wave {
    position: absolute;
    z-index: -1;
    background-color: #04150d;
  }

  #experience-container {
    background-color: var(--primary);
    margin-bottom: 100px;
    #typewriter {
      position: relative;
      width: 100%;
      height: 350px;
      /* background-image: url('$lib/images/datemike.png'); */
      /* background-image: url('https://assets-global.website-files.com/6138c9622e9b54fc73014187/615afa18bda6a353e0fb4724_5c058ac4a0316f6562f614ba_culture-cliches.png'); */
      background-image: url('$lib/images/typewriter-plants.jpg');
      background-position: center right;
      background-size: cover;
      -webkit-mask-image: url('$lib/images/blob1.svg');
      mask-image: url('$lib/images/blob.svg');
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      // filter: grayscale(1) brightness(0.9);
      filter: hue-rotate(22deg) grayscale(0.8);
    }
  }
  #experience {
    position: absolute;
    top: 0;
  }
  #experience-content {
    position: relative;
    margin-top: 270px;
    margin-bottom: 150px;
  }
  #experience-content {
    color: var(--accent1-dim);
  }
  #experience-bottom-wave {
    position: absolute;
    z-index: 1;
  }
  .accent-box {
    padding: 10px;
    border: 2px solid var(--accent1-dim);
    background-color: #00000033;
  }
  .primary-box {
    padding: 10px;
    border: 2px solid var(--primary);
    background-color: #00000033;
  }
  .experience-role {
    margin-bottom: 5px;
  }

  #showcase-container {
    #showcase {
      position: absolute;
      top: 0;
    }
    #showcase-bg {
      position: absolute;
      height: 100%;
      width: 100%;
      /* background-image: radial-gradient(#15944615, #00000029), url(https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format); */
      /* background-image: radial-gradient(#01120ef0, #000000), url(https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format); */
      /* background-image: radial-gradient(#10101af0, #000000), url(https://images.unsplash.com/photo-1514125669375-59ee3985d08b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4000&q=80); */
      background-image: radial-gradient(#01120ef0, #000000), url(https://images.unsplash.com/photo-1514125669375-59ee3985d08b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4000&q=80);
      background-size: cover;
      z-index: -1;
      /* box-shadow: inset 0px -30px 50px 20px #101418; */
    }
    #showcase-grain {
      position: absolute;
      height: 1200px;
      width: 100%;
      background-image: url('$lib/images/grain.png');
      z-index: -1;
    }
    #showcase-content {
      position: relative;
      top: 150px;
      margin-bottom: 400px;
      color: var(--accent1-dim);
    }
    #showcase-text {
      color: #fff;
      font-size: 1rem;
      margin-bottom: 10px;
      line-height: 1.5;
    }
  }

  #connect-container {
    position: relative;
    background-color: var(--accent1-bright);
    #connect-top-wave {
      position: absolute;
      top: -300px;
      transform: rotate(180deg);
    }
    #connect-bottom-wave {
      position: absolute;
    }
    #connect-container a {
    color: var(--accent1-darkest);
    }
    #connect-container a:hover {
      color: var(--accent1-dark);
    }
    #connect {
      position: absolute;
      top: 0;
    }
    #connect-content {
      position: relative;
      color: var(--accent1-dark);
    }
    #connect-text {
      color: var(--accent1-darkest);
      font-size: 1rem;
      line-height: 1.5;
    }
  }

  footer {
    #footer-content {
      position: relative;
      margin-top: 200px;
    }
  }

  .monstera-group {
    position: relative;
    z-index: 3;
  }

  .monstera-leaf {
    position: absolute;
    animation: rotate 1s linear infinite;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    transform: rotate(var(--scroll));
  }

  /* 1a */
  img#monstera1a {
    filter: brightness(100%) drop-shadow(-5px -5px 10px rgba(0, 0, 0, 0.3)) blur(.5px);
    z-index: 3;
    transform-origin: top left;
    animation: sway-monstera-1a 10s ease-in-out infinite alternate forwards;
  }
  @keyframes sway-monstera-1a { 0% { transform: rotate(0deg); } 100% { transform: rotate(3deg); } }
  /* 1b */
  img#monstera1b {
    right: 80px;
    filter: brightness(60%) drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.2)) blur(1px);
    transform: rotate(54deg);
    transform-origin: top right;
    animation: sway-monstera-1b 12s ease-in-out infinite alternate forwards;
  }
  @keyframes sway-monstera-1b { 0% { transform: rotate(54deg); } 100% { transform: rotate(50deg); } }
  /* 2a */
  img#monstera2a {
    top: 420px;
    right: 0;
    filter: brightness(90%) drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.2)) blur(1px);
    z-index: 3;
    transform-origin: top right;
    animation: sway-monstera-2a 8s ease-in-out infinite alternate forwards;
  }
  @keyframes sway-monstera-2a { 0% { transform: rotate(0deg); } 100% { transform: rotate(3deg); } }
  /* 2b */
  img#monstera2b {
    top: 350px;
    filter: brightness(60%) drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.2)) blur(1px);
    transform: rotate(-80deg);
    transform-origin: top left;
    animation: sway-monstera-2b 12s ease-in-out infinite alternate forwards;
  }
  @keyframes sway-monstera-2b { 0% { transform: rotate(-80deg); } 100% { transform: rotate(-81deg); } }
  /* 2c */
  img#monstera2c {
    top: 520px;
    filter: brightness(70%) drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.2)) blur(1px);
    transform: rotate(245deg);
    transform-origin: top right;
    animation: sway-monstera-2c 4s ease-in-out infinite alternate forwards;
  }
  @keyframes sway-monstera-2c { 0% { transform: rotate(245deg); } 100% { transform: rotate(248deg); } }
  /* 3a */
  img#monstera3a {
    top: 0;
    right: 0;
    filter: brightness(100%) drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.3)) blur(.5px);
    z-index: 3;
    transform-origin: top right;
    animation: sway-monstera-3a 6s ease-in-out infinite alternate forwards;
  }
  @keyframes sway-monstera-3a { 0% { transform: rotate(0deg); } 100% { transform: rotate(2deg); } }
  /* 3b */
  img#monstera3b {
    left: 200px;
    filter: brightness(80%) drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.2)) blur(1px);
    transform: rotate(-72deg);
    transform-origin: top left;
    animation: sway-monstera-3b 6s ease-in-out infinite alternate forwards;
  }
  @keyframes sway-monstera-3b { 0% { transform: rotate(-70deg); } 100% { transform: rotate(-72deg); } }

  .text-line {
    /* filter: drop-shadow(rgba(255, 215, 77, 0.6) -1px -1px 2px) drop-shadow(rgba(124, 127, 255, 0.6) 1px 1px 2px); */
  }

  .text-line text {
    stroke-dasharray: 100;
    stroke-dashoffset: 80;
  }

  .text-line.taylor text {
    animation: dash 5s ease-in-out forwards, filling 6s ease-in forwards;
  }

  .cursor-blink {
    font-weight: bold;
    animation: cursor-blink 1.5s steps(2) infinite;
  }
  @keyframes cursor-blink { 0% { opacity: 0; } }

  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes filling {
    0% {
      fill: rgba(255, 255, 255, 1);
      fill-opacity: 0;
    }
    60% {
      fill: rgba(255, 255, 255, 1);
      fill-opacity: 0;
    }
    100% {
      fill: rgba(255, 255, 255, 1);
      fill-opacity: 1;
      stroke-width: 0;
    }
  }

  // --------------- CRT EFFECT

  .crt {
    //
  }

  .crt::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
    z-index: 2;
    background-size: 100% 2px, 3px 100%;
    pointer-events: none;
  }

  .crt::after {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(18, 16, 16, 0.1);
    opacity: 0;
    z-index: 2;
    pointer-events: none;
    animation: flicker 0.15s infinite;
  }

  @keyframes flicker {
    0% { opacity: 0.27861; }
    5% { opacity: 0.34769; }
    10% { opacity: 0.23604; }
    15% { opacity: 0.90626; }
    20% { opacity: 0.18128; }
    25% { opacity: 0.83891; }
    30% { opacity: 0.65583; }
    35% { opacity: 0.67807; }
    40% { opacity: 0.26559; }
    45% { opacity: 0.84693; }
    50% { opacity: 0.96019; }
    55% { opacity: 0.08594; }
    60% { opacity: 0.20313; }
    65% { opacity: 0.71988; }
    70% { opacity: 0.53455; }
    75% { opacity: 0.37288; }
    80% { opacity: 0.71428; }
    85% { opacity: 0.70419; }
    90% { opacity: 0.7003; }
    95% { opacity: 0.36108; }
    100% { opacity: 0.24387; }
  }
</style>

<svelte:window bind:scrollY={scrollPosition}/>

{#if scrollPosition < 400}
  <!-- left -->
  <div class="monstera-group monstera-group-left" style="transform: rotate({scrollPosition / 20}deg); opacity: {1 - (scrollPosition * .0001)}; filter: blur({scrollPosition * .03}px)">
    <img id="monstera1a" class="monstera-leaf" src={MonsteraLeaf1} alt="a monstera leaf" width="500" style="top: {-30 - scrollPosition / 2}px;" />
    <img id="monstera2b" class="monstera-leaf" src={MonsteraLeaf2} alt="a monstera leaf" width="430" style="left: {-130 - scrollPosition / 2}px;" />
    <img id="monstera2c" class="monstera-leaf" src={MonsteraLeaf2} alt="a monstera leaf" width="250" style="left: {-300 - scrollPosition / 2}px;" />
    <img id="monstera3b" class="monstera-leaf" src={MonsteraLeaf3} alt="a monstera leaf" width="250" style="top: {170 - scrollPosition}px;" />
  </div>
  <!-- right -->
  <div class="monstera-group monstera-group-right" style="transform: rotate(-{scrollPosition / 20}deg); opacity: {1 - (scrollPosition * .0001)}; filter: blur({scrollPosition * .03}px)">
    <img id="monstera1b" class="monstera-leaf" src={MonsteraLeaf1} alt="a monstera leaf" width="300" style="top: {120 - scrollPosition}px;" />
    <img id="monstera2a" class="monstera-leaf" src={MonsteraLeaf2} alt="a monstera leaf" width="350" style="right: {0 - scrollPosition}px;" />
    <img id="monstera3a" class="monstera-leaf" src={MonsteraLeaf3} alt="a monstera leaf" width="470" />
  </div>
{/if}

<main style="position: relative">
  <div id="hero">
    <div id="hero-bg" />
    <div id="hero-grain" />
    <img id="nav-wave" src={Wave1} alt="aesthetic wave background" />
    <nav>
      <img id="nav-bg" src={NavBg} alt="nav background" style="opacity: {scrollPosition < 160 ? scrollPosition / 150 : 1};">
      <div id="nav-wrapper" class="centered-content">
        <div id="logo">
          <a href="/">T.S.</a>
        </div>
        <ul id="links">
          <li><a href="#backstory"><span>01.</span> <span>Backstory</span></a></li>
          <li><a href="#expertise"><span>02.</span> <span>Expertise</span></a></li>
          <li><a href="#showcase"><span>03.</span> <span>Showcase</span></a></li>
          <li><a href="#connect"><span>04.</span> <span>Connect</span></a></li>
          <li><a href="/resume" class="button-styles">Résumé</a></li>
        </ul>
      </div>
    </nav>
    <div id="intro-container" class="centered-content">
      <div id="intro-title" class="centered-content">
        <span>Hi there, I'm</span>
        <p id="name">
          Taylor Sturtz
        </p>
        <span>I love what I do.</span>
      </div>
      <div id="intro-body">
        <div id="pfp" />
        <code id="details" class="crt">
          <p>
            I'm a self-motivated full-stack software engineer with an affinity for front-end and good vibes 🤙. Currently, I'm developing commerce system tools and services at <a href="https://www.blizzard.com">Blizzard Entertainment</a>.
          </p>
          <br />
          <p>Check me out elsewhere on the web...</p>
          <div id="intro-social">
            <a href="/twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
            <a href="/github">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="/linkedin">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
          <br />
          <div id="intro-npx" title="run me in the terminal (with node installed)">
            <span>></span>
            &nbsp;
            <span>npx taylorsturtz</span><span class="cursor-blink">_</span>
            &nbsp;&nbsp;&nbsp;
            <CopyToClipboard text="npx taylorsturtz" />
          </div>
        </code>
      </div>
    </div>
    {#if scrollPosition < 600}
      <a href="#backstory">
        <svg id="chevrons-down" transition:fade xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-down"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>
      </a>
    {/if}
  </div>

  <div id="backstory-container" class="section-container">
    <div id="backstory" />
    <img id="backstory-top-wave" src={NavBg} alt="backstory background">
    <div id="backstory-content" class="centered-content">
      <p class="section-number">01.</p>
      <h2 class="section-title" style="color: var(--accent1-dark)">Backstory</h2>
      <h3 class="section-subtitle" style="color: var(--accent1-darker);">A bit about me</h3>
      <Columbus />
      <Irvine />
      <Canada />
      <Caribbean />
      <Nyc />
      <div id="backstory-text">
        <p>Hello! I'm a senior software engineer from Irvine, CA.</p>
        <Europe />
        <Mexico />
        <h4 class="section-heading">TL;DR</h4>
        <p style="margin-bottom: 15px;">I started programming in my early teens, took a detour into a design, then went fully into software development and gained a lot of great experience. I'm usually <a href="https://www.psychologytoday.com/us/blog/building-the-habit-hero/202008/two-types-passion-harmonious-vs-obsessive#:~:text=Harmonious%20passion%20is%20linked%20to%20%E2%80%9Cflow%20state%E2%80%9D" target="_blank" rel="noopener">harmoniously</a> but sometimes <a href="https://www.psychologytoday.com/us/blog/building-the-habit-hero/202008/two-types-passion-harmonious-vs-obsessive#:~:text=the%20activity%20overpowers%20the%20person" target="_blank" rel="noopener">obsessively</a> passionate about soccer, family, and building software. I also really like tea, plants, and board games.</p>
        <h5 class="section-subheading">Early days</h5>
        <BootOnBall />
        <p>When I was twelve my dad noticed my interest in the web and dropped a stack of HTML books on my desk. He told me to get to it and the rest is history; let me tell you a bit about that history...</p>
        <p>In my teens I learned HTML and built fan sites for bands, movies, and games; I programmed graphing calculators in TI-BASIC; and I designed maps and game modes for one of the first-ever MMO (massively multiplayer online) games: <a href="https://en.wikipedia.org/wiki/SubSpace_(video_game)">Subspace</a>.</p>
        <p>I swerved into the arts in college and ended up with a BA in Art History from <a href="https://www.csulb.edu/">CSU Long Beach</a>. I took a lot of history and philosophy courses, gained a basic proficiency in German language, got into electronic music production, and played <em>a lot</em> of soccer.</p>
        <p>After college I went into graphic/web design which I loved, but it took 5 years to realize I sorely missed programming. I enrolled in some web development courses at <a href="https://orangecoastcollege.edu/">OCC</a> and <a href="https://learningfuze.com/">LFZ</a>, and for about 6 months I dedicated myself to getting <em>pretty good</em> at HTML, CSS, JavaScript, and PHP.</p>
        <h5 class="section-subheading">Here and now</h5>
        <Tea />
        <p>I've now had years of experience working in collaborative agile environments across multiple industries. Along the way I've excelled in front-end web and have grown into back-end development. I enjoy what I do, I make work fun, and I empower my teammates to be successful.</p>
        <p>I'm married with a couple of kids now, still play soccer, drink a lot of tea, enjoy growing plants, and love board games.</p>
      </div>
    </div>
  </div>
  <img id="backstory-bottom-wave" src={Wave2} alt="aesthetic wave background" />

  <div id="experience-container" class="section-container">
    <div id="experience" />
    <div id="experience-content" class="centered-content" style="z-index: 1;">
      <p class="section-number" style="right: 0;" title="Expertise">02.</p>
      <h2 class="section-title" style="text-align: right;">Expertise</h2>
      <h3 class="section-subtitle" style="text-align: right; color: var(--accent1-bright);">What I can do and have done</h3>
      <div style="display: flex;">
        <div style="display: flex; flex-direction: column; margin: 0 auto; margin-right: 30px; width: 40%;">
          <!-- <LaptopGuy /> -->
          <div id="typewriter" />
          <!-- <LaptopGuyBlob /> -->
          <h4 class="section-heading">Technologies</h4>
          <p style="font-size: .9rem; margin-bottom: 20px; color: #ffffff66">From plotting vectors to querying databases and everything in between, I love learning and developing my skillset.</p>
          <div style="display: flex;">
            <VerticalDivider text="Stack" />
            <table class="accent-box" style="white-space: nowrap;">
              <tr style="color: #fff">
                <th>Platform</th>
                <th>Technology</th>
                <th>Experience</th>
              </tr>
              <tr>
                <td rowspan="2">Design</td>
                <td>Adobe Suite</td>
                <td class="blocks">{@html blocks(5)}</td>
              </tr>
              <tr>
                <td>Figma</td>
                <td class="blocks">{@html blocks(3)}</td>
              </tr>
              <tr>
                <td colspan="3">
                  <hr />
                </td>
              </tr>
              <tr>
                <td rowspan="10">Browser</td>
                <td>Angular</td>
                <td class="blocks">{@html blocks(2)}</td>
              </tr>
              <tr>
                <td>Angular.js</td>
                <td class="blocks">{@html blocks(5)}</td>
              </tr>
              <tr>
                <td>CSS/SCSS</td>
                <td class="blocks">{@html blocks(5)}</td>
              </tr>
              <tr>
                <td>HTML</td>
                <td class="blocks">{@html blocks(6)}</td>
              </tr>
              <tr>
                <td>JavaScript</td>
                <td class="blocks">{@html blocks(6)}</td>
              </tr>
              <tr>
                <td>jQuery</td>
                <td class="blocks">{@html blocks(5)}</td>
              </tr>
              <tr>
                <td>React</td>
                <td class="blocks">{@html blocks(6)}</td>
              </tr>
              <tr>
                <td>Svelte</td>
                <td class="blocks">{@html blocks(3)}</td>
              </tr>
              <tr>
                <td>TypeScript</td>
                <td class="blocks">{@html blocks(5)}</td>
              </tr>
              <tr>
                <td>Vue</td>
                <td class="blocks">{@html blocks(1)}</td>
              </tr>
              <tr>
                <td colspan="3">
                  <hr />
                </td>
              </tr>
              <tr>
                <td rowspan="1">Mobile</td>
                <td>React Native</td>
                <td class="blocks">{@html blocks(5)}</td>
              </tr>
              <tr>
                <td colspan="3">
                  <hr />
                </td>
              </tr>
              <tr>
                <td>Arduino</td>
                <td>C++</td>
                <td class="blocks">{@html blocks(1)}</td>
              </tr>
              <tr>
                <td colspan="3">
                  <hr />
                </td>
              </tr>
              <tr>
                <td rowspan="5">Server</td>
                <td>C#</td>
                <td class="blocks">{@html blocks(1)}</td>
              </tr>
              <tr>
                <td>Go</td>
                <td class="blocks">{@html blocks(1)}</td>
              </tr>
              <tr>
                <td>Java/Spring</td>
                <td class="blocks">{@html blocks(4)}</td>
              </tr>
              <tr>
                <td>Node.js</td>
                <td class="blocks">{@html blocks(5)}</td>
              </tr>
              <tr>
                <td>PHP/Laravel</td>
                <td class="blocks">{@html blocks(3)}</td>
              </tr>
              <tr>
                <td colspan="3">
                  <hr />
                </td>
              </tr>
              <tr>
                <td rowspan="3">Cloud</td>
                <td>AWS</td>
                <td class="blocks">{@html blocks(3)}</td>
              </tr>
              <tr>
                <td>Azure</td>
                <td class="blocks">{@html blocks(1)}</td>
              </tr>
              <tr>
                <td>GCP</td>
                <td class="blocks">{@html blocks(1)}</td>
              </tr>
              <tr>
                <td colspan="3">
                  <hr />
                </td>
              </tr>
              <tr>
                <td rowspan="2">Database</td>
                <td>NoSQL</td>
                <td class="blocks">{@html blocks(2)}</td>
              </tr>
              <tr>
                <td>SQL</td>
                <td class="blocks">{@html blocks(3)}</td>
              </tr>
            </table>
          </div>
        </div>
        <div style="width: 60%;">
          <h4 class="section-heading">Work History</h4>
          <p style="font-size: .9rem; margin-bottom: 20px; color: #ffffff66">Some information about the companies I worked for and experience in that industries, as well as my role on each team. See my <a href="/resume">résumé</a> for a concise and printable version.</p>
          <div style="display: flex; width: 100%;">
            <VerticalDivider text="Time" />
            <div style="width: 100%;">
              <div class="accent-box">
                <h3><a href="https://www.blizzard.com" style="display: inline-block; margin-bottom: 10px;">Blizzard Entertainment</a></h3>
                <div class="experience-role">
                  <p style="font-size: .8rem; color: var(--grey);"><em>Sept 2021 - Present</em></p>
                  <p style="color: #fff;">Senior Software Engineer</p>
                </div>
                <div class="experience-role">
                  <p style="font-size: .8rem; color: var(--grey);"><em>May 2020 - Sept 2021</em></p>
                  <p style="color: #fff;">Software Engineer</p>
                </div>
                <hr style="margin: 10px 0;" />
                <details>
                  <summary>
                    <svg class="small details-chevron" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    <p style="margin-left: 5px;">Details...</p>
                  </summary>
                  <div>
                    <p>The work I do on the Blizzard commerce platform powers monetization across ABK game studios and critically impacts hundreds of millions of end users. My team proudly provides tools to manage commerce data and APIs to access that data, which are used by game clients, web shops, and more.</p>
                    <br />
                    <p>Additionally, I contribute to internal design systems, post to the engineering blog, formally mentor junior engineers, and helped build <a href="src/lib/video/zoombot-short-clip.mp4" target="_blank" rel="noopener">Zoombot&trade;</a> which won <em>Battle.net Hackathon, 2022</em>!</p>
                  </div>
                </details>
              </div>
              <div style="display: flex; align-items: center; flex-direction: column; margin: 10px 0;">
                <div style="height: 25px; width: 80%; border: 1px dashed #fff; border-top: none; border-right: none;"></div>
                <div style="height: 25px; width: 80%; border: 1px dashed #fff; border-top: none; border-bottom: none; border-left: none;"></div>
              </div>
              <div class="accent-box" style="text-align: right;">
                <h3><a href="https://www.restaurant365.com" style="display: inline-block; margin-bottom: 10px;">Restaurant365</a></h3>
                <div class="experience-role">
                  <p style="font-size: .8rem; color: var(--grey);"><em>Oct 2019 - May 2020</em></p>
                  <p style="color: #fff;">Software Engineer</p>
                </div>
                <hr style="margin: 10px 0;" />
                <details>
                  <summary style="justify-content: flex-end;">
                    <svg class="small details-chevron" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    <p style="margin-left: 5px;">Details...</p>
                  </summary>
                  <div>
                    <p>Restaurant365 provides enterprise management software to over 40,000 restaurants nationwide.</p>
                    <br />
                    <p>Soon after starting at R365 I solved the most complex problems that were plaguing the legacy app front-end and then provided production support as needed to ensure product stability. I was also tasked with developing new functionality in their modern stack. In my short time at R365 I delivered features to enable uploading and processing of documents with optic image recognition, actionable inventory tracking, and employee records/scheduling.</p>
                  </div>
                </details>
              </div>
              <div style="display: flex; align-items: center; flex-direction: column; margin: 10px 0;">
                <div style="height: 25px; width: 80%; border: 1px dashed #fff; border-top: none; border-left: none;"></div>
                <div style="height: 25px; width: 80%; border: 1px dashed #fff; border-top: none; border-bottom: none; border-right: none;"></div>
              </div>
              <div class="accent-box">
                <h3><a href="https://www.ytel.com" style="display: inline-block; margin-bottom: 10px;">Ytel</a></h3>
                <div class="experience-role">
                  <p style="font-size: .8rem; color: var(--grey);"><em>May 2017 - Sept. 2019</em></p>
                  <p style="color: #fff;">Software Engineer</p>
                </div>
                <div class="experience-role">
                  <p style="font-size: .8rem; color: var(--grey);"><em>Mar 2017 - May 2017</em></p>
                  <p style="color: #fff;">Web Developer</p>
                </div>
                <hr style="margin: 10px 0;" />
                <details>
                  <summary>
                    <svg class="small details-chevron" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    <p style="margin-left: 5px;">Details...</p>
                  </summary>
                  <div>
                    <p>Ytel offers a variety of telecommunications software solutions ranging from call center systems, to APIs (think Twilio), to automated SMS campaigns with reactive event handling (decision tree).</p>
                    <br />
                    <p>I started at Ytel as a web developer building marketing sites and internal apps while maintaining their respective DNS and virtual machines. In about three months I was promoted to work on Ytel's suite of software products. I led development on Ytel's modern and legacy applications and then built new tools including real-time <a href="src/lib/images/inbox.gif" target="_blank" rel="noopener">live messaging inbox system</a> and a complex drag and drop <a href="src/lib/images/workflow.png" target="_blank" rel="noopener">workflow editor</a>.</p>
                  </div>
                </details>
              </div>
              <div style="display: flex; align-items: center; flex-direction: column; margin: 10px 0;">
                <div style="height: 25px; width: 80%; border: 1px dashed #fff; border-top: none; border-right: none;"></div>
                <div style="height: 25px; width: 80%; border: 1px dashed #fff; border-top: none; border-bottom: none; border-left: none;"></div>
              </div>
              <div class="accent-box" style="text-align: right;">
                <h3><span style="display: inline-block; margin-bottom: 10px; font-weight: bold;">Mixed Media Group</span></h3>
                <div class="experience-role">
                  <p style="font-size: .8rem; color: var(--grey);"><em>July 2013 - Oct. 2016</em></p>
                  <p style="color: #fff;">Design Lead</p>
                </div>
                <div class="experience-role">
                  <p style="font-size: .8rem; color: var(--grey);"><em>June 2011 - July 2013</em></p>
                  <p style="color: #fff;">Web and Graphic Designer</p>
                </div>
                <hr style="margin: 10px 0;" />
                <details>
                  <summary style="justify-content: flex-end;">
                    <svg class="small details-chevron" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    <p style="margin-left: 5px;">Details...</p>
                  </summary>
                  <div>
                    <p>Mixed Media Group was a talented web and print design agency of about twelve employees at its height; a multi-faceted firm offerring design services in many different contexts.</p>
                    <br />
                    <p>I worked on various print design projects as needed to fulfill the needs of clients which were often coupled with websites. One of the print projects I was proud to own was the layout, printing, and shipping of 27 <strong><em>7-Eleven</em></strong> magazines to franchise owners in Los Angeles, San Diego, and Denver. When it came to web projects, I provided hi-fi mocks, interfaced directly with clients, contributed a bit of front-end code, and worked directly with developers to complete client websites.</p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <img id="experience-bottom-wave" src={Wave3} alt="aesthetic wave background" />

  <div id="showcase-container" class="section-container">
    <div id="showcase" />
    <div id="showcase-bg" />
    <div id="showcase-grain" />
    <div id="showcase-content" class="centered-content" style="z-index: 1;">
      <p class="section-number">03.</p>
      <h2 class="section-title">Showcase</h2>
      <h3 class="section-subtitle" style="color: var(--accent1-bright);">Some apps and things I built</h3>
      <div id="showcase-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur blanditiis molestiae, dignissimos a ex quidem, natus ullam, sint eos quia quam nulla autem quibusdam eum commodi ducimus dicta numquam tempora quod eveniet minus earum aliquid delectus qui. Vero quis, saepe molestias, perferendis, corrupti quam adipisci quae impedit doloremque earum sapiente ut ipsum? Fuga aperiam nam porro necessitatibus molestias distinctio. Et corrupti eum facilis, voluptatibus ratione excepturi! Veritatis velit alias odio nihil corporis odit voluptas ad accusantium iste minus maiores saepe tenetur, tempore, ut deserunt quam officiis nemo, cum dicta! Ab veritatis sed sit quo perspiciatis harum unde error quisquam dolorem minus adipisci dolorum, enim aut similique reprehenderit, dicta debitis? Architecto, ut tenetur? Maiores, beatae laboriosam temporibus quidem vitae animi! Saepe harum atque ipsum? Exercitationem quae voluptatum odio sint quam, iure amet earum dolore temporibus libero dolorum beatae sit ex officia necessitatibus nobis dolores, asperiores, velit veritatis. Totam, illum ea iusto sequi in cupiditate necessitatibus fugiat aspernatur doloremque qui culpa saepe, nam minus hic quos doloribus consectetur facere animi dolorum ratione vero deleniti, inventore quas corporis. Molestiae tempora non numquam delectus nihil, porro necessitatibus magnam cumque, pariatur, esse iure reiciendis dolorum fugit soluta assumenda ratione hic ad tenetur. Vero, illo corrupti.
        </p>
      </div>
    </div>
    <div id="connect-container" class="section-container">
      <img id="connect-top-wave" src={Wave4} alt="aesthetic wave background" />
      <div id="connect" />
      <div id="connect-content" class="centered-content" style="z-index: 1;">
        <p class="section-number" style="right: 0;">04.</p>
        <h2 class="section-title" style="text-align: right;">Connect</h2>
        <h3 class="section-subtitle" style="text-align: right;">How to get ahold of me</h3>
        <div id="connect-text">
          <p>
            LinkedIn is a great way to connect with me.
          </p>
        </div>
      </div>
      <img id="connect-bottom-wave" src={Wave5} alt="aesthetic wave background" />
    </div>

    <footer>
      <div id="footer-content" class="centered-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat natus recusandae rem qui consequatur, consectetur facilis repellat pariatur modi nesciunt distinctio deserunt sunt aspernatur, assumenda deleniti iusto ipsum adipisci voluptatum, excepturi odit perspiciatis. Cum nihil quod, non aperiam doloremque voluptatibus. Aut ad et ea ut possimus dolores, mollitia repudiandae, eveniet itaque reiciendis voluptatum non quasi reprehenderit vel distinctio corrupti nemo quibusdam praesentium laudantium, cum hic. Natus, cumque esse. Ipsa, alias. Nostrum dolorem consequuntur harum. Unde, consequuntur error praesentium distinctio voluptas perferendis nisi quod est a earum neque accusamus. Quod nemo in ad est eaque nostrum, culpa repudiandae beatae dolorem. Quidem.
        </p>
      </div>
    </footer>
  </div>


</main>

<!-- clock idea -->
<!-- <p>12:02:02, February 3rd, 2023</p> -->

<!-- SIGNATURE -->
<!-- #first { transform: rotate(-10deg); }
#sur { transform: rotate(-8deg); } -->
<!-- font-family: 'Kristi';
font-size: 3rem; -->
<!-- <span id="first">Taylor</span>
<span id="sur">Sturtz</span> -->

<!-- grid -->
<!-- background-image:
linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent),
linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent);
background-size: 15px 15px; -->