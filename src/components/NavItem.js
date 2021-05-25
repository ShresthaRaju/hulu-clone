const NavItem = ({ Icon, title }) => {
	return (
		<nav className='group cursor-pointer flex flex-col items-center w-12 sm:w-20 hover:text-white'>
			<Icon className='h-8 mb-1 group-hover:animate-bounce' />
			<p className='tracking-widest opacity-0 group-hover:opacity-100'>{title}</p>
		</nav>
	)
}

export default NavItem
