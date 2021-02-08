import { useState } from 'react';

function ListingForm({setListings, listings}){
    const [ description, setDescription ] = useState("")
    const [ image, setImage ] = useState("")
    const [ location, setLocation ] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        const newListing = {
            description: description,
            image: image,
            location: location
        }
        fetch('http://localhost:6001/listings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newListing)
        })
        .then(r => r.json())
        .then(newL => {
            setListings([...listings, newL])
        })
        setDescription("")
        setImage("")
        setLocation("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="description"> Description: </label>
                <input onChange={(e) => setDescription(e.target.value)} value={description} name="description" type="text"></input>
                <label htmlFor="image"> Image: </label>
                <input onChange={(e) => setImage(e.target.value)} value={image} name="image" type="text"></input>
                <label htmlFor="location"> Location: </label>
                <input onChange={(e) => setLocation(e.target.value)} value={location} name="location" type="text"></input>
                <input type="submit"/>
            </form>
        </div>
    );
}

export default ListingForm;