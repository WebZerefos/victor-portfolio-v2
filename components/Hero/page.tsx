'use client'

import Link from 'next/link'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from '../BackGroundCircles/page'

const Hero = () => {
	const [text, count] = useTypewriter({
		words: ['Olá, sou Victor Zerefos', 'Adoro pizza!', '<MasPrefiroCodar />'],
		loop: true,
		delaySpeed: 2000,
	})

	return (
		<div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
			<BackgroundCircles />
			<img
				src='/victor2.jpg'
				alt=''
				className='relative rounded-full h-32 w-32 items-center justify-center object-cover'
			/>
			<div className='z-20'>
				<h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Full Stack Developer </h2>
				<h1 className='text-3xl font-semibold px-10'>
					<span className='MR-3'>{text}</span>
					<Cursor
						cursorBlinking={true}
						cursorColor='#e74c3c'
					/>
				</h1>

				<div className='pt-5'>
					<Link href='#about'>
						<button className='heroButton'>About</button>
					</Link>
					<Link href='#experience'>
						<button className='heroButton'>Experience</button>
					</Link>
					<Link href='#skills'>
						<button className='heroButton'>Skills</button>
					</Link>
					<Link href='#projects'>
						<button className='heroButton'>Projects</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Hero
