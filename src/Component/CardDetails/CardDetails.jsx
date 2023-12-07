import React from 'react';
import swal from 'sweetalert';
// import { Link, json } from 'react-router-dom';

// this is similer to add cart page

const CardDetails = ({ card }) => {


    const { id, Picture, Title, Category, Category_bg, Card_bg, Text_button_bg, Description, Price } = card || {}


    const handleDonate = () => {

        const addedDonateArray = [];

        const donateItem = JSON.parse(localStorage.getItem('donate'));

        if (!donateItem) {
            addedDonateArray.push(card)
            localStorage.setItem('donate', JSON.stringify(addedDonateArray))
            swal("Good job!", "You'r Donation Is Success!", "success");
        } else {


            const isExits = donateItem.find(card => card.id === id)

            if (!isExits) {
                addedDonateArray.push(...donateItem, card)
                localStorage.setItem('donate', JSON.stringify(addedDonateArray))
                swal("Good job!", "You'r Donation Is Success!", "success");
            } else {
                swal("Error", "Already Donated", "error");
            }


        }


    }
    return (
        <div>
            <div className='relative'>
                <img src={Picture} alt="" className='w-4/5 mx-[10%] h-[400px] rounded-md' />
                <div className='w-4/5 mx-[10%] h-[120px] absolute bottom-0 bg-black opacity-50 rounded-b-md'></div>
                <div className='absolute bottom-11 left-36'>
                    <button onClick={handleDonate} className='btn bg-[#FF444A] text-white'>Donate ${Price}</button>
                </div>

            </div>
            <div className='w-4/5 mx-[10%] mt-3'>
                <p className='text-3xl my-1 font-bold'>{Title}</p>
                <p className='text-base font-normal'>{Description}</p>
            </div>
        </div>
    );
};

export default CardDetails;