import {
	c as create_ssr_component,
	a as setContext,
	v as validate_component,
	m as missing_component
} from './index.js';
const base = '';
let assets = base;
function set_assets(path) {
	assets = path;
}
let version = '';
let public_env = {};
function set_building(value) {}
function set_private_env(environment) {}
function set_public_env(environment) {
	public_env = environment;
}
function set_version(value) {
	version = value;
}
function afterUpdate() {}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { stores } = $$props;
	let { page } = $$props;
	let { constructors } = $$props;
	let { components = [] } = $$props;
	let { form } = $$props;
	let { data_0 = null } = $$props;
	let { data_1 = null } = $$props;
	{
		setContext('__svelte__', stores);
	}
	afterUpdate(stores.page.notify);
	if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
		$$bindings.stores(stores);
	if ($$props.page === void 0 && $$bindings.page && page !== void 0) $$bindings.page(page);
	if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
		$$bindings.constructors(constructors);
	if ($$props.components === void 0 && $$bindings.components && components !== void 0)
		$$bindings.components(components);
	if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
	if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
		$$bindings.data_0(data_0);
	if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
		$$bindings.data_1(data_1);
	let $$settled;
	let $$rendered;
	do {
		$$settled = true;
		{
			stores.page.set(page);
		}
		$$rendered = `


${
	constructors[1]
		? `${validate_component(constructors[0] || missing_component, 'svelte:component').$$render(
				$$result,
				{ data: data_0, this: components[0] },
				{
					this: ($$value) => {
						components[0] = $$value;
						$$settled = false;
					}
				},
				{
					default: () => {
						return `${validate_component(
							constructors[1] || missing_component,
							'svelte:component'
						).$$render(
							$$result,
							{ data: data_1, form, this: components[1] },
							{
								this: ($$value) => {
									components[1] = $$value;
									$$settled = false;
								}
							},
							{}
						)}`;
					}
				}
		  )}`
		: `${validate_component(constructors[0] || missing_component, 'svelte:component').$$render(
				$$result,
				{ data: data_0, form, this: components[0] },
				{
					this: ($$value) => {
						components[0] = $$value;
						$$settled = false;
					}
				},
				{}
		  )}`
}

${``}`;
	} while (!$$settled);
	return $$rendered;
});
set_version('1682289213154');
const options = {
	csp: {
		mode: 'auto',
		directives: { 'upgrade-insecure-requests': false, 'block-all-mixed-content': false },
		reportOnly: { 'upgrade-insecure-requests': false, 'block-all-mixed-content': false }
	},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	hooks: null,
	// added lazily, via `get_hooks`
	root: Root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets: assets2, nonce, env }) =>
			'\n<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="' +
			assets2 +
			`/favicon.png" />
		<meta name="viewport" content="width=device-width" />
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&family=Kristi&family=Pinyon+Script&display=swap" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css2?family=Kristi&family=Special+Elite&display=swap" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css2?family=Capriola&family=Kristi&family=Special+Elite&display=swap" rel="stylesheet">
		<style>
			:root {
				--grey: #737373;
				--grey-dark: #292b30;
				--dark-blue: #10101a;
				--primary: #04150d;
				--primary-semi-transparent: #04150ddb;
				--primary-blend1: #34472a;
				--primary-blend1-semi-transparent: #34472a78;
				--primary-blend2: #7b7a3e;
				--accent1-bright: #dda95c;
				--accent1-dim: #ddc7a6;
				--accent1-dim-semi-transparent: #ffbc5631;
				--accent1-dark: #744600;
				--accent1-darker: #482b00;
				--accent1-darkest: #231500;
			}
			*   {
				margin:0;
				padding:0;
				font-family: 'FiraCode';
			}
			html {
				background-color: #04150d;
				color: #fff;
				font-family: 'FiraCode', arial;
				font-size: 14px;
				height: 100%;
				scroll-behavior: smooth;
			}
			@media screen and (prefers-reduced-motion: reduce) {
				html {
					scroll-behavior: auto;
				}
			}
			body {
				height: 100%;
				width: 100vw;
				overflow-x: hidden;
			}
			code {
				background-color: #000;
				padding: 10px 15px;
				border: 1px solid var(--grey);
				border-radius: 6px;
				font-size: 1rem;
				font-family: 'JetBrainsMono';
				text-shadow: rgb(255 215 77 / 60%) -1px -1px 6px, rgb(124 127 255 / 60%) 1px 1px 6px;
			}
			hr {
				border: none;
				border-bottom: 1px dashed var(--accent1-dim);
			}
			a {
				text-decoration: underline dotted;
				text-underline-offset: 3px;
				color: var(--accent1-bright);
				font-weight: bold;
				transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
			}
			a:hover {
				text-decoration: underline solid;
			}
			a svg {
				transition: .2s;
			}
			a:hover svg, a:focus svg {
				color: var(--accent1-dim);
				transform: translateY(-3px);
			}
			button {
				font-family: 'FiraCode';
				padding: 12px 25px;
				background-color: transparent;
				color: var(--accent1-bright);
				border: 1px solid var(--accent1-bright);
				border-radius: 5px;
				transition: .3s;
			}
			button:hover {
				background-color: var(--accent1-dim-semi-transparent);
			}
			.button-styles {
				font-family: 'FiraCode';
				padding: 12px 25px;
				background-color: transparent;
				color: var(--accent1-bright);
				border: 1px solid var(--accent1-bright);
				border-radius: 5px;
				transition: .3s;
				text-decoration: none;
			}
			.button-styles:hover {
				background-color: var(--accent1-dim-semi-transparent);
				text-decoration: none;
			}
			.dark-button-styles {
				color: var(--primary);
				border: 2px solid var(--primary);
			}
			.dark-button-styles:hover {
				background-color: var(--primary-blend1-semi-transparent);
			}
			table th {
				text-align: left;
				padding-bottom: 10px;
			}
			table tr th:not(:last-of-type), table tr td:not(:last-of-type) {
				padding-right: 30px;
				line-height: 22px;
			}
			details {
				user-select: none;
			}
			details > summary {
				display: flex;
				align-items: center;
				cursor: pointer;
				list-style: none;
			}
			details > summary::-webkit-details-marker {
				display: none;
			}
			details[open] > summary {
				margin-bottom: 10px;
			}
			details > summary svg.details-chevron {
				position: relative;
				transform: scale(1.2) rotate(-90deg);
				transition: all 0.3s;
			}
			details[open] > summary svg.details-chevron {
				transform: scale(1.2) rotate(0);
			}
			details > summary svg.small.details-chevron {
				transform: scale(0.7) rotate(-90deg);
				margin-bottom: 1px;
			}
			details[open] > summary svg.small.details-chevron {
				transform: scale(0.7) rotate(0);
			}

			/* CUSTOM CLASSES/SELECTORS */
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
				top: -180px;
				font-size: 10rem;
				color: #ffffffdd !important;
			}
			.section-title {
				font-family: 'TheSeasons';
				font-size: 1.2rem;
				letter-spacing: 12px;
				font-style: italic;
				margin-bottom: 10px;
				text-transform: uppercase;
				white-space: nowrap;
				color: var(--accent1-dark);
			}
			.section-subtitle {
				font-family: 'TheSeasons';
				font-size: 5rem;
				margin-bottom: 50px;
				white-space: nowrap;
				color: var(--accent1-darkest);
			}
			.section-heading {
				font-family: 'TheSeasons';
				font-size: 2.2rem;
				margin-bottom: 15px;
				white-space: nowrap;
			}
			.section-subheading {
				font-family: 'TheSeasons';
				font-size: 1.8rem;
				margin-bottom: 15px;
				white-space: nowrap;
			}
			.accent-box {
				padding: 20px;
				border: 1px solid var(--accent1-dim);
				border-radius: 8px;
				background-color: #00000033;
			}

			/* FONTS */
			@font-face {
				font-family: "TheSeasons";
				src: local("TheSeasons"), url("` +
			assets2 +
			'/font/TheSeasons/TheSeasons-reg.otf") format("opentype");\n			}\n			@font-face {\n				font-family: "PigeonScout";\n				src: local("PigeonScout"), url("' +
			assets2 +
			'/font/PigeonScout/PigeonScout.ttf") format("truetype");\n			}\n			@font-face {\n				font-family: "MoonLight";\n				src: local("MoonLight"), url("' +
			assets2 +
			'/font/Moon/MoonLight.otf") format("opentype");\n			}\n			@font-face {\n				font-family: "MoonDark";\n				src: local("MoonDark"), url("' +
			assets2 +
			'/font/Moon/MoonDark.otf") format("opentype");\n			}\n			@font-face {\n				font-family: "1942";\n				src: local("1942"), url("' +
			assets2 +
			'/font/1942/1942.ttf") format("truetype");\n			}\n			@font-face {\n				font-family: "FiraCode";\n				src: local("FiraCode-Regular"), url("' +
			assets2 +
			'/font/FiraCode/FiraCode-Regular.ttf") format("truetype");\n				font-weight: 400;\n				font-style: normal;\n			}\n			@font-face {\n				font-family: "FiraCode";\n				src: local("FiraCode-Bold"), url("' +
			assets2 +
			'/font/FiraCode/FiraCode-Bold.ttf") format("truetype");\n				font-weight: 700;\n				font-style: normal;\n			}\n			@font-face {\n				font-family: "JetBrainsMono";\n				src: local("JetBrainsMono-Regular"), url("' +
			assets2 +
			'/font/JetBrainsMono/JetBrainsMono-Regular.ttf") format("truetype");\n			}\n			@font-face {\n				font-family: "Garamond";\n				src: local("EBGaramond-Italic-VariableFont_wght"), url("' +
			assets2 +
			'/font/Garamond/EBGaramond-Italic.ttf") format("truetype");\n			}\n\n			@media screen and (max-width: 2000px) {\n				.monstera-group {\n					display: none;\n				}\n			}\n		</style>\n		' +
			head +
			'\n	</head>\n	<body data-sveltekit-preload-data="hover">\n		' +
			body +
			'\n	</body>\n</html>\n',
		error: ({ status, message }) =>
			'<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' +
			message +
			`</title>

		<style>
			body {
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid #ccc;
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` +
			status +
			'</span>\n			<div class="message">\n				<h1>' +
			message +
			'</h1>\n			</div>\n		</div>\n	</body>\n</html>\n'
	}
};
function get_hooks() {
	return {};
}
export {
	assets as a,
	base as b,
	set_assets as c,
	set_building as d,
	set_private_env as e,
	get_hooks as g,
	options as o,
	public_env as p,
	set_public_env as s,
	version as v
};
