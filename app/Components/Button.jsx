import React from 'react'

function Button(props) {
  return (
    <div>
          <button type="button" className="text-gray-100  focus:outline-none border border-gray-400 focus:ring-gray-300 font-bold text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 rounded-full bg-[#E1574B] text-[14px] hover:bg-transparent ">
           {props.BtnName}
          </button>     
    </div>
  )
}

export default Button