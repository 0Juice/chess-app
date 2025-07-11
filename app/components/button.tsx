import Link from "next/link";
import { Button } from "./ui/button";
import { Url } from "next/dist/shared/lib/router/router";

interface buttonWrapperProps {
	href: Url;
	text: string;
	variant: string;
}

export default function ButtonWrapper({
	href,
	text,
	variant,
}: buttonWrapperProps) {
	return (
		<Button
			asChild
			size={"lg"}
			className={
				variant === "Secondary"
					? "bg-secondary/40 dark:bg-secondary/25 text-text-foreground hover:bg-secondary/85 dark:hover:bg-secondary/30"
					: "bg-primary/85 text-background hover:bg-primary border-text"
			}
		>
			<Link href={href}>{text}</Link>
		</Button>
	);
}
