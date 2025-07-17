import React from 'react'

export default function intrest() {
  return (
    <div className="flex justify-center items-center mt-6">
  <div className="w-full max-w-md">
    <label className="block mb-2 text-lg font-medium text-white">Select Your Interest</label>
    <select
      defaultValue=""
      className="w-50 px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
    >
      <option value="" disabled>
        Interest
      </option>
      <option value="cooking">Cooking</option>
      <option value="cycling">Cycling</option>
      <option value="dancing">Dancing</option>
      <option value="drawing">Drawing</option>
      <option value="fishing">Fishing</option>
      <option value="gaming">Gaming</option>
      <option value="gardening">Gardening</option>
      <option value="hiking">Hiking</option>
      <option value="martial-arts">Martial Arts</option>
      <option value="music">Music</option>
      <option value="painting">Painting</option>
      <option value="photography">Photography</option>
      <option value="reading">Reading</option>
      <option value="running">Running</option>
      <option value="singing">Singing</option>
      <option value="swimming">Swimming</option>
      <option value="traveling">Traveling</option>
      <option value="volunteering">Volunteering</option>
      <option value="writing">Writing</option>
      <option value="yoga">Yoga</option>
      <option value="other">Other</option>
    </select>
  </div>
</div>

  )
}
