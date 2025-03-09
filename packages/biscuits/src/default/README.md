# @eleanes/biscuits

A centralized design system for Next.js projects with Tailwind CSS v4. This package provides consistent tokens, utilities, and templates to streamline development across multiple projects.

## Features

-   🎨 **CSS Tokens** - Centralized color variables and design tokens using WorkOS's Radix color system.
-   🧩 **Tailwind Integration** - Seamless integration with Tailwind CSS v4
-   🔧 **Utility Functions** - Common utilities like `cn()` for class merging

## Installation

```bash
pnpm i @eleanes/biscuits
```
and then:

```bash
npx biscuits-init
```

### Usage

## CSS Tokens and Styles

The package automatically sets up your `theme.css` with the proper imports.

```css
/* @/app/globals.css */

@import "tailwindcss";
@import "./theme.css";
```

### Dark Mode

Dark mode is inclued by default. The package finds your `<body>` in `app/layout.tsx` and wraps the contents in  <Theme> provider. This works with the tokens to provide a high quality, easy to use, design in both light and dark modes.

```tsx

<body>
	<Theme>
		<main>
			{children}
		</main>
	</Theme>
</body>
```

## Utility Functions

The package creates a customizable ⁠lib/utils.ts file:

```ts
import { cn } from "@/lib/utils";
```

Use cn() to combine Tailwind classes conditionally

```ts
const className = cn("base-style", isActive && "active-style", variant === "primary" ? "primary-style" : "secondary-style");
```

## Site Configuration

The package creates a customizable ⁠lib/site.ts file:

```ts
export const siteConfig = {
	name: "Your Site Name",
	description: "Your site description goes here",
	url: "https://yoursite.com",
	ogImage: "https://yoursite.com/og.jpg",
	links: {
		twitter: "https://twitter.com/yourusername",
		github: "https://github.com/yourusername",
	},
};
```

## Font Configuration

The package creates a customizable ⁠lib/fonts.ts file:

```ts
import { Geist_Mono } from "next/font/google";

export const fontMono = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
});
```

Apply the fonts in your layout.

```tsx
import { fontSans, fontHeading, fontMono } from "@/lib/fonts";

export default function RootLayout({ children }) {
	return (
		<html
			lang='en'
			className={`${fontSans.variable} ${fontHeading.variable} ${fontMono.variable}`}>
			<body>{children}</body>
		</html>
	);
}
```
