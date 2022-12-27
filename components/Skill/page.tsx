import { motion } from 'framer-motion'

type Props = {
	directionLeft?: boolean
}

const Skill = ({ directionLeft }: Props) => {
	return (
		<div className='group relative flex cursor-pointer'>
			<motion.img
				initial={{
					x: directionLeft ? -200 : 200,
					opacity: 0,
				}}
				transition={{ duration: 1 }}
				whileInView={{ opacity: 1, x: 0 }}
				src={'./css.png'}
				className='rounded-full w-24 border border-gray-500 object-cover xl:w-26 xl:h-26 filter group-hover:grayscale transition 
				duration-300 ease-in-out'
			/>
			<div
				className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out 
			group-hover:bg-white h-24 w-24 rounded-full'
			>
				<div className='flex items-center justify-center h-full'>
					<p className='text-3xl font-bold text-black opacity-100 z-0'>100%</p>
				</div>
			</div>
		</div>
	)
}

export default Skill
