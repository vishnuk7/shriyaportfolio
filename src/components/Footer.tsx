/* eslint-disable */

import React from 'react'

export default function Footer() {
    return (
        <footer className="px-6 py-3" style={{
            borderTop: "1px solid rgba(0, 85, 154, 0.50)"
        }}>
            <div className="flex justify-between items-center">
                <p className="text-light-text">Shriya Shukla | Copyright © 2023</p>
                <div className='flex justify-center items-center rounded-full bg-[#807DFB] w-9 h-9 opacity-50 cursor-pointer'>
                    <a href="https://www.linkedin.com/profile/in/shriya-shukla/" target='_blank'><img src="/icons/linkedin.svg" /></a>
                </div>
            </div>
        </footer >
    )
}
