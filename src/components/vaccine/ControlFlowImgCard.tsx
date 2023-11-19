import React from 'react'
import ImgCard from './ImgCard'

interface ControlFlowImgCardProps {
  imgOne: string,
  imgTwo: string
}

export default function ControlFlowImgCard({ imgOne, imgTwo }: ControlFlowImgCardProps) {
  return (
    <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative">
      <ImgCard w="34.375rem" h="27.4044rem" imgName={imgOne} />
      <ImgCard w="34.375rem" h="27.4044rem" imgName={imgTwo} />
    </div>
  )
}
