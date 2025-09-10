import React from 'react'
import TodoCard from './TodoCard'

const UpcomingList = () => {
  return (
    <div>
      <h1 className='text-xl font-semibold my-4'>Upcoming</h1>
      <div className="flex flex-row flex-wrap gap-4 justify-start w-full">
        <TodoCard/>
        <TodoCard/>
        <TodoCard text={"this is text to upcoming card lorem tejas is webdeveloper and now im writing for the fun only "}/>
        <TodoCard/>
        <TodoCard/>
      </div>
    </div>
  )
}

export default UpcomingList
