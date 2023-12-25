import Card from "@/components/Card";
import { getNowPlaying, getSearchData } from "@/utility/fetcher";
import Content from "@/components/Content";

export const metadata = {
	title: "Home | Next Movies Datababse",
};

export default async function Home({ searchParams }) {
	const { query } = searchParams;

	if (query) {
		const searchMovie = await getSearchData(query);
		return (
			<main>
				<Content
					dataPassing={searchMovie}
					type={"search"}
					query={query}
					total_pages={searchMovie.total_pages}
				/>
			</main>
		);
	} else {
		const nowPlaying = await getNowPlaying();
		return (
			<main>
				<Content
					dataPassing={nowPlaying}
					total_pages={nowPlaying.total_pages}
				/>
			</main>
		);
	}
}
