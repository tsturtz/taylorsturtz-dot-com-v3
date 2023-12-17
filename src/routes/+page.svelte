<script lang="ts">
  // Monstera Leaves
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
  import WavesStacked_GY from '$lib/images/waves/waves-stacked-gy.svg';
  import WavesStacked_YG from '$lib/images/waves/waves-stacked-yg.svg';

  // Icons
  import AngularIcon from '$lib/components/Icons/devicons/AngularIcon.svelte';
  import ArduinoIcon from '$lib/components/Icons/devicons/ArduinoIcon.svelte';
  import AwsIcon from '$lib/components/Icons/devicons/AwsIcon.svelte';
  import AzureIcon from '$lib/components/Icons/devicons/AzureIcon.svelte';
  import BalsamiqIcon from '$lib/components/Icons/devicons/BalsamiqIcon.svelte';
  import BashIcon from '$lib/components/Icons/devicons/BashIcon.svelte';
  import CssIcon from '$lib/components/Icons/devicons/CssIcon.svelte';
  import DockerIcon from '$lib/components/Icons/devicons/DockerIcon.svelte';
  import ExpressIcon from '$lib/components/Icons/devicons/ExpressIcon.svelte';
  import ExternalLinkIcon from '$lib/components/Icons/ExternalLinkIcon.svelte';
  import FigmaIcon from '$lib/components/Icons/devicons/FigmaIcon.svelte';
  import FirebaseIcon from '$lib/components/Icons/devicons/FirebaseIcon.svelte';
  import GcpIcon from '$lib/components/Icons/devicons/GcpIcon.svelte';
  import GitIcon from '$lib/components/Icons/devicons/GitIcon.svelte';
  import GoIcon from '$lib/components/Icons/devicons/GoIcon.svelte';
  import HtmlIcon from '$lib/components/Icons/devicons/HtmlIcon.svelte';
  import JavaIcon from '$lib/components/Icons/devicons/JavaIcon.svelte';
  import JavaScriptIcon from '$lib/components/Icons/devicons/JavaScriptIcon.svelte';
  import JenkinsIcon from '$lib/components/Icons/devicons/JenkinsIcon.svelte';
  import JqueryIcon from '$lib/components/Icons/devicons/JqueryIcon.svelte';
  import LaravelIcon from '$lib/components/Icons/devicons/LaravelIcon.svelte';
  import MongoIcon from '$lib/components/Icons/devicons/MongoIcon.svelte';
  import MySqlIcon from '$lib/components/Icons/devicons/MySqlIcon.svelte';
  import NextIcon from '$lib/components/Icons/devicons/NextIcon.svelte';
  import NginxIcon from '$lib/components/Icons/devicons/NginxIcon.svelte';
  import NodeIcon from '$lib/components/Icons/devicons/NodeIcon.svelte';
  import OracleIcon from '$lib/components/Icons/devicons/OracleIcon.svelte';
  import PhotoshopIcon from '$lib/components/Icons/devicons/PhotoshopIcon.svelte';
  import PostmanIcon from '$lib/components/Icons/devicons/PostmanIcon.svelte';
  import PlaywrightIcon from '$lib/components/Icons/devicons/PlaywrightIcon.svelte';
  import PhpIcon from '$lib/components/Icons/devicons/PhpIcon.svelte';
  import ReactIcon from '$lib/components/Icons/devicons/ReactIcon.svelte';
  import SassIcon from '$lib/components/Icons/devicons/SassIcon.svelte';
  import SeleniumIcon from '$lib/components/Icons/devicons/SeleniumIcon.svelte';
  import SpringIcon from '$lib/components/Icons/devicons/SpringIcon.svelte';
  import StorybookIcon from '$lib/components/Icons/devicons/StorybookIcon.svelte';
  import SvelteIcon from '$lib/components/Icons/devicons/SvelteIcon.svelte';
  import TypeScriptIcon from '$lib/components/Icons/devicons/TypeScriptIcon.svelte';
  import VueIcon from '$lib/components/Icons/devicons/VueIcon.svelte';

  // PassportStamps
  import Columbus from '$lib/components/PassportStamps/Columbus.svelte';
  import Canada from '$lib/components/PassportStamps/Canada.svelte';
  import Irvine from '$lib/components/PassportStamps/Irvine.svelte';
  import Nyc from '$lib/components/PassportStamps/Nyc.svelte';
  import Mexico from '$lib/components/PassportStamps/Mexico.svelte';
  import Caribbean from '$lib/components/PassportStamps/Caribbean.svelte';
  import Europe from '$lib/components/PassportStamps/Europe.svelte';

  // Other image imports n stuff
  import BootOnBall from '$lib/components/BootOnBall.svelte';
  import Ramen from '$lib/components/Ramen.svelte';
  import Tea from '$lib/components/Tea.svelte';
  import Bicycle from '$lib/components/Bicycle.svelte';
  import PaperPlane from '$lib/components/PaperPlane.svelte';
  import YtelInboxDemo from '$lib/images/inbox.gif';
  import YtelWorkflowDemo from '$lib/images/workflow.png';
  import ZoombotDemo from '$lib/video/zoombot-short-clip.mp4';

  // App
  import Showcase from '$lib/components/App/Showcase.svelte';

  // Util Components
  import CopyToClipboard from '$lib/components/CopyToClipboard.svelte';
  import ExperienceDashedDivider from '$lib/components/ExperienceDashedDivider.svelte';
  import TableRowDashedDivider from '$lib/components/TableRowDashedDivider.svelte';
  import VerticalDivider from '$lib/components/VerticalDivider.svelte';

  // Svelte imports
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
	import TailwindIcon from '$lib/components/Icons/devicons/TailwindIcon.svelte';

  let mounted = false;
  let scrollPosition = 0;
  // $: console.log('🚀 ~ scrollPosition', scrollPosition);

  onMount(() => {
    mounted = true;
  });
