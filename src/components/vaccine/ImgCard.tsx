/* eslint-disable */

import React from 'react'

interface ImgCardProps {
    imgName: string,
    w?: string,
    h?: string
}

export default function ImgCard({ imgName, w, h }: ImgCardProps) {
    return (
        <img
            src={`/works/vaccine/${imgName}.webp`}
            className={`flex-grow-0 flex-shrink-0`}
            style={{ width: w, height: h }}
        />
    )
}
