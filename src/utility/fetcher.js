"use server";

const key = process.env.API_KEY;

export const getNowPlaying = async (page = 1) => {
	const data = await fetch(
		`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&page=${page}`,
	);
	return data.json();
};

export const getDetail = async (id) => {
	const data = await fetch(
		`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`,
	);
	return data.json();
};

export const getSearchData = async (query, page = 1) => {
	const data = await fetch(
		`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${key}&page=${page}`,
	);
	return data.json();
};
