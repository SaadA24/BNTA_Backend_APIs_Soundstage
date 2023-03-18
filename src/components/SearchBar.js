import { useState } from "react";

//
    const SearchBar = ({setSearchInput}) => {

        const [searchQuery, setSearchQuery] = useState("");

        const handleSubmit = (event) => {
            event.preventDefault();
            setSearchInput(searchQuery);
        };

        return ( 
        <div className="searchBar">
        <form onSubmit={handleSubmit}>
            <input  type="text" placeholder="Enter your favourite artist" name="searchQuery" onChange={(event) => {
                setSearchQuery(event.target.value) 
            }} value={searchQuery}/>
            <input type="submit" value="Enter"/>
        </form>
        </div>
        );
    }
 
export default SearchBar;
