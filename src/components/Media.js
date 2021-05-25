import Thumbnail from '../components/Thumbnail'

const Media = ({ data }) => {
	return (
		<div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
			{data.map((data) => (
				<Thumbnail key={data.id} data={data} />
			))}
		</div>
	)
}

export default Media
