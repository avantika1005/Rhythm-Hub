import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DisplayHome from './displayhome'
import DisplayAlbum from './displayalbum'

const Display = () => {
  return (
    <div className="w-full m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto">

      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>

    </div>
  )
}

export default Display





