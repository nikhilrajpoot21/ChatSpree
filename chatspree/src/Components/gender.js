import React from 'react'

export default function gender() {
  return (
<div className="flex justify-center items-center mt-6">
  <div className="w-full max-w-md">
    <label className="block mb-2 text-lg font-medium text-white">Select Your Gender</label>
    <select
      defaultValue=""
      className="w-full px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
    >
      <option value="" disabled>
        Select Gender
      </option>
      <option value="male">♂️ Male</option>
      <option value="female">♀️ Female</option>
    </select>
  </div>
</div>

  )
}
