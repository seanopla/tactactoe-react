import React from "react"
import Button from "./Button"

const Timeline = ({ timeline, onTimeline }) => {
  return (
    <>
      <h2>History</h2>
      {timeline.map((_, index) => (
        <Button key={index}>Langkah #{index + 1}</Button>
      ))}
    </>
  )
}

export default Timeline
