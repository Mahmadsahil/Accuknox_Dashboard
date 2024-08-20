import React from 'react'
import Widget from './Widget'
import { useDispatch } from 'react-redux';
import { OpenFormDisplay } from '../Store/appSlice';

const Category = ({ itemData }) => {

    const { name, widgets } = itemData;
    const dispatch = useDispatch()

    const createWidget = () => {
        console.log("OpenFormDisplay");
        dispatch(OpenFormDisplay(name));
    }

    return (
        <div className='flex flex-col w-11/12 relative border-gray-600 '>
            <div>
                <header className='p-2 font-semibold'>{name}</header>
            </div>
            <div className='flex items-center gap-4 overflow-x-scroll'>
                {
                    widgets.map((item, idx) => (
                        <Widget key={item.id + idx} CategoryName={name} widgetsData={item} />
                    ))
                }
                <div className='flex justify-center items-center h-40 w-72 p-2 bg-white rounded-xl shadow-lg '>
                    <button className='p-2  border border-gray-300 text-gray-800 rounded-lg text-sm' onClick={createWidget}>add widget</button>
                </div>
            </div>
        </div>
    )
}

export default Category