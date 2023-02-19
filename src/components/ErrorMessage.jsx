import React from 'react'

export const ErrorMessage = () => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mt-4 rounded relative" role="alert">
        <strong className="font-bold">Sorry!</strong>
        <span className="block sm:inline">Username not found...</span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        </span>
    </div>
  )
}
