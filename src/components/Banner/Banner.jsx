import React from 'react';
import banner from '../../assets/images/image-web-3-desktop.jpg'

const Banner = () => {
    return (
        <div>
            <img src={banner} alt="" />
            <div className="content-area flex flex-col gap-4 lg:flex-row">
                <div className="banner-heading mt-7">
                    <h2 className='text-6xl font-bold '>The Bright Future of Web 3.0?</h2>
                </div>
                <div className="banner-text mt-7">
                    <p className='text-lg text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusantium quam vitae placeat quaerat neque minus possimus soluta ratione eum!</p>
                    <button className='btn btn-primary mt-5'>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;