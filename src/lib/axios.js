import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
	headers: {
		Authorization: `Bearer ${process.env.TMDB_AUTH_TOKEN}`,
	},
})

export default instance
