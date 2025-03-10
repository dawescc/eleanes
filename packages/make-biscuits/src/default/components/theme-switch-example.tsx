"use client";

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

	const iconClasses = "inline size-[1em]";

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	function themeIcon(theme: any) {
		switch (theme) {
			case "light":
				return <BsFillSunFill className={iconClasses} />;
			case "dark":
				return <BsFillMoonStarsFill className={iconClasses} />;
			case "system":
			default:
				return <HiComputerDesktop className={iconClasses} />;
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
