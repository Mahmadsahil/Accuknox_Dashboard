import React from 'react'
import { useDispatch } from 'react-redux'
import { RemoveWidget } from '../Store/appSlice'

const Widget = ({ CategoryName, widgetsData }) => {
    const { name, description } = widgetsData
    const dispatch = useDispatch()

    const removeWidged = () => {
        console.log(CategoryName, "+", name);
        dispatch(RemoveWidget({ categoryName: CategoryName, widgetName: name }))

    }
    return (
        <div className='h-40 w-72 p-2 bg-white rounded-xl shadow-lg relative shrink-0'>
            <p className='absolute top-0 right-0 p-1 cursor-pointer' onClick={removeWidged}>X</p>
            <header className='px-2 font-semibold text-sm  w-11/12'>{name}</header>
            <p className='p-2 text-sm text-gray-600'>{description}</p>
        </div>
    )
}

export default Widget