export const SITE = {
    title: "Bookmarks",
    description: "A collection of personal bookmarks",
    defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: '../public/banner.png',
		alt: 'A symbol of a bookmark'
	},
	twitter: 'harleylara_',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;

export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const SITE_URL = `https://bookmark.harleylara.com`;
