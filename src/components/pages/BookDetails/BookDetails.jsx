import React from 'react';
import { Star } from 'lucide-react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../../Routes/addToDb';
const BookDetails = () => {


    const data = useLoaderData();
    const { id } = useParams();

    const singleBook = data.find(book => book.bookId === parseInt(id));


    const { bookName, category, image, publisher, rating, review, totalPages, yearOfPublishing, tags } = singleBook;


    const handkleMarkAsRead = id => {
        // store with id

        // where to add
        addToStoreDB(id)

        // add as an array or collection


        // if the data is already exist then show an alert

        // if the data is not exist then add into the array or collection

    }

    return (
        <div className="card bg-gray-400 shadow-sm p-2 m-4">
            <figure className=' rounded-lg bg-[#e8dddd] p-5'>
                <img className='w-40 bg-cover h-52'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">

                <h2 className="card-title">
                    {
                        tags.map((tag, index) => <div key={index} className="badge bg-[#23BE0A0D] text-[#23BE0A] ">{tag}</div>)
                    }

                </h2>
                <h2 className='truncate text-xl '>Name: {bookName}</h2>
                <div className='space-x-1' >
                    <div className="badge bg-[#23BE0A0D] text-[#23BE0A] ">Pages : {totalPages}</div>
                    <div className="badge bg-[#23BE0A0D] text-[#23BE0A] ">Published Year : {yearOfPublishing}</div>
                </div>
                <div className='space-y-3'>
                    <h2 className='truncate font-bold'>{review}</h2>
                    <p className='text-xl'>By: {publisher}</p>
                    <div className="border-gray-600 border-t-1 border-dashed "></div>
                </div>
                <div className="flex text-lg justify-between">
                    <div>{category}</div>
                    <div className='flex justify-between items-center gap-2'>{rating}<Star size={16} strokeWidth={1.25} /></div>
                </div>
                <button onClick={() => handkleMarkAsRead(id)} className='btn  bg-red-200'>Read</button>
                <button className='btn bg-green-400 '>Add to Wishlist</button>
            </div>
        </div>
    );
};

export default BookDetails;