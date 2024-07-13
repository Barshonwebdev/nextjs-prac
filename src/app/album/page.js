import Image from 'next/image';
import React from 'react';
import codingImage from '@/assets/coding.jpg'
const AlbumPage = () => {
    return (
        <div className='space-y-5'>
            <Image src={'https://img.freepik.com/free-photo/top-view-unrecognizable-hacker-performing-cyberattack-night_1098-18706.jpg?t=st=1720675565~exp=1720679165~hmac=9ab61fc7f9997d7694e249822e55951757feabf37e75fdc3bbf1e27658a6ecb9&w=740'} alt='coding image' width={500} height={500}/> 

            <Image src={codingImage} alt='coding image' width={500} height={500}/>  
        </div>
    );
};

export default AlbumPage;