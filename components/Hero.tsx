import React from 'react';
import Image from 'next/image';
import avatar from '../public/corey-avatar.jpeg';

import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {};

function Hero({}: Props) {
	const [text, count] = useTypewriter({
		words: [
			"Hey, I'm Corey McCue",
			'Lover-of-Chess.tsx',
			'<LovesCodingMore />',
		],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
			<BackgroundCircles />
			<Image
				className='relative rounded-full h-12 w-12 object-cover mx-auto'
				src={avatar}
				alt='Picture of the Corey'
				height={175}
				width={175}
			/>
			<div>
				<h2 className='text-sm uppercase'>Sales Engineer / Software Engineer</h2>
				<h1>
					<span>{text}</span>
					<Cursor cursorColor='green' />
				</h1>
			</div>
		</div>
	);
}

export default Hero;
