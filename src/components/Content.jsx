"use client";

import Card from "./Card";
import { useInView } from "react-intersection-observer";
import { AiOutlineLoading, AiOutlineArrowUp } from "react-icons/ai";
import { useEffect, useState } from "react";
import { getNowPlaying, getSearchData } from "@/utility/fetcher";

let page = 1;

export default function Content({
	dataPassing,
	type = "now",
	query,
	total_pages,
}) {
	const [data, setData] = useState([]);
	const { ref, inView } = useInView();

	const getData = async () => {
		const nextData = await getNowPlaying(page);
		setData([...data, ...nextData.results]);
	};

	const getSearch = async () => {
		const dataSearch = await getSearchData(query, page);
		setData([...data, ...dataSearch.results]);
	};

	useEffect(() => {
		page = 1;
	}, [query]);

	useEffect(() => {
		if (inView) {
			if (type == "search") {
				if (page <= total_pages) {
					page++;
					getSearch();
				}
				return;
			}
			page++;
			getData();
		}
	}, [inView]);

	useEffect(() => {
		setData(dataPassing.results);
	}, [dataPassing]);

	return (
		<section className="relative flex flex-col items-center justify-center gap-5">
			<div
				className="grid grid-cols-2 place-items-center gap-2 px-5 md:grid-cols-3 lg:grid-cols-5 lg:gap-5 lg:px-[100px]"
				id="content"
			>
				{data.map((item) => {
					return <Card src={item} key={item.id} />;
				})}
			</div>
			{page <= total_pages && (
				<div ref={ref}>
					<AiOutlineLoading className="animate-spin text-4xl" />
				</div>
			)}

			<button
				className="group fixed bottom-5 right-6 rounded-full bg-slate-900 p-3 text-xl text-slate-50"
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
			>
				<AiOutlineArrowUp className="animate-pulse group-hover:animate-none" />
			</button>
		</section>
	);
}
