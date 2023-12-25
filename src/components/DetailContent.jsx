"use client";

import { AiOutlineLoading } from "react-icons/ai";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getDetail } from "@/utility/fetcher";
import { useParams } from "next/navigation";

export default function DetailContent() {
	const { id } = useParams();
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await getDetail(id);
				setData(data);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};

		getData();
	}, [id]);

	if (isLoading)
		return (
			<div className="flex h-[calc(100vh-300px)] w-full items-center justify-center ">
				<AiOutlineLoading className="animate-spin text-4xl" />
			</div>
		);

	const { poster_path, title, genres, overview } = data;

	return (
		<section className="mx-auto mt-5 flex items-start gap-5 border border-slate-300 p-2 lg:w-[1000px]">
			<div className="w-[20%]">
				<Image
					src={
						poster_path
							? `http://image.tmdb.org/t/p/w500${poster_path}`
							: "https://image.dummyjson.com/480x854"
					}
					alt={title}
					width={360}
					height={640}
				/>
			</div>
			<div className="w-[80%]">
				<div>
					<h1 className="text-xl font-bold lg:text-3xl">{title}</h1>
					<div className="flex items-center gap-2">
						{genres.map((item) => (
							<span key={item.id} className="text-sm text-slate-500">
								{item.name}
							</span>
						))}
					</div>
				</div>
				<div className="mt-5">
					<p>{overview}</p>
				</div>
			</div>
		</section>
	);
}
