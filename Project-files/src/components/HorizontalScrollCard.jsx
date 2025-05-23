import React, { useRef } from "react"
import { Card } from "./Card"
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6"

export const HorizontalScrollCard = ({
  data = [],
  heading,
  trending,
  media_type,
}) => {
  const containerRef = useRef()

  const handleNext = () => {
    containerRef.current.scrollLeft += 300
  }
  const handlePrevious = () => {
    containerRef.current.scrollLeft -= 300
  }
  return (
    <div className="container mx-auto px-3 my-10">
      <h2 className="text-xl lg:text-2xl font-bold mb-2 text-white">
        {heading}
      </h2>
      <div className="relative">
        <div
          ref={containerRef}
          className="grid transition-all grid-cols-[repeat(auto-fit,minmax(230px,1fr))] relative z-10 gap-6 grid-flow-col overflow-hidden overflow-x-scroll scroll-bar"
        >
          {data &&
            data.map((data, index) => {
              return (
                <Card
                  key={data.id + "heading" + index}
                  data={data}
                  index={index}
                  trending={trending}
                  media_type={media_type}
                />
              )
            })}
        </div>
        <div className="absolute top-0 hidden lg:flex justify-between w-full items-center h-full">
          <button
            onClick={handlePrevious}
            className="bg-white p-1 text-black rounded-full cursor-pointer -ml-2 z-10"
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={handleNext}
            className="bg-white p-1 text-black rounded-full cursor-pointer -mr-2 z-10"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  )
}
