import React from 'react'

export default function age() {
  return (
<div className="flex justify-center items-center mt-6">
  <div className="w-full max-w-md">
    <label className="block mb-2 text-lg font-medium text-white">Select Your Age</label>
    <select
      defaultValue=""
      className="w-full px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
    >
      <option value="" disabled>
        Select Age
      </option>
      <option value="13-17">13–17</option>
      <option value="18-24">18–24</option>
      <option value="25-40">25–40</option>
      <option value="40+">40+</option>
    </select>
  </div>
</div>

  )
}
