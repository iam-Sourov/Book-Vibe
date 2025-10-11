import React from 'react';
import BookImage from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 mb-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={BookImage}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className='px-10'>
                    <h1 className="md:text-5xl text-xl font-bold mb-10 ">Books to freshen up <br /> your bookshelf</h1>
                    <button className="btn bg-[#23BE0A] text-white font-bold mt-10">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;