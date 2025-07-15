import Button from "./components/button";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import { ContainerScroll } from "./components/ui/container-scroll-animation";
import Image from "next/image";

export default function Home() {
	return (
		<div className="bg-background min-h-screen">
			<Navbar />
			<main className="flex flex-col justify-center m-8 gap-16 bg-background">
				<Hero />
				<div className="flex flex-col justify-center items-center gap-8 mx-auto">
					<div className="flex gap-4">
						<Button
							href="/play"
							text="Play Now!"
							variant={"Primary"}
						/>
						<Button
							href="https://github.com/0Juice/chess-app"
							text="GitHub Repo"
							variant={"Secondary"}
						/>
					</div>
					<ContainerScroll titleComponent>
						<Image
							src="/chess-board.svg"
							alt="ChessboardImage"
							width={600}
							height={600}
							className="mx-auto rounded-2xl h-full object-left-top"
						/>
					</ContainerScroll>
				</div>
			</main>
		</div>
	);
}
