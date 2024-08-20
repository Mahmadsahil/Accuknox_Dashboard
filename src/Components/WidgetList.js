import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CloseWidgets, SetActiveCategory } from '../Store/appSlice';

const WidgetList = () => {
    // const 
    const { data } = useSelector(state => state.app)
    const dispatch = useDispatch();
    console.log("datadata", data)

    const activeCategory = useSelector(state => state.app.activeCategory);
    const categories = useSelector(state => state.app.data.categories);

    const handleCategoryClick = (categoryName) => {

        dispatch(SetActiveCategory(categoryName));
    };
    const selectedCategory = categories.find(category => category.name === activeCategory);
    if (!selectedCategory) {
        return <div>Please select a category</div>;
    }

    const handleWidget = () => {
        dispatch(CloseWidgets());
    }

    return (
        <div className='flex flex-col absolute right-0 w-10/12 md:w-5/12 h-screen'>
            <header className='  bg-blue-700 h-12 md:h-8 text-center flex justify-between items-center'>
                <p className='text-white'>Widgets</p>
                <p className='text-white cursor-pointer absolute  top-0 right-0 p-2' onClick={handleWidget}>X</p>
            </header>
            <div className='bg-white p-2 h-full w-full'>
                <div className='flex'>
                    {
                        data.categories.map(item => (
                            <p key={item.id} className={` font-semibold cursor-pointer  px-2 ${activeCategory === item.name && `border-b-2 border-blue-600`}`} onClick={() => handleCategoryClick(item.name)}> {item.name}</p>
                        ))
                    }
                </div>
                <ul className='flex flex-col gap-2 px-2 py-2'>
                    {
                        selectedCategory.widgets.map(widget => (
                            <li key={widget.id} className='text-sm '>{widget.name}</li>
                        ))}
                </ul>
            </div>
        </div >
    )
}

export default WidgetList