import {FaHtml5} from 'react-icons/fa'
import {FaUniversalAccess} from 'react-icons/fa6'
import {FaCss3} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io5'
import {FaReact} from 'react-icons/fa'
import {SiNextdotjs} from 'react-icons/si'
import {SiPreact} from 'react-icons/si'
import {FaSass} from 'react-icons/fa'

const TechStack = () => {
	return (
		<section className='techStack'>
			<div>
				<p>
					<a
						href='https://html.com/'
						target='_blank'>
						<FaHtml5 /> HTML
					</a>
				</p>
				<p>
					<a
						href='https://www.w3.org/WAI/fundamentals/accessibility-intro/'
						target='_blank'>
						<FaUniversalAccess /> Accessibility
					</a>
				</p>
			</div>

			<div>
				<p>
					<a
						href='https://www.w3.org/TR/CSS/#css'
						target='_blank'>
						<FaCss3 />
						CSS
					</a>
				</p>
				<p>
					<a
						href='https://sass-lang.com/'
						target='_blank'>
						<FaSass />
						Sass
					</a>
				</p>
				<p>
					<a
						href='https://tailwindcss.com/'
						target='_blank'>
						<SiTailwindcss />
						Tailwindcss
					</a>
				</p>
			</div>
			<div>
				<p>
					<a
						href='https://www.javascript.com/'
						target='_blank'>
						<IoLogoJavascript />
						JavaScript
					</a>
				</p>
				<p>
					<a
						href='https://react.dev/'
						target='_blank'>
						{' '}
						<FaReact />
						React.js
					</a>
				</p>
				<p>
					<a
						href='https://nextjs.org/'
						target='_blank'>
						<SiNextdotjs />
						Next.js
					</a>
				</p>
				<p>
					<a
						href='https://preactjs.com/'
						target='_blank'>
						<SiPreact />
						Preact.js
					</a>
				</p>
			</div>
		</section>
	)
}

export default TechStack
