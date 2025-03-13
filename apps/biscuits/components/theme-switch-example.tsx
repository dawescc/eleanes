"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { HiComputerDesktop } from "react-icons/hi2";

export const ThemeDisplay = () => {
	const { theme, setTheme } = useTheme();

	function cycleThemes() {
		if (theme === "system") {
			setTheme("light");
		} else if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("system");
		}
	}

	const iconClasses = "inline";

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	function themeIcon(theme: any) {
		switch (theme) {
			case "light":
				return <BsFillSunFill className={cn(iconClasses)} />;
			case "dark":
				return <BsFillMoonStarsFill className={cn(iconClasses)} />;
			case "system":
			default:
				return <HiComputerDesktop className={cn(iconClasses)} />;
		}
	}

	return (
		<button
			className='cursor-pointer'
			onClick={() => cycleThemes()}>
			Try it! {themeIcon(theme)}
		</button>
	);
};
