import { FlipWords } from "@/app/components/ui/flip-words";

export default function Hero() {
	return (
		<div className="flex flex-col gap-8 mx-auto">
			<div className="text-text text-6xl text-balance">
				Chess. Anytime. Anywhere.
				<br />
				Against
				<FlipWords
					words={["AI", "Friends", "Strangers"]}
					duration={2000}
				/>
			</div>
			<div className="text-text text-xl w-2xl">
				Challenge yourself against a powerful AI, team up with friends
				for a fun match, or dive into the global chess community and
				face off against strangers anytime, anywhere. Your next move is
				just a click away!
			</div>
		</div>
	);
}
