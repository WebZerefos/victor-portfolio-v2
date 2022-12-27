'use client'

import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

const Header = () => {
	return (
		<header className='sticky p-5 top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
			<motion.div
				initial={{ x: -500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.5 }}
			>
				<div className='flex flex-row items-center'>
					<SocialIcon
						url='https://twitter.com/'
						fgColor='gray'
						bgColor='transparent'
					/>
					<SocialIcon
						url='https://twitter.com/'
						fgColor='gray'
						bgColor='transparent'
					/>
					<SocialIcon
						url='https://twitter.com/'
						fgColor='gray'
						bgColor='transparent'
					/>
				</div>
			</motion.div>
			<motion.div
				initial={{ x: 500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.5 }}
			>
				<div className='glex flex-row items-center text-gray-300 cursor-pointer'>
					<SocialIcon
						className='cursor-pointer'
						network='email'
						fgColor='gray'
						bgColor='transparent'
					/>
					<p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
				</div>
			</motion.div>
		</header>
	)
}

export default Header
