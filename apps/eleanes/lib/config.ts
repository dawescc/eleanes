export const siteConfig = {
	name: "Eleanes",
	title: "Eleanes",
	url: process.env.NODE_ENV === "production" ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000",
	ogImage: "/og.png",
	description: "A design and engineering organization.",
	author: {
		name: "Eleanes",
		website: "https://eleanes.com",
	},
	links: [
		{
			name: "github",
			text: "github",
			url: "https://github.com/eleanes",
		},
		{
			name: "website",
			text: "website",
			url: "https://eleanes.com",
		},
	],
	projects: null,
};

export type SiteConfig = typeof siteConfig;
