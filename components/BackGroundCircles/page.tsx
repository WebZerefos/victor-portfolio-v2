import { motion } from 'framer-motion'

const BackgroundCircles = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ scale: [1, 2, 2, 3, 1], opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 0.8], borderRadius: ['20%', '20%', '50%', '80%', '20%'] }}
			transition={{ duration: 2.5 }}
			className='relative flex justify-center items-center md:mt-44 lg:mt-0'
		>
			<div className=' absolute border border-[#333333] rounded-full h-[100px] w-[100px] mt-52 animate-ping' />
			<div className=' absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52' />
			<div className=' absolute border border-[#333333] rounded-full h-[400px] w-[400px] mt-52' />
			<div className=' absolute border border-[#ffeaa7] rounded-full h-[600px] w-[600px] mt-52 animate-pulse opacity-20 ' />
		</motion.div>
	)
}

export default BackgroundCircles
