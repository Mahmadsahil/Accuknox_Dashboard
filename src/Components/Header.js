import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { FilterWidgets, SearchKeyword, ShowWidgets } from '../Store/appSlice'

const Header = () => {

    const searchedValue = useRef(null)
    const dispatch = useDispatch()

    const handleSearch = () => {
        console.log(searchedValue.current.value);
        dispatch(SearchKeyword(searchedValue.current.value))
        dispatch(FilterWidgets())
    }

    const handleWidget = () => {
        dispatch(ShowWidgets());
    }

    return (
        <div className="w-full flex flex-col md:flex-row  justify-between items-center bg-white shadow mb-4">
            <h1 className="py-6 px-8 text-2xl text-slate-800">Dashboard</h1>
            <div>
                <input ref={searchedValue} className='py-1 px-2 rounded border w-72 mx-2 bg-gray-50 outline-none' type='text' placeholder='Search'></input>
                <button className='border border-gray-400 py-1 px-2 rounded' onClick={handleSearch}>Search</button>
            </div>
            <div className='mr-4'>
                <p className='p-1 md:p-2 m-4 md:m-2 font-semibold cursor-pointer border border-gray-600 rounded ' onClick={handleWidget}>Widgets</p>
            </div>
        </div>
    )
}

export default Header