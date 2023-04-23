import React from 'react';
import Banner from '../Banner/Banner';
import Sidebar from './../Sidebar/Sidebar';
import Blogs from '../Blogs/Blogs';

const Home = () => {
    return (
        <>
            <div className="flex flex-col gap-8 lg:flex-row">
            <div class="basis-3/4">
                <Banner></Banner>
            </div>

            <div class="basis-1/3">
                <Sidebar></Sidebar>
            </div>
        </div>
         <div className="blog">
              <Blogs></Blogs>
           </div>
        </>
        
    );
};

export default Home;