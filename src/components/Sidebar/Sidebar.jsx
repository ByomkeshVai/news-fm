import React from 'react';

const Sidebar = () => {
    return (
        <div className=' bg-[#00001A] text-white p-5'>
            <h2 className='text-5xl font-bold text-[#DBAA60]'>New</h2>
            <div className="side-area flex flex-col mt-7">
                <div className="side-details">
                      <h2 className='text-2xl font-bold mb-3'><a href="#" className='hover:text-[#DBAA60]'>Hydrogen and Electric Car</a></h2>
                <p className='text-lg text-[#424357]'>Demo Description Here for Full View Visit the Site</p>
                    <hr className='mt-6 mb-6' />
                    <div className="side-details">
                      <h2 className='text-2xl font-bold mb-3'><a href="#" className='hover:text-[#DBAA60]'>The Downside of AI Atistry</a> </h2>
                <p className='text-lg text-[#424357]'>Demo Description Here for Full View Visit the Site</p>
                        <hr className='mt-6 mb-6' />
                        <div className="side-details">
                      <h2 className='text-2xl font-bold mb-3'><a href="#" className='hover:text-[#DBAA60]'>IS VC Funding Drying Up</a> </h2>
                <p className='text-lg text-[#424357]'>Demo Description Here for Full View Visit the Site</p>
              </div>
            </div>
            </div>
            </div>
            </div>
    );
};

export default Sidebar;