import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypingAnimation = () => {
    
    return (
        <span className="cd-headline clip is-full-width">
        <span>a </span>

    <TypeAnimation className='cd-words-wrapper'
        sequence={[
            // Same substring at the start will only be typed out once, initially
            'Developer.',
            2000, // wait 1s before replacing "Mice" with "Hamsters"
            'Professional Coder.',
            2000,
            'MERN Stack Developer',
            2000,
        ]}
        
        wrapper="span"
        speed={40}
        repeat={Infinity}
        cursor={false}
        preRenderFirstString={true}
        />
    </span>
    );
};

export default TypingAnimation;
