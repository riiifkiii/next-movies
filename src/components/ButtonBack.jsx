"use client";

import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function ButtonBack() {
	const route = useRouter();
	return (
		<button
			onClick={() => route.back()}
			className="group flex w-fit items-center gap-2 text-blue-500"
		>
			<IoArrowBack className="transition-all duration-300 group-hover:-translate-x-2" />{" "}
			Back
		</button>
	);
}
