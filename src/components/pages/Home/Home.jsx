import React from 'react';
import Banner from '../../Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
   
    
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <Books data={data}></Books>
        </div>
    );
};

export default Home;