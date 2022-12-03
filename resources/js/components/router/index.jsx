import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Home, Infolowker, Pendalumni, Pendnonalumni, Profile } from '../pages'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/pendalumni" element={<Pendalumni />} />
      <Route path="/pendnonalumni" element={<Pendnonalumni />} />
      <Route path="/infolowker" element={<Infolowker />} />
    </Routes>
  )
}

export default Router