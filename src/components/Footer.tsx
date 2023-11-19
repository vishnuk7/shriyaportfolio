import React from 'react'

export default function Footer() {
    return (
        <footer className="mx-6 py-3">
            <div className="flex justify-between items-center">
                <p className="text-light-text">Shriya Shukla | Copyright © 2023</p>
                <div className="flex">
                    <div className='flex justify-center items-center rounded-full bg-assets w-9 h-9 opacity-50 mr-3'>
                        <img src="/icons/email.svg" />
                    </div>

                    <div className='flex justify-center items-center rounded-full bg-assets w-9 h-9 opacity-50'>
                        <img src="/icons/linkedin.svg" />
                    </div>
                </div>
            </div>
        </footer>
    )
}
