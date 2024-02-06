import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    const [userSearch , setUserSearch] = useState('')
    const [searchParam , setSearchParam] = useState('')
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault()
        setUserSearch('')
        setSearchParam(userSearch)
        const path = `/articles/${userSearch}`;
        navigate(path);

    }

    return (
      <>
        <form onSubmit={handleSearch}>
                <input type="text" id="searchTerm" 
                placeholder="Enter Article-ID"
                value={userSearch}
                onChange={(event)=>{
                    setUserSearch(event.target.value);
                }}/>
                <button>search</button>
            </form>
      </>
    );
  }
  