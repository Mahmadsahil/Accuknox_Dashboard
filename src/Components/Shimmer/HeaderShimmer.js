import React from 'react'

const HeaderShimmer = () => {
    return (
        <div className='w-full p-6 flex justify-between flex-col md:flex-row bg-slate-100'>
            <div className="h-8 w-24 bg-slate-200 animate-pulse"></div>
            <div className="h-8 w-80 bg-slate-200 animate-pulse"></div>
            <div className="h-8 w-24 bg-slate-200 animate-pulse"></div>
        </div>
    )
}

export default HeaderShimmer