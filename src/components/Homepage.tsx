"use client"
import React, { useState } from 'react' // Added useState import

const Homepage = () => {
  const [query, setQuery] = useState(''); // Added state for user query

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value); // Update query state
  };

  const handleSubmit = () => {
    // Placeholder for AI response handling
    console.log("User query:", query);
  };

  return (
    <div className='flex flex-col mt-6 items-center h-screen'>
      <h1 className='text-3xl font-bold'>Welcome to SchoolSky</h1>
      <p className='text-sm mt-2'>SchoolSky is a school management system that allows you to manage your school in a better way.</p>
      <div className='flex flex-col mt-4'>
        <h2 className='text-2xl font-semibold mb-4'>Login with:</h2>
        <div className='flex flex-row space-x-4'>
          <button className='bg-lamaPurpleLight text-black font-bold py-2 px-4 rounded hover:bg-yellow-300 transition duration-200'>
            Admin
          </button>
          <button className='bg-lamaSkyLight text-black font-bold py-2 px-4 rounded hover:bg-pink-300 transition duration-200'>
            Teacher
          </button>
          <button className='bg-lamaYellowLight text-black font-bold py-2 px-4 rounded hover:bg-blue-300 transition duration-200'>
            Student
          </button>
        </div>
      </div>
      <div className='mt-6'>
        <input 
          type='text' 
          value={query} 
          onChange={handleInputChange} 
          placeholder='Ask a question...' 
          className='border p-2 rounded'
        />
        <button onClick={handleSubmit} className='bg-blue-500 text-white font-bold py-2 px-4 rounded ml-2'>
          Ask
        </button>
      </div>
    </div>
  )
}

export default Homepage
