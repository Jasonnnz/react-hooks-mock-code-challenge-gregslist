import React, { useState } from "react";

function ListingCard({listing, onDel}) {
  const [ favorite, setFavorite ] = useState(false)

  function handleDelete(){
    fetch(`http://localhost:6001/listings/${listing.id}`,{
      method: 'DELETE'
    })
    onDel(listing)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={()=>setFavorite(!favorite)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={()=>setFavorite(!favorite)} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
