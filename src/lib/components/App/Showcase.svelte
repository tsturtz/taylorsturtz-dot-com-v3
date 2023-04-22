<script lang="ts">
  // util
  import Button from "../Button.svelte";
  // app
  import ShowcaseBox from "./ShowcaseBox.svelte";
  // icons
  import AwardIcon from "../Icons/AwardIcon.svelte";
  import CpuIcon from "../Icons/CpuIcon.svelte";
  import GlobeIcon from "../Icons/GlobeIcon.svelte";
  import GridIcon from "../Icons/GridIcon.svelte";
  import MobileIcon from "../Icons/MobileIcon.svelte";
  import MonitorIcon from "../Icons/MonitorIcon.svelte";
  import TerminalIcon from "../Icons/TerminalIcon.svelte";
  import WifiIcon from "../Icons/WifiIcon.svelte";
  // third party
  // svelte
	import type { ComponentProps, ComponentType } from "svelte";

  enum ProjectType {
    BOT = 'bot',
    CLI = 'cli',
    IOT = 'iot',
    MACOS = 'macOS',
    MOBILE = 'mobile',
    WEB = 'web',
  }

  const projectIconMap: Record<ProjectType, ComponentType> = {
    [ProjectType.BOT]: CpuIcon,
    [ProjectType.CLI]: TerminalIcon,
    [ProjectType.IOT]: WifiIcon,
    [ProjectType.MACOS]: MonitorIcon,
    [ProjectType.MOBILE]: MobileIcon,
    [ProjectType.WEB]: GlobeIcon,
  }
  const projectFiendlyNameMap: Record<ProjectType, string> = {
    [ProjectType.BOT]: 'Bots',
    [ProjectType.CLI]: 'CLI',
    [ProjectType.IOT]: 'IOT',
    [ProjectType.MACOS]: 'macOS',
    [ProjectType.MOBILE]: 'Mobile',
    [ProjectType.WEB]: 'Web',
  }
  const awardColorMap: Record<string, string> = {
    gold: '#D4AF37',
    silver: '#A8A9AD',
  }

  type Award = {
    color: keyof typeof awardColorMap;
    title: string;
  };
  type Project = ComponentProps<ShowcaseBox> & {
    type: ProjectType;
    award?: Award;
  };

  // web
  const taylorSturtzDotComV3: Project = {
    type: ProjectType.WEB,
    title: 'taylor-sturtz-dot-com-v3',
    metaImage: 'https://images.unsplash.com/photo-1491147334573-44cbb4602074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    stack: ['SvelteKit', 'Sass', 'SVG'],
    githubLink: 'https://github.com/tsturtz/taylorsturtz-dot-com-v3',
    description: `The <strong>current</strong> iteration of my developer portfolio site. Built as an opportunity to learn Svelte and with a creative desire to revamp the site.`,
  };
  const taylorSturtzDotComV2: Project = {
    type: ProjectType.WEB,
    title: 'taylor-sturtz-dot-com-v2',
    metaImage: '$lib/images/v2-metaImage.png',
    stack: ['React', 'Gatsby'],
    githubLink: 'https://github.com/tsturtz/taylorsturtz-dot-com-v2',
    description: `The <strong>previous</strong> iteration of my developer portfolio site. A Gatsby site with a minimal and goofy aesthetic which was fun but it was time for a new one.`,
  };
  const taylorSturtzDotComV1: Project = {
    type: ProjectType.WEB,
    title: 'taylor-sturtz-dot-com-v1',
    metaImage: 'src/lib/images/demos/taylor-sturtz-dot-com-v1.jpg',
    stack: ['jQuery'],
    githubLink: 'https://github.com/tsturtz/taylorsturtz-dot-com-v1',
    description: `The <strong>first</strong> iteration of my developer portfolio site. A vanilla site with jQuery for all the advantages it provided at the time.`,
  };
  const realValue: Project = {
    type: ProjectType.WEB,
    title: 'realvalue',
    metaImage: 'src/lib/images/demos/realvalue.jpg',
    metaImageAnimated: 'src/lib/images/demos/realvalue.gif',
    stack: ['Angular.js', 'D3.js', 'Firebase'],
    externalLink: 'https://realvalue.taylorsturtz.com',
    githubLink: 'https://github.com/tsturtz/realvalue',
    description: `Won the LearningFuze C11/2016 hackathon and later used as a demo for prospective students. RealValue is a POC map for local data-collection and data-visualization; displays dynamic area data and ratings based on user-selections.`,
    award: { color: 'gold', title: 'LearningFuze Hackathon, 2016 - 1st Place'},
  };
  const meetupMap: Project = {
    type: ProjectType.WEB,
    title: 'meetup_map',
    metaImage: 'src/lib/images/demos/meetupmap.jpg',
    metaImageAnimated: 'src/lib/images/demos/meetupmap.gif',
    externalLink: 'https://meetupmap.taylorsturtz.com',
    githubLink: 'https://github.com/Xevnik/meetup_map',
    stack: ['jQuery', 'PHP'],
    description: `This hackathon project filled a feature gap in Meetup.com's UI at the time by fetching meetups via their API and plotting them on a google map.`,
  };
  const toejamAndEarlJamOut: Project = {
    type: ProjectType.WEB,
    title: 'toejam-and-earl-jam-out',
    metaImage: 'src/lib/images/demos/toejam-and-earl-jam-out.jpg',
    metaImageAnimated: 'src/lib/images/demos/toejam-and-earl-jam-out.gif',
    externalLink: 'https://toejamandearl.taylorsturtz.com',
    githubLink: 'https://github.com/tsturtz/toejam-and-earl-jam-out',
    stack: ['React', 'SVG Sprites'],
    description: `A for-fun recreation of the <em>Toe Jam and Earl™</em> mini-game, <em>Jam Out</em> in the browser.`,
  };
  const todoForYou: Project = {
    type: ProjectType.WEB,
    title: 'todo-for-you',
    metaImage: 'src/lib/images/demos/todoforyou.jpg',
    metaImageAnimated: 'src/lib/images/demos/todoforyou.gif',
    externalLink: 'https://tsturtz.github.io/todo-for-you/',
    githubLink: 'https://github.com/tsturtz/todo-for-you',
    stack: ['Angular.js', 'Firebase'],
    description: `Ah yes, the <em>to-do</em> app. This one is feature-rich and polished though 😉.`,
  };
  // macOS
  const youtTeamSoccerMatches: Project = {
    type: ProjectType.MACOS,
    title: 'your-team-soccer-matches',
    metaImage: 'src/lib/images/demos/your-team-soccer-matches.jpeg',
    externalLink: 'https://xbarapp.com/docs/plugins/Sports/your-team-soccer-matches.10m.js.html',
    githubLink: 'https://github.com/tsturtz/your-team-soccer-matches',
    stack: ['Node.js', 'Shell'],
    description: `A macOS menu bar app plugin for <a href="https://xbarapp.com">xbar</a>. Displays completed, upcoming, and <strong>LIVE</strong> matches as well as overall competition standings for your favorite soccer team.`,
  };
  // iot
  const zoombot: Project = {
    type: ProjectType.IOT,
    title: 'zoombot',
    metaImage: 'src/lib/images/demos/zoombot.jpg',
    metaImageAnimated: '',
    imagesLink: 'http://localhost:5173/src/lib/video/zoombot-short-clip.mp4',
    stack: ['C++ (Arduino)'],
    description: `Zoombot is an IOT conference room bot for allowing remote participants to be more engaged in meetings. Took second place in the <em>Battle.net Hackathon, 2022</em>! My role was programming an arduino microcontroller to poll a server for incoming events, queue them up, and process them.`,
    award: { color: 'silver', title: 'Battle.net Hackathon, 2022 - 2nd Place' },
  };
  // mobile
  const iWantMyBbtv: Project = {
    type: ProjectType.MOBILE,
    title: 'i-want-my-bbtv',
    metaImage: 'src/lib/images/demos/i-want-my-bbtv.jpg',
    metaImageAnimated: 'src/lib/images/demos/i-want-my-bbtv.gif',
    githubLink: 'https://github.com/tsturtz/i-want-my-bbtv',
    stack: ['React Native', 'Node.js', 'MongoDB'],
    description: `A cross-platform mobile app for my wife (and sometimes me) 🙃: randomly choose which of our favorite TV shows or movies to rewatch.`,
  };
  // bots
  const wc2026TixScraper: Project = {
    type: ProjectType.BOT,
    title: 'wc2026-tix-scraper',
    metaImage: 'src/lib/images/demos/wc2026-tix-scraper.jpg',
    githubLink: 'https://github.com/tsturtz/wc2026-tix-scraper',
    stack: ['Node.js', 'Playwright', 'Shell'],
    description: `Checks the world cup 2026 website every hour for changes and vigorously alerts me via slack if tickets have become available.`,
  };
  const soccer6Slackbot: Project = {
    type: ProjectType.BOT,
    title: 'soccer6-slackbot',
    metaImage: 'src/lib/images/demos/soccer6slackbot.png',
    githubLink: 'https://github.com/tsturtz/soccer6-slackbot',
    stack: ['Go', 'GoQuery'],
    description: `An interactive slack bot to retrieve information about Soccer6's game schedules and scores. Periodic scheduled reminders sent to my soccer team's slack channel with up-to-date information.`,
  };
  // cli
  const semanticUiReactCountries: Project = {
    type: ProjectType.CLI,
    title: 'semantic-ui-react-countries',
    metaImage: 'src/lib/images/demos/semantic-ui-react-countries.jpg',
    metaImageAnimated: 'src/lib/images/demos/semantic-ui-react-countries.gif',
    externalLink: 'https://www.npmjs.com/package/semantic-ui-react-countries',
    githubLink: 'https://github.com/tsturtz/semantic-ui-react-countries',
    stack: ['Node.js'],
    description: `A simple open-source community CLI tool for fetching and parsing ISO-3166-1 country data for use in Semantic UI React dropdown components.`,
  };
  const homeDash: Project = {
    type: ProjectType.CLI,
    title: 'home-dash',
    metaImage: 'src/lib/images/demos/home-dash.jpg',
    githubLink: 'https://github.com/tsturtz/my-shell-scripts/tree/master/openhome',
    stack: ['Web/APIs', 'Powershell'],
    description: `Automated custom home display system. Displays family photos, news/stocks, weather, streams/feeds, and useful Google Sheets populated data. Scripts to run it all on windows/chrome (launch, interaction detection, etc.).`,
  };


  const projects: Project[] = [
    taylorSturtzDotComV3,
    taylorSturtzDotComV2,
    taylorSturtzDotComV1,
    zoombot,
    youtTeamSoccerMatches,
    iWantMyBbtv,
    wc2026TixScraper,
    realValue,
    toejamAndEarlJamOut,
    soccer6Slackbot,
    meetupMap,
    semanticUiReactCountries,
    todoForYou,
    homeDash
  ];

  const filterOptions: ProjectType[] = Object.values(ProjectType);

  let selectedProjectType: ProjectType | null = null;

  $: filteredProjects = selectedProjectType ? projects.filter((project) => project.type === selectedProjectType) : projects;

  const filter = (projectType: ProjectType | null) => {
    selectedProjectType = projectType;
  };
