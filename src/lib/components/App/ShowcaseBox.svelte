<script lang="ts">
	// icons
	import GithubIcon from '$lib/components/Icons/GitHubIcon.svelte';
	import ExternalLinkIcon from '$lib/components/Icons/ExternalLinkIcon.svelte';
	import LayersIcon from '$lib/components/Icons/LayersIcon.svelte';
	import ImageIcon from '$lib/components/Icons/ImageIcon.svelte';
	import MaximizeIcon from '$lib/components/Icons/MaximizeIcon.svelte';

	// app
	import Lightbox from '$lib/components/Lightbox.svelte';

	// svelte
	import { onMount } from 'svelte';

	export let title: string;
	export let stack: string[];
	export let metaImage: string;
	// console.log('🚀 ~ metaImage:', metaImage);
	export let metaImageAnimated: string | null = null;
	export let description: string;
	export let externalLink: string | null = null;
	export let imagesLink: string | null = null;
	export let githubLink: string | null = null;

	let maximized: boolean = false;
	let desc: HTMLDivElement;
	let descLines: number;
	let descLinesLimit: number = 8;
	// let descLinesOffset: number;
	let animateMetaImage: boolean = false;

	onMount(() => {
		if (desc) {
			const fontSize = parseFloat(getComputedStyle(desc!).fontSize);
			descLines = Math.ceil(desc!.offsetHeight / fontSize);
			// descLinesOffset = ((descLines - descLinesLimit) * fontSize) - 5; // adjust -5 to clear it
		}
		// console.log(metaImage);
	});

	const handleLightboxToggle = () => {
		if (maximized) {
			maximized = false;
			document.body.style.overflowY = 'auto';
			const nav = document.querySelector('nav#main-nav') as HTMLElement;
			nav.style.zIndex = '2';
		} else {
			maximized = true;
			document.body.style.overflowY = 'hidden';
			const nav = document.querySelector('nav#main-nav') as HTMLElement;
			nav.style.zIndex = '0';
		}
	};
</script>

{#if maximized}
	<Lightbox imagePath={metaImageAnimated || metaImage} {handleLightboxToggle} />
{/if}
<div class="accent-box showcase-box {maximized ? 'maximized' : ''}">
	<div
		class="meta"
		style="background-image: url({animateMetaImage && metaImageAnimated
			? metaImageAnimated
			: metaImage});"
		on:mouseenter={() => {
			animateMetaImage = true;
		}}
		on:mouseleave={() => {
			animateMetaImage = false;
		}}
	>
		<div class="maximize-icon" role="button" on:click={handleLightboxToggle}>
			<MaximizeIcon --size="20px" />
		</div>
		<div class="wrapper">
			<div class="badge">
				<slot name="badge">
					<span style="font-size: 1.5rem;">?</span>
				</slot>
			</div>
			<div style="display: flex; gap: 15px;">
				<div class="links">
					{#if externalLink}
						<a href={externalLink} target="__blank" style="display: flex;">
							<ExternalLinkIcon --size="20px" />
						</a>
					{/if}
					{#if imagesLink}
						<a href={imagesLink} target="__blank" style="display: flex;">
							<ImageIcon --size="20px" />
						</a>
					{/if}
					{#if githubLink}
						<a href={githubLink} target="__blank" style="display: flex;">
							<GithubIcon --size="20px" />
						</a>
					{/if}
				</div>
			</div>
		</div>
	</div>
	<div class="content">
		<div>
			<p class="title">
				<span style="position: relative;">
					<strong>{title}</strong>
					<span class="award">
						<slot name="award" />
					</span>
				</span>
			</p>
			<br />
			<div class="description {descLines > descLinesLimit ? 'overflowing' : ''}">
				<p
					bind:this={desc}
					class={descLines === 9
						? 'by1'
						: descLines === 10
						? 'by2'
						: descLines === 11
						? 'by3'
						: descLines === 12
						? 'by4'
						: ''}
				>
					{@html description}
				</p>
			</div>
			<br />
		</div>
		<div class="stack">
			<LayersIcon --size="14px" />
			<ul class="moving-text">
				{#each stack as tech}
					<li>{tech}</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<style lang="scss">
	:root {
		--meta-height: 90px;
	}
	.showcase-box {
		// height: 300px;
		// width: 318px;
		width: calc(100% / 3 - 13px);
		padding: 0;
		overflow: hidden;
		position: relative;
		transition: 0.8s cubic-bezier(0.42, 0, 0.93, 0.28);
		background-color: black;
		box-shadow: 0px 1px 18px 4px rgba(0, 0, 0, 0.75);
		@include md {
			width: 100%;
		}
		.meta {
			height: var(--meta-height);
			border-radius: 8px 8px 0 0;
			border-bottom: 1px solid var(--accent1-dim);
			background-position: center;
			background-size: cover;
			background-repeat: no-repeat;
			background-color: rgba(0, 0, 0, 0.7);
			background-blend-mode: hue;
			position: relative;
			transition: 0.5s;
			&:hover {
				height: 82%;
				background-color: transparent;
				.badge {
					opacity: 0;
					visibility: hidden;
				}
				.links {
					background: rgba(0, 0, 0, 0.85);
				}
				.maximize-icon {
					opacity: 1;
				}
			}
			.maximize-icon {
				opacity: 0;
				display: flex;
				position: absolute;
				bottom: 20px;
				right: 20px;
				background: rgba(0, 0, 0, 0.85);
				border-radius: 12px;
				padding: 15px;
				color: var(--accent1-bright);
				cursor: pointer;
				transition: 0.5s ease-in-out;
			}
			.wrapper {
				height: var(--meta-height);
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin: 0 20px;
			}
			.badge {
				width: 50px;
				height: 50px;
				background-color: rgba(0, 0, 0, 0.85);
				border: 1px solid var(--accent1-dim);
				display: flex;
				align-items: center;
				justify-content: space-around;
				border-radius: 50%;
				box-sizing: border-box;
				transition: 0.2s ease-in-out;
			}
			.links {
				display: flex;
				align-items: center;
				justify-content: flex-end;
				gap: 15px;
				transition: 0.5s;
				background: transparent;
				border-radius: 12px;
				padding: 15px;
			}
		}
		.content {
			height: 180px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding: 20px;
			transition: 0.5s;
			.title {
				color: white;
				display: flex;
				align-items: center;
			}
			.award {
				position: absolute;
				right: -25px;
				top: -2px;
			}
			.description {
				max-height: 113px;
				overflow: hidden;
				text-overflow: ellipsis;
				position: relative;
				&.overflowing {
					&:hover::after {
						background: transparent;
					}
					&:after {
						content: '';
						width: 100%;
						height: 100%;
						position: absolute;
						left: 0;
						top: 0;
						background: linear-gradient(transparent 70%, rgba(0, 0, 0, 0.9));
						pointer-events: none;
					}
				}
				& > p {
					transition: 0.5s;
					// not the best but works for now.. increase each by 4. refactor later
					&.by1:hover {
						transform: translateY(-9px);
					}
					&.by2:hover {
						transform: translateY(-23px);
					}
					&.by3:hover {
						transform: translateY(-43px);
					}
					&.by4:hover {
						transform: translateY(-57px);
					}
				}
			}
			.stack {
				color: var(--grey);
				display: inline-flex;
				align-items: center;
				gap: 20px;
				font-size: 0.8rem;
				ul {
					list-style-type: none;
					display: inline-flex;
					flex-wrap: wrap;
					gap: 6px 20px;
				}
			}
		}
	}
</style>
