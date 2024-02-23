"use client";

import Image from "next/image";
import Banner from "../../public/movies-hero-banner.jpg";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function SearchBar() {
	const route = useRouter();
	const query = useSearchParams();
	const [search, setSearch] = useState(query.get("query"));

	return (
		<section className="pb-16">
			<div className="relative h-[200px] before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-slate-900/80 before:backdrop-blur-sm">
				<Image
					src={Banner}
					alt="Banner Images"
					className="h-full object-cover"
					priority
				/>
				<div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center">
					<Link href={"/"}>
						<h1 className="text-2xl font-bold text-slate-50 lg:text-4xl">
							Next Movies Database
						</h1>
					</Link>
				</div>
			</div>
			<div className="relative bg-slate-900">
				<input
					type="search"
					className="absolute -bottom-6 left-1/2 z-10 h-[60px] w-[400px] -translate-x-1/2 border border-slate-200 px-5 text-center shadow-lg lg:w-[600px]"
					placeholder="Find my movie!"
					value={search}
					onKeyDown={(e) => {
						if (e.target.value.length == 0) {
							return;
						}
						if (e.key == "Enter") {
							// route.replace(`http://localhost:3000/?query=${e.target.value}`);
							// route.push(`?query=${e.target.value}`);
							//
							//for vercel
							route.replace(
								`https://next-movies-iota-opal.vercel.app/?query=${e.target.value}`,
							);
						}
					}}
					onChange={(e) => {
						setSearch(e.target.value);
						if (e.target.value.length == 0) {
							route.push("/");
						}
					}}
				/>
			</div>
		</section>
	);
}
