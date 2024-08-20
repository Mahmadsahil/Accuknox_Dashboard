import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddWidget, CloseFormDisplay } from '../Store/appSlice';

const WidgetForm = () => {
    const itemName = useRef(null);
    const itemDescription = useRef(null);
    const categoryName = useSelector(state => state.app.formDisplay.CategoryName)
    console.log("categoryData", categoryName);

    const dispatch = useDispatch();

    const closeForm = () => {
        dispatch(CloseFormDisplay())
    }

    const addNewWidget = () => {

        const newWidget = {
            name: itemName.current.value,
            description: itemDescription.current.value,
        }
        dispatch(AddWidget({ categoryName, newWidget }))
        dispatch(CloseFormDisplay())
    }

    return (
        <div className='w-full h-screen  flex justify-center items-center  absolute'>
            <form onSubmit={(e) => e.preventDefault()} className='w-10/12 md:w-4/12 h-56 flex flex-col justify-center items-center p-4 gap-4 bg-white border-2 rounded-lg relative shadow'>
                <p className='absolute top-0 right-0 p-2' onClick={closeForm}>X</p>
                <input required ref={itemName} className='p-1 border w-9/12 md:w-7/12 rounded-sm text-sm' type='text' placeholder='Widget Name'></input>
                <textarea required ref={itemDescription} className='p-1 border w-9/12 md:w-7/12 rounded-sm text-sm' type='text' placeholder='Description' />
                <button className='px-2 bg-blue-300 rounded text-sm' onClick={addNewWidget}>Create</button>
            </form>
        </div>
    )
}

export default WidgetForm