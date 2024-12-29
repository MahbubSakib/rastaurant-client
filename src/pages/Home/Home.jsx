import React from 'react';
import Banner from './Banner';
import Category from './Category';
import PopularMenu from '../../components/PopularMenu';
import Featured from './Featured/Featured';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;