</script>

<style lang="scss">
  #showcase-content {
    position: relative;
    top: 130px;
    margin-bottom: 400px;
    color: var(--accent1-dim);
  }
</style>

<div id="showcase-content" class="centered-content" style="z-index: 1;">
  <p class="section-number">03.</p>
  <h2 class="section-title" style="color: var(--grey);">Showcase</h2>
  <h3 class="section-subtitle" style="color: var(--accent1-dim);">Noteworthy Projects</h3>
  <!-- <p style="color: var(--grey);">A curated handful of my personal, open source, and hackathon projects.</p> -->
  <br />

  <div style="display: flex; align-items: center; margin-bottom: 25px; gap: 5px;">
    <Button class="text" selected={selectedProjectType === null} on:click={() => filter(null)}>
      <div style="display: flex; align-items: center;">
        <GridIcon --size="16px" />
        <span style="margin-left: 5px;">All ({projects.length})</span>
      </div>
    </Button>
    <span style="color: var(--grey); margin: 0 5px;">/</span>
    {#each filterOptions as filterOption, idx}
      <Button class="text" selected={selectedProjectType === filterOption} on:click={() => filter(filterOption)}>
        <div style="display: flex; align-items: center;">
          <svelte:component this={projectIconMap[filterOption]} --size="16px" />
          <span style="margin-left: 5px;">{projectFiendlyNameMap[filterOption]} ({projects.filter((project) => project.type === filterOption).length})</span>
        </div>
      </Button>
      {#if idx < filterOptions.length - 1}
        <span style="color: var(--grey); margin: 0 5px;">/</span>
      {/if}
    {/each}
  </div>

  <div style="display: flex; flex-wrap: wrap; gap: 20px;">
    {#each filteredProjects as project}
      <ShowcaseBox
        title={project.title}
        metaImage={project.metaImage}
        metaImageAnimated={project.metaImageAnimated}
        stack={project.stack}
        externalLink={project.externalLink}
        githubLink={project.githubLink}
        imagesLink={project.imagesLink}
        description={project.description}
      >
        <svelte:component slot="badge" this={projectIconMap[project.type]} />
        <svelte:fragment slot="award">
          {#if project.award}
            <span style={`color: ${awardColorMap[project.award.color]};`} title={project.award.title}>
              <AwardIcon --size="20px" />
            </span>
          {/if}
        </svelte:fragment>
      </ShowcaseBox>
    {/each}
  </div>

</div>