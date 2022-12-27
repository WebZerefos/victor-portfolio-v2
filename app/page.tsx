import React from 'react'
import About from '../components/About/page'
import Experiences from '../components/Experiences/page'
import Header from '../components/Header/page'
import Hero from '../components/Hero/page'
import Skills from '../components/Skills/page'

const HomePage = () => {
	return (
		<div>
			<Header />

			<section
				id='hero'
				className='snap-start'
			>
				<Hero />
			</section>

			<section
				id='about'
				className='snap-center'
			>
				<About />
			</section>

			<section
				id='experience'
				className='snap-center'
			>
				<Experiences />
			</section>

			{/* Skills */}

			<section
				id='skills'
				className='snap-start'
			>
				<Skills />
			</section>

			{/* Projects */}

			{/* Contact Me */}
		</div>
	)
}

export default HomePage
