'use client'

import { motion } from 'framer-motion'

const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
		>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

			<motion.img
				initial={{ x: -200, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				src='/victorzerefos.jpg'
				className='md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover aspect-square object-top md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px] mt-28'
			/>
			<div className='space-y-10 px-0 md:px-10'>
				<h4 className='text-4xl font-semibold'>Here is a little background</h4>
				<p className='text-sm '>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dignissimos aspernatur totam quae officia nobis ut cum architecto
					temporibus sapiente sunt qui explicabo cupiditate repudiandae et, voluptatem animi praesentium mollitia?Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Repellendus dignissimos aspernatur totam quae officia nobis ut cum architecto temporibus sapiente sunt qui
					explicabo cupiditate repudiandae et, voluptatem animi praesentium mollitia?Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Repellendus dignissimos aspernatur totam quae officia nobis ut cum architecto temporibus sapiente sunt qui explicabo cupiditate repudiandae
					et, voluptatem animi praesentium mollitia?
				</p>
			</div>
		</motion.div>
	)
}

export default About
