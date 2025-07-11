import Link from "next/link";
import ModeToggle from "./mode-toggle";
import { Crown } from "lucide-react";

export default function Navbar() {
	return (
		<div className="flex justify-between h-fit w-full p-1 items-center border-b-2 rounded-b-md">
            <Link href={"/"}>
                <div className="flex gap-1 text-text text-3xl items-center">
                    <Crown strokeWidth={1.5} className="w-12 h-12 text-primary"/>
                    Chesshub
                </div>
            </Link>
			<div className="flex justify-between">
				<ModeToggle />
			</div>
		</div>
	);
}
