import React from 'react';

const EventHandling = () => {

    const handleClick = () => {
        console.log('from defined function');
    }
    
  return (
    <div className='container'>
        <h1 className='text-center mt-4'>Event Handling</h1>
        <hr />

        <button className='btn btn-primary' 
        onClick={() => { alert('you clicked button') }} >Click Event</button>

        <button className='btn btn-success' onClick={handleClick} >Passing defined function</button>

        <img
        onMouseLeave={() => {console.log('outside image')}}
        onMouseEnter={() => {console.log('inside image'); }} 
        width={500}
        src="https://akns-images.eonline.com/eol_images/Entire_Site/2022615/rs_1200x1200-220715105854-1200-Spongebob.jpg?fit=around%7C700:700&output-quality=90&crop=700:700;center,top" alt="" />



    </div>
  )


}

export default EventHandling;