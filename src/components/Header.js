import Image from 'next/image'
import NavItem from './NavItem'
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from '@heroicons/react/outline'

const Header = () => {
	return (
		<header className='flex flex-col sm:flex-row items-center justify-between m-5 h-auto'>
			<div className='flex flex-grow justify-evenly max-w-2xl'>
				<NavItem Icon={HomeIcon} title='HOME' />
				<NavItem Icon={LightningBoltIcon} title='TRENDING' />
				<NavItem Icon={BadgeCheckIcon} title='VERIFIED' />
				<NavItem Icon={CollectionIcon} title='COLLECTIONS' />
				<NavItem Icon={SearchIcon} title='SEARCH' />
				<NavItem Icon={UserIcon} title='ACCOUNT' />
			</div>
			<Image src='https://links.papareact.com/ua6' height={100} width={200} className='object-contain cursor-pointer' />
		</header>
	)
}

export default Header