</script>

<style lang="scss">
  .section-heading {
    @include md {
      font-size: 3rem;
    }
  }
  .section-blurb {
    font-size: .9rem;
    margin-bottom: 20px;
    color: #ffffff66;
    @include md {
      display: none;
    }
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
    background-image: radial-gradient(#01120ef0, #000000), url('$lib/images/jungle-bg-lg.jpg');
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
  #hero-bottom-wave {
    position: absolute;
    bottom: 0;
    min-width: 2000px;
  }

  main {
    overflow-x: hidden;
  }

  nav#main-nav {
    height: 120px;
    width: 100%;
    min-width: 2000px;
    margin-bottom: 140px;
    position: fixed;
    z-index: 2;
    @include md {
      display: none;
    }
    #nav-bg {
      position: absolute;
      top: -40px;
    }
    #nav-wrapper {
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 0;
    }
    #links {
      display: flex;
      align-items: center;
      list-style-type: none;
      li {
        margin-left: 50px;
      }
      a {
        text-decoration: none;
        & > span {
          color: #fff;
        }
        span:not(:first-child) {
          color: var(--accent1-bright);
        }
      }
      a:hover span:not(:first-child) {
        color: #fff;
      }
    }
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
    @include md {
      padding-top: 40px;
    }
    /* background: linear-gradient(90deg, #ffffff01, #ffffff0a, #ffffff01); */
  }
  #mobile-banner {
    display: none;
    text-align: center;
    margin-top: 70px;
    @include md {
      display: block;
    }
  }

  #intro-title {
    display: flex;
    flex-direction: column;
    width: 90%;
  }
  #intro-title #name {
    font-family: 'TheSeasons';
    font-size: 8vw;
    text-align: center;
    white-space: nowrap;
    @include xxl {
      font-size: 10.5vw;
    }
    @include xl {
      font-size: 14vw;
    }
    @include sm {
      white-space: pre-line;
      font-size: 22vw;
      line-height: 1;
    }
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
    @include md {
      justify-content: center;
      flex-direction: column;
    }
    #pfp {
      position: relative;
      width: 35%;
      height: 16vw;
      margin: 0 40px 0 0;
      background-image: url('$lib/images/pfp.png');
      background-position: center;
      background-size: cover;
      -webkit-mask-image: url('$lib/images/blob1.svg');
      mask-image: url('$lib/images/blob1.svg');
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      filter: grayscale(1) brightness(0.9) contrast(1.3);
      @include xxl {
        height: 21vw;
      }
      @include xl {
        height: 28vw;
      }
      @include md {
        margin: 20px 0;
        width: 42%;
        height: 33vw;
      }
    }
    #details {
      position: relative;
      width: 60%;
      line-height: 2;
      font-size: 1rem;
      @include md {
        width: 90%;
      }
      p {
        text-align: justify;
      }
      #details-social {
        @include md {
          display: none;
        }
      }
    }
  }
  #intro-social svg {
    vertical-align: middle;
    margin: 10px 5px 15px 0;
    filter: drop-shadow(rgba(255, 215, 77, 0.3) -1px -1px 2px) drop-shadow(rgba(124, 127, 255, 0.3) 1px 1px 2px);
  }
  #intro-npx {
    display: flex;
    align-items: center;
    width: max-content;
    background-color: rgb(0, 0, 15);
    border: 1px solid #717171;
    border-radius: 10px;
    box-shadow: 0px 1px 24px 4px rgba(0,0,0,0.75);
  }

  #backstory-link {
    @include md {
      display: none;
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
    padding-bottom: 50px;
    @include md {
      display: none;
    }
  }
  #backstory {
    position: absolute;
    top: 0px;
  }
  #backstory-top-wave {
    position: relative;
  }
  #backstory-top-waves {
    position: relative;
    min-width: 2000px;
  }
  #backstory-container a {
    color: var(--accent1-darkest);
  }
  #backstory-container a:hover {
    color: var(--accent1-dark);
  }
  #backstory-content {
    position: relative;
    margin-top: -70px;
    color: var(--accent1-dark);
  }
  #backstory-text {
    width: 70%;
    p {
      color: var(--accent1-darkest);
      font-size: 1rem;
      margin-bottom: 10px;
      line-height: 1.5;
    }
  }
  #backstory-text p:last-child {
    margin-bottom: 0px;
  }
  #backstory-bottom-waves {
    position: relative;
    min-width: 2000px;
    @include md {
      display: none;
    }
  }

  #bottom-section {
    #bottom-section-bg {
      position: absolute;
      height: 100%;
      width: 100%;
      background-image: radial-gradient(#01120ef0, #000000), url('$lib/images/palm-tress-bg-lg.jpg');
      background-size: cover;
    }
    #bottom-section-grain {
      position: absolute;
      height: 1200px;
      width: 100%;
      background-image: url('$lib/images/grain.png');
    }
  }

  #experience-container {
    background-color: var(--primary);
    margin-bottom: 100px;
  }
  #expertise {
    position: absolute;
    top: -300px;
  }
  #experience-content {
    position: relative;
    margin-top: -100px;
    margin-bottom: 150px;
    @include md {
      margin-top: -150px;
    }
    #experience-content-wrapper {
      display: flex;
      gap: 3%;
      @include md {
        flex-direction: column-reverse;
        gap: 80px;
      }
      #work-history {
        width: 62%;
        @include md {
          width: 100%;
        }
      }
      #skill-set {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 35%;
        @include md {
          width: 100%;
        }
      }
    }
  }
  #experience-content {
    color: var(--accent1-dim);
  }
  #experience-bottom-wave {
    position: absolute;
    z-index: 1;
    min-width: 2000px;
  }
  .primary-box {
    padding: 20px;
    border: 1px solid var(--primary);
    background-color: #00000033;
  }
  .experience-role {
    margin-bottom: 5px;
  }

  #contact-container {
    position: relative;
    background-color: var(--accent1-bright);
    #contact-top-wave {
      position: absolute;
      top: -300px;
      transform: rotate(180deg);
      min-width: 2000px;
      @include md {
        top: -350px;
      }
    }
    #contact-bottom-wave {
      position: absolute;
      min-width: 2000px;
    }
    #contact-container a {
    color: var(--accent1-darkest);
    }
    #contact-container a:hover {
      color: var(--accent1-dark);
    }
    #contact {
      position: absolute;
      top: 0;
    }
    #contact-content {
      position: relative;
      top: -30px;
      color: var(--accent1-dark);
    }
    #contact-text {
      color: var(--accent1-darkest);
      display: flex;
      @include md {
        flex-direction: column;
        align-items: center;
      }
      #contact-plane-wrapper {
        position: relative;
        top: -30px;
        margin-right: 30px;
        transform: scale(1.3);
      }
    }
  }

  footer {
    padding-bottom: 70px;
    #footer-content {
      position: relative;
      margin-top: 150px;
    }
    #footer-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0px 20px;
      @include md {
        flex-direction: column-reverse;
        gap: 40px;
        align-items: baseline;
      }
      nav {
        display: flex;
        align-items: center;
        a {
          text-decoration: none;
        }
      }
      #footer-pfp {
        position: relative;
        width: 140px;
        min-width: 130px;
        height: 110px;
        margin: 0 20px;
        background-image: url('$lib/images/pfp.png');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        -webkit-mask-image: url('$lib/images/blob1.svg');
        mask-image: url('$lib/images/blob1.svg');
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        filter: grayscale(1) brightness(0.9) contrast(1.3);
        @include md {
          display: none;
        }
      }
      #footer-info {
        #footer-details {
          font-size: .8rem;
          color: var(--grey);
        }
      }
    }
  }

  .monstera-group {
    position: sticky;
    z-index: 3;
  }

  .monstera-leaf {
    position: absolute;
    animation: rotate 1s linear infinite;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    // transform: rotate(var(--scroll));
  }

  /* 1a */
  img#monstera1a {
    top: -30px;
    filter: brightness(100%) drop-shadow(-5px -5px 10px rgba(0, 0, 0, 0.3)) blur(.5px);
    z-index: 3;
    transform-origin: top left;
    animation: sway-monstera-1a 10s ease-in-out infinite alternate forwards;
  }
  @keyframes sway-monstera-1a { 0% { transform: rotate(0deg); } 100% { transform: rotate(3deg); } }
  /* 1b */
  img#monstera1b {
    right: 80px;
    top: 100px;
    filter: brightness(60%) drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.2)) blur(1px);
    transform: rotate(54deg);
    transform-origin: top right;
    animation: sway-monstera-1b 12s ease-in-out infinite alternate forwards;
  }
  @keyframes sway-monstera-1b { 0% { transform: rotate(54deg); } 100% { transform: rotate(50deg); } }
  /* 2a */
  img#monstera2a {
    top: 380px;
    right: 0;
    filter: brightness(90%) drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.2)) blur(1px);
    z-index: 1;
    transform-origin: top right;
    animation: sway-monstera-2a 8s ease-in-out infinite alternate forwards;
  }
  @keyframes sway-monstera-2a { 0% { transform: rotate(0deg); } 100% { transform: rotate(3deg); } }
  /* 2b */
  img#monstera2b {
    top: 350px;
    left: -130px;
    filter: brightness(60%) drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.2)) blur(1px);
    transform: rotate(-80deg);
    transform-origin: top left;
    animation: sway-monstera-2b 12s ease-in-out infinite alternate forwards;
  }
  @keyframes sway-monstera-2b { 0% { transform: rotate(-80deg); } 100% { transform: rotate(-81deg); } }
  /* 2c */
  img#monstera2c {
    top: 480px;
    left: -280px;
    z-index: 1;
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
    top: 150px;
    left: 140px;
    filter: brightness(80%) drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.2)) blur(1px);
    transform: rotate(-72deg);
    transform-origin: top left;
    animation: sway-monstera-3b 6s ease-in-out infinite alternate forwards;
  }
  @keyframes sway-monstera-3b { 0% { transform: rotate(-70deg); } 100% { transform: rotate(-72deg); } }

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
</style>

