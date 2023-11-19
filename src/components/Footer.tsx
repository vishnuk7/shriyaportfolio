/* eslint-disable */

import React from 'react'

export default function Footer() {
    return (
        <footer className="mx-6 py-3">
            <div className="flex justify-between items-center">
                <p className="text-light-text">Shriya Shukla | Copyright © 2023</p>
                <div className="flex">
                    <div className='flex justify-center items-center rounded-full bg-assets w-9 h-9 opacity-50 mr-3 cursor-pointer'>
                        <a href="mailto:shriyush3004@gmail.com" target='_blank'><img src="/icons/email.svg" /></a>
                    </div>

                    <div className='flex justify-center items-center rounded-full bg-assets w-9 h-9 opacity-50 cursor-pointer'>
                        <a href="https://www.linkedin.com/profile/in/shriya-shukla/" target='_blank'><img src="/icons/linkedin.svg" /></a>
                    </div>
                </div>
            </div>
        </footer >
    )
}
