import React from 'react';
import retro from '../../assets/images/image-retro-pcs.jpg'
import laptop from '../../assets/images/image-top-laptops.jpg'
import gaming from '../../assets/images/image-gaming-growth.jpg'

const Blogs = () => {
    return (
        <div className='grid lg:grid-cols-3 gap-4 mt-12 md:flex-col-2 flex-col-1'>
              <div className="single-blog flex items-center gap-8 ">
                <div className="img-blog ">
                     <img className='w-42 h-48 lg:w-60 lg:h-48' src={retro} alt="" />
                </div>
                <div className="content">
                    <h2 className='text-3xl text-gray-400 mb-3'>01</h2>
                    <h4 className='text-2xl font-bold mb-3'><a href="#" className='hover:text-[#F15D51]'>Reviving Retro PCs</a> </h4>
                    <p className='text-lg text-gray-500'>What happens when old pcs are get modern updates</p>
                </div>
            </div>
             <div className="single-blog flex aligns-center gap-5">
                <div className="img-blog">
                     <img className='w-42 h-48 lg:w-60 lg:h-48' src={laptop} alt="" />
                </div>
                <div className="content">
                    <h2 className='text-3xl text-gray-400 mb-3'>02</h2>
                    <h4 className='text-2xl font-bold mb-3'><a href="#" className='hover:text-[#F15D51]'>Top 10 Laptop of 2023</a></h4>
                    <p className='text-lg text-gray-500'>Our Best Pics various needs and gadget</p>
                </div>
            </div>
             <div className="single-blog flex aligns-center gap-5">
                <div className="img-blog">
                     <img className='w-42 h-48 lg:w-60 lg:h-48' src={gaming} alt="" />
                </div>
                <div className="content">
                    <h2 className='text-3xl text-gray-400 mb-3'>03</h2>
                    <h4 className='text-2xl font-bold mb-3'><a href="#" className='hover:text-[#F15D51]'>The Growth of Gaming</a></h4>
                    <p className='text-lg text-gray-500'>How the pendamic has sparked fresh opportunaties</p>
                </div>
                </div>
        </div>
    );
};

export default Blogs;