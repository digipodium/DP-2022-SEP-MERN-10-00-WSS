import React, { useState } from 'react'

const StateManagement = () => {
  
    // let likes = 100;
    const [likes, setLikes] = useState(34);

    const [shares, setShares] = useState(20);

    const [comments, setComments] = useState(43);

    const addLikes = () => {
        // likes++;
        // console.log(likes);
        setLikes(likes+1);
    }

    const addShares = () => {
        setShares( shares + 1 );
    }

    const addComments = () => {
        setComments(comments+1);
    }
  
    return (
    <div className='container pt-5'>
        <div className="card w-25">
            <div className="card-body">
                <img className='img-fluid' src="https://akns-images.eonline.com/eol_images/Entire_Site/2022615/rs_1200x1200-220715105854-1200-Spongebob.jpg?fit=around%7C700:700&output-quality=90&crop=700:700;center,top" alt="" />
            </div>
            <div className="card-footer d-flex justify-content-between">
                <p style={{cursor : 'pointer'}} className='h5' onClick={addLikes}> <i class="fas fa-heart"></i> {likes} </p>
                <p className='h5' onClick={addComments}> <i class="fas fa-comment"></i> {comments} </p>
                <p className='h5' onClick={addShares}> <i class="fas fa-share"></i> {shares} </p>
            </div>
        </div>
    </div>
  )
}

export default StateManagement