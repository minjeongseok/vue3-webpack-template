import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './Home';
import Movie from './Movie';
import About from './About';

export default createRouter({
	// Hash, History
	// https://google.com/#/search
	// 현재 프로젝트에서는 Hash 모드로 구성
	history: createWebHashHistory(),

	// pages
	routes: [
		{
			path: '/', // https://google.com/
			component: Home,
		},
		{
			path: '/movie', // https://google.com/movie
			component: Movie,
		},
		{
			path: '/about', // https://google.com/about
			component: About,
		},
	],
});
