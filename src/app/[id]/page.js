import ButtonBack from "@/components/ButtonBack";
import DetailContent from "@/components/DetailContent";
import { getDetail } from "@/utility/fetcher";

export const generateMetadata = async ({ params }) => {
	const data = await getDetail(params.id);

	return {
		title: data.title + ` | Next Movies Database`,
	};
};

export default function Detail() {
	return (
		<main className="px-5 lg:px-[100px]">
			<div>
				<ButtonBack />
			</div>
			<DetailContent />
		</main>
	);
}
