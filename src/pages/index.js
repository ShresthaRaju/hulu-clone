import Categories from '../components/Categories'
import Header from '../components/Header'
import Media from '../components/Media'
import axios from '../lib/axios'
import requests from '../lib/requests'

export default function Home({ data }) {
	return (
		<>
			<Header />
			<Categories />
			<Media data={data} />
		</>
	)
}

export const getServerSideProps = async ({ query: { genre } }) => {
	try {
		const request = await axios.get(requests[genre]?.url || requests.trending.url)
		if (request.status === 200) {
			return { props: { data: request.data.results } }
		}
	} catch (error) {}
}
