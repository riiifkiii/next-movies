import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

export default function Card({ className, src }) {
	const { poster_path, title, id } = src;
	return (
		<Link href={`/${id}`}>
			<Image
				className={twMerge("border border-slate-200 object-cover", className)}
				title={title}
				src={
					poster_path
						? `http://image.tmdb.org/t/p/w500` + poster_path
						: `https://image.dummyjson.com/480x854`
				}
				alt={title}
				width={300}
				height={400}
			/>
		</Link>
	);
}
