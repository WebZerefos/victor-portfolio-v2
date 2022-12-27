import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const ExperienceCard = () => {
	return (
		<article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 bg-[#292929] p-10 snap-center hover:opacity-100  opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
			<motion.img
				initial={{ y: -100, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				src='./tech2.png'
				alt=''
				className='w-32 h-32 rounded-full object-cover object-center'
			/>
			<div className='px-0 md:px-10'>
				<h4 className='text-2xl font-light'>Developer</h4>
				<p className='font-bold text-1xl mt-1'>Apple</p>
				<div className='flex space-x2 my-2'>
					<Image
						src='/javascript.png'
						alt=''
						width={32}
						height={32}
						className=' rounded-full'
					/>
					<Image
						src='/javascript.png'
						alt=''
						width={32}
						height={32}
						className=' rounded-full'
					/>
					<Image
						src='/javascript.png'
						alt=''
						width={32}
						height={32}
						className=' rounded-full'
					/>
				</div>

				<p className=' uppercase py-5 text-gray-300 text-sm '>Started work... - End...</p>

				<ul className='list-disc ml-5 text-sm'>
					<li>Summary points Summary points Summary points</li>
					<li>Summary points Summary points Summary points</li>
					<li>Summary points Summary points Summary points</li>
					<li>Summary points Summary points Summary points</li>
				</ul>
			</div>
		</article>
	)
}

export default ExperienceCard
