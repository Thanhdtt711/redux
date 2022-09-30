import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchToDo, todoSearch } from "./toDoSlice";
import { v4 as uuidv4 } from "uuid";


export default function Search({ jobList }) {
    const dispatch = useDispatch();

    const [search, setSearch] = useState("");

    const ListSearch = useSelector(todoSearch);

    const searchChange = (e) => {
        if (e.target.value !== "") {
            setSearch(e.target.value);
        }
    };

    let filteredWorks = jobList.filter(({name}) => {
        return ListSearch.indexOf(name) !== -1;
    }
    );
    console.log(filteredWorks)
    const searchr = (e) => {
        e.preventDefault();

        if (search !== '') {
            dispatch(searchToDo(search));
        }
        setSearch('');

        console.log(ListSearch)
    }
    return (
        <>
            <div style={{ margin: "3% 0" }}>
                <form onSubmit={searchr}>
                    <input placeholder="search..." name="search" value={search} onChange={searchChange} />
                    <button>setSearch</button>
                </form>
            </div>
            {
               filteredWorks.map(({name})=>{
                return (
                    <p style={{background: 'red'}}>{name}</p>
                )
               })
            }
        </>
    );
}
