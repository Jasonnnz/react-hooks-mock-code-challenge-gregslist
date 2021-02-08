import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onDel}) {
  const listingArr = listings.map((listing) => {
    return <ListingCard key={listing.id} listing={listing} onDel={onDel}/>
  })
  return (
    <main>
      <ul className="cards">
        {listingArr}
      </ul>
    </main>
  );
}

export default ListingsContainer;
