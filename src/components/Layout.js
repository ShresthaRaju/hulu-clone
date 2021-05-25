import Head from 'next/head'

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Hulu 2.0</title>
				<meta name='description' content='Builiding HULU clone using Next.Js and Tailwind CSS' />
			</Head>
			<main>{children}</main>
		</>
	)
}

export default Layout