<svelte:window bind:scrollY={scrollPosition}/>

<!-- left -->
<div class="monstera-group monstera-group-left">
  <img id="monstera1a" class="monstera-leaf" src={MonsteraLeaf1} alt="a monstera leaf" width="400" />
  <img id="monstera2b" class="monstera-leaf" src={MonsteraLeaf2} alt="a monstera leaf" width="350" />
  <img id="monstera2c" class="monstera-leaf" src={MonsteraLeaf2} alt="a monstera leaf" width="250" />
  <img id="monstera3b" class="monstera-leaf" src={MonsteraLeaf3} alt="a monstera leaf" width="220" />
</div>
<!-- right -->
<div class="monstera-group monstera-group-right">
  <img id="monstera1b" class="monstera-leaf" src={MonsteraLeaf1} alt="a monstera leaf" width="220" />
  <img id="monstera2a" class="monstera-leaf" src={MonsteraLeaf2} alt="a monstera leaf" width="230" />
  <img id="monstera3a" class="monstera-leaf" src={MonsteraLeaf3} alt="a monstera leaf" width="380" />
</div>

<main style="position: relative">
  <div id="hero">
    <div id="hero-bg" />
    <div id="hero-grain" />
    <img id="hero-bottom-wave" src={Wave1} alt="aesthetic wave background" />
    <nav id="main-nav">
      <img id="nav-bg" src={NavBg} alt="nav background" style="opacity: {scrollPosition < 160 ? scrollPosition / 150 : .92};">
      <div style="width: 100vw; height: 100%;">
        <div id="nav-wrapper" class="centered-content">
          <div id="logo">
            <a href="/">T.S.</a>
          </div>
          <ul id="links">
            <li><a href="#backstory"><span>01.</span> <span>Backstory</span></a></li>
            <li><a href="#expertise"><span>02.</span> <span>Expertise</span></a></li>
            <li><a href="#showcase"><span>03.</span> <span>Showcase</span></a></li>
            <li><a href="#contact"><span>04.</span> <span>Contact</span></a></li>
            <li><a href="/resume" target="_blank" rel="noreferrer" class="button-styles">Résumé</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div id="intro-container" class="centered-content">
      <div id="intro-title" class="centered-content">
        <span>Hi there, I'm</span>
        <p id="name">
          Taylor
          Sturtz
        </p>
        <span>I love what I do.</span>
      </div>
      <div id="intro-body">
        <div id="pfp" />
        <div id="details">
          <p>
            I'm a self-motivated full-stack software engineer that knows how to exit Vim and has an affinity for design and good vibes 🤙. Currently, I'm developing commerce system tools and services at <a href="https://www.blizzard.com">Blizzard Entertainment</a>.
          </p>
          <div id="details-social">
            <br />
            <p>Check me out on social and run me in the terminal:</p>
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
            <code id="intro-npx" title="run me in the terminal (with node installed)">
              <span>></span>
              &nbsp;
              <span>npx taylorsturtz</span><span class="cursor-blink">_</span>
              &nbsp;&nbsp;&nbsp;
              <CopyToClipboard text="npx taylorsturtz" />
            </code>
          </div>
        </div>
      </div>
    </div>
    <div id="mobile-banner">
      <a href="/resume" target="_blank" rel="noreferrer" class="button-styles">Résumé</a>
    </div>
    <a id="backstory-link" href="#backstory">
      <svg id="chevrons-down" transition:fade xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-down"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>
    </a>
  </div>

  <div id="backstory-container" class="section-container">
    <div id="backstory" />
    <img id="backstory-top-waves" src={WavesStacked_GY} alt="waves stack green to yellow">
    <div id="backstory-content" class="centered-content">
      <div class="content-title">
        <p class="section-number">01.</p>
        <h2 class="section-title">Backstory</h2>
        <h3 class="section-subtitle">A Bit About Me</h3>
      </div>
      <!-- <span style="color: #2c4170;"><Columbus /></span> -->
      <span style="color: #b65800"><Irvine /></span>
      <!-- <span style="color: #a53030;"><Canada /></span>
      <span style="color: #444f5f;"><Caribbean /></span>
      <span style="color: #594129;"><Nyc /></span> -->
      <div id="backstory-text">
        <p>Hello! I'm a senior software engineer living in Irvine, CA.</p>
        <!-- <span style="color: #6e1717;"><Europe /></span>
        <span style="color: #244e2b;"><Mexico /></span> -->
        <p>Early on I found myself drawn to tech; always designing and programming websites, game mods, bots, graphing calculators, etc. After college I worked as a designer for 5 years before transitioning to engineering. I've now experienced many years working in front-end and full-stack roles and collaborative agile environments across multiple industries. I enjoy what I do, I make work fun, and I empower my teammates to be successful.</p>
        <p>I'm also a big fan of my family, soccer, tea, board games, isometric art, hiking, and plants.</p>
        <!-- <h5 class="section-subheading">Early days</h5>
        <BootOnBall />
        <p>When I was twelve my dad noticed my interest in the web and dropped a stack of HTML books on my desk. He told me to get to it and the rest is history; let me tell you a bit about that history...</p>
        <p>In my teens I learned HTML and built fan sites for bands, movies, and games; I programmed graphing calculators in TI-BASIC; and I designed maps and game modes for one of the first-ever MMO (massively multiplayer online) games: <a href="https://en.wikipedia.org/wiki/SubSpace_(video_game)">Subspace</a>.</p>
        <p>I swerved into the arts in college and ended up with a BA in Art History from <a href="https://www.csulb.edu/">CSU Long Beach</a>. I took a lot of history and philosophy courses, gained a basic proficiency in German language, got into electronic music production, and played <em>a lot</em> of soccer.</p>
        <p>After college I went into graphic/web design which I loved, but it took 5 years to realize I sorely missed programming. I enrolled in some web development courses at <a href="https://orangecoastcollege.edu/">OCC</a> and <a href="https://learningfuze.com/">LFZ</a>, and for about 6 months I dedicated myself to getting <em>pretty good</em> at HTML, CSS, JavaScript, and PHP.</p>
        <h5 class="section-subheading">Here and now</h5>
        <Tea />
        <p>I've now had years of experience working in collaborative agile environments across multiple industries. Along the way I've excelled in front-end web and have grown into back-end development. I enjoy what I do, I make work fun, and I empower my teammates to be successful.</p>
        <p>I'm married with a couple of kids now, still play soccer, drink a lot of tea, enjoy growing plants, and love board games.</p> -->
      </div>
    </div>
  </div>
  <img id="backstory-bottom-waves" src={WavesStacked_YG} alt="waves stack green to yellow">

  <div id="experience-container" class="section-container">
    <div id="expertise" />
    <div id="experience-content" class="centered-content">
      <div class="content-title">
        <p class="section-number" style="right: 0;" title="Expertise">02.</p>
        <h2 class="section-title" style="text-align: right; color: var(--grey);">Expertise</h2>
        <h3 class="section-subtitle" style="text-align: right; color: var(--accent1-dim);">Experience in Tech</h3>
      </div>
      <div id="experience-content-wrapper">
        <div id="work-history">
          <h4 class="section-heading">Work History</h4>
          <p class="section-blurb">Some information about each of the companies I've worked for and my role on the team. See my <a href="/resume" target="_blank" rel="noreferrer">résumé</a> for a concise and printable version.</p>
          <div style="display: flex; width: 100%;">
            <VerticalDivider text="Time" />
            <div style="width: 100%;">

              <div class="accent-box">
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                  <h3 style="color: white;">Blizzard Entertainment</h3>
                  <a href="https://www.blizzard.com" target="__blank">
                    <ExternalLinkIcon --size="16px" />
                  </a>
                </div>
                <div class="experience-role">
                  <p style="font-size: .8rem; color: var(--grey);"><em>Sept 2021 - Present</em></p>
                  <p>Senior Software Engineer</p>
                </div>
                <div class="experience-role">
                  <p style="font-size: .8rem; color: var(--grey);"><em>May 2020 - Sept 2021</em></p>
                  <p>Software Engineer</p>
                </div>
                <hr style="margin: 10px 0;" />
                <details>
                  <summary>
                    <svg class="small details-chevron" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    <p style="margin-left: 5px; font-size: .9rem;">Details...</p>
                  </summary>
                  <div>
                    <p>The work I do on the Blizzard commerce platform powers monetization across ABK game studios and critically impacts hundreds of millions of end users. My team proudly provides tools to manage commerce data and APIs to access that data, which are used by game clients, web shops, and more.</p>
                    <br />
                    <p>Additionally, I contribute to internal design systems, post to the engineering blog, formally mentor junior engineers, and helped build <a href={ZoombotDemo} target="_blank" rel="noreferrer">Zoombot&trade;</a> which got second place in the <em>Battle.net Hackathon, 2022</em>!</p>
                  </div>
                </details>
              </div>

              <br />

              <div class="accent-box">
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                  <h3 style="color: white;">Restaurant365</h3>
                  <a href="https://www.restaurant365.com" target="__blank">
                    <ExternalLinkIcon --size="16px" />
                  </a>
                </div>
                <div class="experience-role">
                  <p style="font-size: .8rem; color: var(--grey);"><em>Oct 2019 - May 2020</em></p>
                  <p>Software Engineer</p>
                </div>
                <hr style="margin: 10px 0;" />
                <details>
                  <summary>
                    <svg class="small details-chevron" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    <p style="margin-left: 5px; font-size: .9rem;">Details...</p>
                  </summary>
                  <div>
                    <p>Restaurant365 provides enterprise management software to over 40,000 restaurants nationwide.</p>
                    <br />
                    <p>Soon after starting at R365 I solved the most complex problems that were plaguing the legacy app front-end and then provided production support as needed to ensure product stability. I was also tasked with developing new functionality in their modern stack. In my short time at R365 I delivered features to enable uploading and processing of documents with optic image recognition, actionable inventory tracking, and employee records/scheduling.</p>
                  </div>
                </details>
              </div>

              <br />

              <div class="accent-box">
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                  <h3 style="color: white;">Ytel</h3>
                  <a href="https://www.ytel.com" target="__blank">
                    <ExternalLinkIcon --size="16px" />
                  </a>
                </div>
                <div class="experience-role">
                  <p style="font-size: .8rem; color: var(--grey);"><em>May 2017 - Sept. 2019</em></p>
                  <p>Software Engineer</p>
                </div>
                <div class="experience-role">
                  <p style="font-size: .8rem; color: var(--grey);"><em>Mar 2017 - May 2017</em></p>
                  <p>Web Developer</p>
                </div>
                <hr style="margin: 10px 0;" />
                <details>
                  <summary>
                    <svg class="small details-chevron" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    <p style="margin-left: 5px; font-size: .9rem;">Details...</p>
                  </summary>
                  <div>
                    <p>Ytel offers a variety of telecommunications software solutions ranging from call center systems, to APIs (think Twilio), to automated SMS campaigns with reactive event handling (decision tree).</p>
                    <br />
                    <p>I started at Ytel as a web developer building marketing sites and internal apps while maintaining their respective DNS and virtual machines. In about three months I was promoted to work on Ytel's suite of software products. I led development on Ytel's modern and legacy applications and then built new tools including real-time <a href={YtelInboxDemo} target="_blank" rel="noreferrer">live messaging inbox system</a> and a complex drag and drop <a href={YtelWorkflowDemo} target="_blank" rel="noreferrer">workflow editor</a>.</p>
                  </div>
                </details>
              </div>

              <br />

              <div class="accent-box">
                <div style="margin-bottom: 10px;">
                  <h3 style="color: white;">Freelance</h3>
                </div>
                <div style="display: flex; justify-content: space-between;">
                  <div class="experience-role">
                    <p style="font-size: .8rem; color: var(--grey);"><em>Dec. 2016 - Feb. 2017</em></p>
                    <p>Ann Ackerman Realtor Website</p>
                  </div>
                  <a href="https://annackerman.com" target="__blank">
                    <ExternalLinkIcon --size="16px" />
                  </a>
                </div>
                <div style="display: flex; justify-content: space-between;">
                  <div class="experience-role">
                    <p style="font-size: .8rem; color: var(--grey);"><em>Dec. 2016 - Feb. 2017</em></p>
                    <p>Love Formula Game Website /</p>
                    <p>Gwin Games Logo and Print Materials</p>
                  </div>
                  <a href="http://loveformulagame.com" target="__blank">
                    <ExternalLinkIcon --size="16px" />
                  </a>
                </div>
              </div>

              <br />

              <div class="accent-box">
                <div style="margin-bottom: 10px;">
                  <h3 style="color: white;">Mixed Media Group</h3>
                </div>
                <div class="experience-role">
                  <p style="font-size: .8rem; color: var(--grey);"><em>July 2013 - Oct. 2016</em></p>
                  <p>Design Lead</p>
                </div>
                <div class="experience-role">
                  <p style="font-size: .8rem; color: var(--grey);"><em>June 2011 - July 2013</em></p>
                  <p>Designer</p>
                </div>
                <hr style="margin: 10px 0;" />
                <details>
                  <summary>
                    <svg class="small details-chevron" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    <p style="margin-left: 5px; font-size: .9rem;">Details...</p>
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

        <div id="skill-set">
          <h4 class="section-heading">Skill Set</h4>
          <p class="section-blurb">Here's a bunch of technology I have a little or a ton of experience with. I am constantly learning and growing.</p>
          <div style="display: flex;">
            <VerticalDivider text="Stack" />
            <table style="white-space: nowrap;">
              <tr style="font-size: .9rem;">
                <th>Domain</th>
                <th>Technology</th>
              </tr>
              <tr>
                <td colspan="3">
                  <hr style="margin-bottom: 5px;" />
                </td>
              </tr>
              <tr>
                <td rowspan="3" style="font-size: .9rem;">Design</td>
                <td style="color: white; display: flex; align-items: center;"><PhotoshopIcon --size="16px" />&nbsp;Adobe CC</td>
              </tr>
              <tr>
                <td style="color: white; display: flex; align-items: center;"><BalsamiqIcon --size="16px" />&nbsp;Balsamiq</td>
              </tr>
              <tr>
                <td style="color: white; display: flex; align-items: center;"><FigmaIcon --size="16px" />&nbsp;Figma</td>
              </tr>
              <TableRowDashedDivider />
              <tr>
                <td rowspan="14" style="font-size: .9rem;">Client</td>
                <td style="color: white; display: flex; align-items: center;"><AngularIcon --size="16px" />&nbsp;AngularJS</td>
              </tr>
              <tr>
                <td style="color: white; display: flex; align-items: center;"><AngularIcon --size="16px" />&nbsp;Angular</td>
              </tr>
              <tr>
                <td style="color: white; display: flex; align-items: center;"><CssIcon --size="16px" />&nbsp;CSS</td>
              </tr>
              <tr>
                <td style="color: white; display: flex; align-items: center;"><HtmlIcon --size="16px" />&nbsp;HTML</td>
              </tr>
              <tr>
                <td style="color: white; display: flex; align-items: center;"><JavaScriptIcon --size="16px" />&nbsp;JavaScript</td>
              </tr>
              <tr>
                <td style="color: white; display: flex; align-items: center;"><JqueryIcon --size="16px" />&nbsp;jQuery</td>
              </tr>
              <tr>
                <td style="color: white; display: flex; align-items: center;"><ReactIcon --size="16px" />&nbsp;React</td>
              </tr>
              <tr>
                <td style="color: white; display: flex; align-items: center;"><ReactIcon --size="16px" />&nbsp;React Native</td>
              </tr>
              <tr>
                <td style="color: white; display: flex; align-items: center;"><SassIcon --size="16px" />&nbsp;Sass</td>
              </tr>
              <tr>
                <td style="color: white; display: flex; align-items: center;"><StorybookIcon --size="16px" />&nbsp;Storybook</td>
              </tr>
              <tr>
                <td style="color: white; display: flex; align-items: center;"><SvelteIcon --size="16px" />&nbsp;Svelte</td>
              </tr>
              <tr>
                <td style="color: white; display: flex; align-items: center;"><TailwindIcon --size="16px" />&nbsp;Tailwind</td>
              </tr>
              <tr>
                <td style="color: white; display: flex; align-items: center;"><TypeScriptIcon --size="16px" />&nbsp;TypeScript</td>
              </tr>
              <tr>
                <td style="color: white; display: flex; align-items: center;"><VueIcon --size="16px" />&nbsp;Vue</td>
              </tr>
              <TableRowDashedDivider />
              <tr>
                <td rowspan="9" style="font-size: .9rem;">Server</td>
                <td style="color: white; display: flex; align-items: center;"><ArduinoIcon --size="16px" />&nbsp;Arduino (C++)</td>
              </tr>
              <tr>
                <td style="color: white; display: flex; align-items: center;"><ExpressIcon --size="16px" />&nbsp;Express</td>
              </tr>
              <tr>
                <td style="color: white; display: flex; align-items: center;"><GoIcon --size="16px" />&nbsp;Go</td>
              </tr>
              <tr>
                <td style="color: white; display: flex; align-items: center;"><JavaIcon --size="16px" />&nbsp;Java</td>
              </tr>
              <tr>
                <td style="color: white; display: flex; align-items: center;"><LaravelIcon --size="16px" />&nbsp;Laravel</td>
              </tr>
              <tr>
                <td style="color: white; display: flex; align-items: center;"><NextIcon --size="16px" />&nbsp;Next</td>
              </tr>
              <tr>
                <td style="color: white; display: flex; align-items: center;"><NodeIcon --size="16px" />&nbsp;Node</td>
              </tr>
              <tr>
                <td style="color: white; display: flex; align-items: center;"><PhpIcon --size="16px" />&nbsp;PHP</td>
              </tr>
              <tr>
                <td style="color: white; display: flex; align-items: center;"><SpringIcon --size="16px" />&nbsp;Spring</td>
              </tr>
              <TableRowDashedDivider />
              <tr>
                <td rowspan="3" style="font-size: .9rem;">Testing</td>
                <td style="color: white; display: flex; align-items: center;"><PlaywrightIcon --size="16px" />&nbsp;Playwright</td>
              </tr>
              <tr>
                <td style="color: white; display: flex; align-items: center;"><PostmanIcon --size="16px" />&nbsp;Postman</td>
              </tr>
              <tr>
                <td style="color: white; display: flex; align-items: center;"><SeleniumIcon --size="16px" />&nbsp;Selenium</td>
              </tr>
              <TableRowDashedDivider />
              <tr>
                <td rowspan="4" style="font-size: .9rem;">Database</td>
                <td style="color: white; display: flex; align-items: center;"><FirebaseIcon --size="16px" />&nbsp;Firebase</td>
              </tr>
              <tr>
                <td style="color: white; display: flex; align-items: center;"><MongoIcon --size="16px" />&nbsp;MongoDB</td>
              </tr>
              <tr>
                <td style="color: white; display: flex; align-items: center;"><MySqlIcon --size="16px" />&nbsp;MySQL</td>
              </tr>
              <tr>
                <td style="color: white; display: flex; align-items: center;"><OracleIcon --size="16px" />&nbsp;Oracle</td>
              </tr>
              <TableRowDashedDivider />
              <tr>
                <td rowspan="8" style="font-size: .9rem;">Infra.</td>
                <td style="color: white; display: flex; align-items: center;"><AwsIcon --size="16px" />&nbsp;AWS</td>
              </tr>
              <!-- <tr>
                <td style="color: white; display: flex; align-items: center;"><AzureIcon --size="16px" />&nbsp;Azure</td>
              </tr> -->
              <tr>
                <td style="color: white; display: flex; align-items: center;"><DockerIcon --size="16px" />&nbsp;Docker</td>
              </tr>
              <tr>
                <td style="color: white; display: flex; align-items: center;"><GitIcon --size="16px" />&nbsp;Git</td>
              </tr>
              <!-- <tr>
                <td style="color: white; display: flex; align-items: center;"><GcpIcon --size="16px" />&nbsp;Google Cloud</td>
              </tr> -->
              <tr>
                <td style="color: white; display: flex; align-items: center;"><JenkinsIcon --size="16px" />&nbsp;Jenkins</td>
              </tr>
              <tr>
                <td style="color: white; display: flex; align-items: center;"><NginxIcon --size="16px" />&nbsp;NGINX</td>
              </tr>
              <tr>
                <td style="color: white; display: flex; align-items: center;"><BashIcon --size="16px" />&nbsp;Shell scripting</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <img id="experience-bottom-wave" src={Wave3} alt="aesthetic wave background" />

  <div id="bottom-section" class="section-container">
    <div id="bottom-section-bg" />
    <div id="bottom-section-grain" />

    <Showcase />

    <div id="contact-container" class="section-container">
      <img id="contact-top-wave" src={Wave4} alt="aesthetic wave background" />
      <div id="contact" />
      <div id="contact-content" class="centered-content">
        <div class="content-title">
          <p class="section-number" style="right: 0;">04.</p>
          <h2 class="section-title" style="text-align: right;">Contact</h2>
          <h3 class="section-subtitle" style="text-align: right;">Send Me a Note</h3>
        </div>
        <div id="contact-text">
          <div id="contact-plane-wrapper">
            <PaperPlane />
          </div>
          <div style="text-align: right;">
            <p style="margin-bottom: 30px; text-decoration: none;">
              I'm currently unavailable for hire, but I'm always open to hear about new ideas from fellow human beings. So if you're good at picking out crosswalks, traffic lights, and bridges in a line-up, I'd love to hear from you! Drop me an email via the button below.
            </p>
            <a href="mailto:&#x74;&#x61;&#x79;&#x6c;&#x6f;&#x72;&#x73;&#x74;&#x75;&#x72;&#x74;&#x7a;&commat;&#x67;&#x6d;&#x61;&#x69;&#x6c;&period;&#x63;&#x6f;&#x6d;?subject=Hi Taylor 👋" target="_blank" rel="noreferrer" class="button-styles dark-button-styles">Nothing to see here, bots</a>
          </div>
        </div>
      </div>
      <img id="contact-bottom-wave" src={Wave5} alt="aesthetic wave background" />
    </div>

    <footer>
      <div id="footer-content" class="centered-content">
        <div id="footer-wrapper">
          <div id="footer-pfp" />
          <div id="footer-info">
            <div id="footer-details">
              <p><em>Thanks for stopping by!</em></p>
              <br />
              <p>This site was designed and developed (using Svelte, Sass, and Vite) by me with a bit of inspiration from <a href="https://brittanychiang.com">Brittany Chiang</a>'s beautiful portfolio sites (thank you!).</p>
            </div>
          </div>
        </div>
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