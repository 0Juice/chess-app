import Link from "next/link"
import Navbar from "../components/navbar"

export default function Play(){
    return (
		<div>
			<Navbar />
			<div className="flex flex-col justify-center items-center gap-2 m-8 text-lg">
				This is a work in progress the Frontend and Backend will be
				implemented and connected fully soon
                <div className=" flex gap-2">
                    You can visit the GitHub Repo for this project in here: 
                    <Link href={"https://github.com/0Juice/chess-app"} className="text-primary">
                        Chesshub Repo
                    </Link>
                </div>
			</div>
		</div>
	);
}