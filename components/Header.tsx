import React from 'react';

import { SocialIcon } from 'react-social-icons';

type Props = {};

function Header({}: Props) {
	return (
		<header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
			<div className='flex flex-row items-center'>
				<SocialIcon
					className='mx-2'
					target='_blank'
					// fgColor='white'
					// bgColor='gray'
					url='https://www.linkedin.com/in/corey-mccue-80949875/'
				/>
				<SocialIcon
					className='mx-2'
					target='_blank'
					// fgColor='white'
					// bgColor='gray'
					url='https://www.linkedin.com/in/corey-mccue-80949875/'
				/>
				<SocialIcon
					className='mx-2'
					target='_blank'
					// fgColor='white'
					// bgColor='gray'
					url='https://www.linkedin.com/in/corey-mccue-80949875/'
				/>
			</div>
			<div className='flex flex-row items-center'>
				<SocialIcon
					fgColor='gray'
					bgColor='transparent'
					className='cursor-pointer mx-2'
					network='email'
				/>
				<p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
					Get in Touch
				</p>
			</div>
		</header>
	);
}

export default Header;
