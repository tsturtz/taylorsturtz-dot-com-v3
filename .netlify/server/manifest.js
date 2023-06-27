export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","font/.DS_Store","font/1942/.DS_Store","font/1942/1942.ttf","font/FiraCode/.DS_Store","font/FiraCode/FiraCode-Bold.ttf","font/FiraCode/FiraCode-Light.ttf","font/FiraCode/FiraCode-Medium.ttf","font/FiraCode/FiraCode-Regular.ttf","font/FiraCode/FiraCode-Retina.ttf","font/FiraCode/FiraCode-SemiBold.ttf","font/Garamond/.DS_Store","font/Garamond/EBGaramond-Bold.ttf","font/Garamond/EBGaramond-BoldItalic.ttf","font/Garamond/EBGaramond-ExtraBold.ttf","font/Garamond/EBGaramond-ExtraBoldItalic.ttf","font/Garamond/EBGaramond-Italic-VariableFont_wght.ttf","font/Garamond/EBGaramond-Italic.ttf","font/Garamond/EBGaramond-Medium.ttf","font/Garamond/EBGaramond-MediumItalic.ttf","font/Garamond/EBGaramond-Regular.ttf","font/Garamond/EBGaramond-SemiBold.ttf","font/Garamond/EBGaramond-SemiBoldItalic.ttf","font/Garamond/EBGaramond-VariableFont_wght.ttf","font/JetBrainsMono/.DS_Store","font/JetBrainsMono/JetBrainsMono-Bold.ttf","font/JetBrainsMono/JetBrainsMono-BoldItalic.ttf","font/JetBrainsMono/JetBrainsMono-ExtraBold.ttf","font/JetBrainsMono/JetBrainsMono-ExtraBoldItalic.ttf","font/JetBrainsMono/JetBrainsMono-ExtraLight.ttf","font/JetBrainsMono/JetBrainsMono-ExtraLightItalic.ttf","font/JetBrainsMono/JetBrainsMono-Italic.ttf","font/JetBrainsMono/JetBrainsMono-Light.ttf","font/JetBrainsMono/JetBrainsMono-LightItalic.ttf","font/JetBrainsMono/JetBrainsMono-Medium.ttf","font/JetBrainsMono/JetBrainsMono-MediumItalic.ttf","font/JetBrainsMono/JetBrainsMono-Regular.ttf","font/JetBrainsMono/JetBrainsMono-SemiBold.ttf","font/JetBrainsMono/JetBrainsMono-SemiBoldItalic.ttf","font/JetBrainsMono/JetBrainsMono-Thin.ttf","font/JetBrainsMono/JetBrainsMono-ThinItalic.ttf","font/JetBrainsMono/JetBrainsMonoNL-Bold.ttf","font/JetBrainsMono/JetBrainsMonoNL-BoldItalic.ttf","font/JetBrainsMono/JetBrainsMonoNL-ExtraBold.ttf","font/JetBrainsMono/JetBrainsMonoNL-ExtraBoldItalic.ttf","font/JetBrainsMono/JetBrainsMonoNL-ExtraLight.ttf","font/JetBrainsMono/JetBrainsMonoNL-ExtraLightItalic.ttf","font/JetBrainsMono/JetBrainsMonoNL-Italic.ttf","font/JetBrainsMono/JetBrainsMonoNL-Light.ttf","font/JetBrainsMono/JetBrainsMonoNL-LightItalic.ttf","font/JetBrainsMono/JetBrainsMonoNL-Medium.ttf","font/JetBrainsMono/JetBrainsMonoNL-MediumItalic.ttf","font/JetBrainsMono/JetBrainsMonoNL-Regular.ttf","font/JetBrainsMono/JetBrainsMonoNL-SemiBold.ttf","font/JetBrainsMono/JetBrainsMonoNL-SemiBoldItalic.ttf","font/JetBrainsMono/JetBrainsMonoNL-Thin.ttf","font/JetBrainsMono/JetBrainsMonoNL-ThinItalic.ttf","font/Moon/.DS_Store","font/Moon/MoonBold.otf","font/Moon/MoonLight.otf","font/PigeonScout/.DS_Store","font/PigeonScout/PigeonScout.ttf","font/TheSeasons/.DS_Store","font/TheSeasons/TheSeasons-reg.otf","grain.png"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".otf":"font/otf"},
	_: {
		entry: {"file":"_app/immutable/start-f5e5fa68.js","imports":["_app/immutable/start-f5e5fa68.js","_app/immutable/chunks/index-fa621b33.js","_app/immutable/chunks/singletons-47d60af8.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
