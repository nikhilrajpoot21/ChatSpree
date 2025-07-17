import React from 'react'

export default function region() {
  return (
 <div className="flex justify-center items-center mt-6">
  <div className="w-full max-w-md">
    <label className="block mb-2 text-lg font-medium text-white">Select Your Region</label>
    <select
      defaultValue=""
      className="w-full px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
    >
      <option value="" disabled>
        Region
      </option>
      <option value="argentina">Argentina</option>
      <option value="australia">Australia</option>
      <option value="bahrain">Bahrain</option>
      <option value="brazil">Brazil</option>
      <option value="canada">Canada</option>
      <option value="china">China</option>
      <option value="egypt">Egypt</option>
      <option value="france">France</option>
      <option value="germany">Germany</option>
      <option value="ghana">Ghana</option>
      <option value="hong-kong">Hong Kong</option>
      <option value="india">India</option>
      <option value="indonesia">Indonesia</option>
      <option value="italy">Italy</option>
      <option value="japan">Japan</option>
      <option value="kenya">Kenya</option>
      <option value="kuwait">Kuwait</option>
      <option value="macau">Macau</option>
      <option value="malaysia">Malaysia</option>
      <option value="mexico">Mexico</option>
      <option value="morocco">Morocco</option>
      <option value="netherlands">Netherlands</option>
      <option value="new-zealand">New Zealand</option>
      <option value="nigeria">Nigeria</option>
      <option value="oman">Oman</option>
      <option value="philippines">Philippines</option>
      <option value="qatar">Qatar</option>
      <option value="russia">Russia</option>
      <option value="saudi-arabia">Saudi Arabia</option>
      <option value="singapore">Singapore</option>
      <option value="south-africa">South Africa</option>
      <option value="south-korea">South Korea</option>
      <option value="spain">Spain</option>
      <option value="taiwan">Taiwan</option>
      <option value="thailand">Thailand</option>
      <option value="tunisia">Tunisia</option>
      <option value="uganda">Uganda</option>
      <option value="uae">United Arab Emirates</option>
      <option value="uk">United Kingdom</option>
      <option value="usa">United States</option>
      <option value="vietnam">Vietnam</option>
      <option value="zimbabwe">Zimbabwe</option>
      <option value="other">Other</option>
      <option value="prefer-not-to-say">Prefer not to say</option>
    </select>
  </div>
</div>

  )
}
