"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Switch() {
	const { setTheme, resolvedTheme } = useTheme();
	const [isChecked, setIsChecked] = useState(true);

	useEffect(() => {
		setIsChecked(resolvedTheme === "dark");
	}, [resolvedTheme]);

	function onClickHandler() {
		const newChecked = !isChecked;
		setIsChecked(newChecked);

		setTimeout(() => {
			setTheme(newChecked ? "dark" : "light");
		}, 250);
	}

	return (
		<div className="container">
			<label
				htmlFor="switch"
				className="bg-accent w-9.5 h-9.5 rounded-full grid place-items-center cursor-pointer shadow-[0_0_50px_20px_rgba(0,0,0,0.1)] leading-none"
			>
				<input
					type="checkbox"
					className="hidden peer"
					id="switch"
					onChange={onClickHandler}
					checked={isChecked}
				/>
				<div className="col-start-1 row-start-1 transition-transform duration-500 delay-200 text-black peer-checked:rotate-[360deg] peer-checked:scale-0">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						width={24}
						height={24}
					>
						<path
							fillRule="evenodd"
							d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
				<div className="col-start-1 row-start-1 transition-transform duration-500 scale-0 text-black peer-checked:delay-200 peer-checked:scale-100 peer-checked:rotate-[360deg]">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						width={24}
						height={24}
					>
						<path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
					</svg>
				</div>
			</label>
		</div>
	);
}
