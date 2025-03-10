# @eleanes/biscuits

A custom css utility that offers an accessible, extensible, and easy to use design system.

## Features

-   Colors
-   More coming soon!

See [`make-biscuits`](https://www.npmjs.com/package/make-biscuits) for more information on scaffolding an app with the biscuits system by default.

## Get Started

```bash
# Go
pnpm add @eleanes/biscuits

```

Use the css in your theme file.

```css
@import "@eleanes/biscuits/css/";
```

Use the tokens as regular css variable, or as Tailwind V4 classes.
Dark mode is automatically included by using the `@variant` directive on the `:root` variables.

```css
body {
	background-color: var(--gray-1);
	color: var(--gray-12);
}
```

```tsx
<div className="bg-blue-7 text-blue-12">{...}<>
```
