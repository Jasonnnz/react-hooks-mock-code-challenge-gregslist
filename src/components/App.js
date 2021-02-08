import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import ListingForm from './ListingForm';

function App() {
  const [ listings, setListings ] = useState([])
  const [ query, setQuery ] = useState("")
  const [ checked, setChecked ] = useState(false)

  useEffect(()=> {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(listingArr => {
      setListings(listingArr)
    })
  }, [])

  function onDel(listing){
    const newArr = listings.filter((l) => {
      if (l.id !== listing.id){
        return l 
      }
    })
    setListings(newArr)
  }

  const updatedArr =  checked ? listings.filter((l)=>{
    if (l.description.toLowerCase().includes(query.toLowerCase())){
      return l
    }
  }).sort((a,b) => {return a.location.localeCompare(b.location)})
  : listings.filter((l)=>{
    if (l.description.toLowerCase().includes(query.toLowerCase())){
      return l
    }
  })

  function onSubmit(query){
    setQuery(query)
  }

  return (
    <div className="app">
      <Header onSubmit={onSubmit} checked={checked} setChecked={setChecked}/>
      <ListingsContainer listings={updatedArr} onDel={onDel}/>
      <ListingForm setListings={setListings} listings={listings}/>
    </div>
  );
}

export default App;
