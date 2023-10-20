export default {
	// module
	// 하나의 스토어에서 모듈화되어 사용할 수 있다고 명시하는 것
	namespaced: true,
	// 각각의 데이터(data)
	state: () => ({
		movies: [],
	}),
	// computed
	getters: {
		movieIds(state) {
			return state.movies.map((m) => m.imdbID);
		},
	},
	// mutations && actions == methods
	// 변이
	// .commit() 메소드 사용
	mutations: {
		resetMovies(state) {
			state.movies = [];
		},
	},
	// 비동기로 동작
	// .dispatch() 메소드 사용
	actions: {
		searchMovies() {},
	},
};
