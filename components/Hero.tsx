import React from 'react';

import { Cursor, useTypewriter } from 'react-simple-typewriter';

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
		<div>
			<h1>
				<span>{text}</span>
				<Cursor cursorColor='green' />
			</h1>
		</div>
	);
}

export default Hero;
