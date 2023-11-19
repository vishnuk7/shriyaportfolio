import Footer from '@/components/Footer'
import ContactSVG from '@/components/contact /svg'
import Nav from '@/components/nav/nav'
import React from 'react'

export default function Contact() {
    return (
        <div>
            <Nav />
            <div className='flex justify-center my-16'>
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[1136px] relative gap-[100px]">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-8">
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-6">
                            <p className="flex-grow-0 flex-shrink-0 w-[463px] text-5xl font-bold text-left text-[#00559a]">
                                Let’s talk
                            </p>
                            <p className="flex-grow-0 flex-shrink-0 w-[463px] text-base text-left text-[#394041]">
                                What do you want talk about?
                            </p>
                        </div>
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[459px] gap-8">
                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
                                <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-8">
                                    <div className="flex flex-col justify-start items-start flex-grow relative gap-2">
                                        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#394041]">Name</p>
                                        <input type='text' placeholder='Enter Name' className="text-sm px-4 py-[18px] rounded-md bg-white border border-[#e0e0e0]" />
                                    </div>
                                    <div className="flex flex-col justify-start items-start flex-grow relative gap-2">
                                        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#394041]">Email</p>
                                        <input type="email" placeholder='example@youremail.com' className="text-sm px-4 py-[18px] rounded-md bg-white border border-[#e0e0e0]" />
                                    </div>
                                </div>
                                <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-8">
                                    <div className="flex flex-col justify-start items-start flex-grow relative gap-2">
                                        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#394041]">Phone</p>
                                        <input type='number' placeholder=' xxx - xxx - xxxx'
                                            className="text-sm px-4 py-[18px] rounded-md bg-white border border-[#e0e0e0]"
                                            style={{ boxShadow: "0px 1px 4px 0 rgba(25,33,61,0.08)" }}
                                        />

                                    </div>
                                    <div className="flex flex-col justify-start items-start flex-grow relative gap-2">
                                        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#394041]">Company</p>
                                        <input type='text' placeholder=' Enter Company Name' className="text-sm px-4 py-[18px] rounded-md bg-white border border-[#e0e0e0]" />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
                                    <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#394041]">Message</p>
                                    <div
                                        className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[92px] relative gap-2.5 p-4 rounded-md bg-white border border-[#e0e0e0]"
                                        style={{ boxShadow: "0px 1px 4px 0 rgba(25,33,61,0.08)" }}
                                    >
                                        <textarea placeholder='Type your message here...' className=" w-[427px] h-[60px] text-sm text-left text-[#abb0b0]">

                                        </textarea>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[3px] px-[18px] py-3.5 rounded-md bg-[#00559a]"
                                style={{ boxShadow: "0px 1px 4px 0 rgba(25,33,61,0.08)" }}
                            >
                                <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-white">
                                    Send message
                                </p>
                            </div>
                        </div>
                    </div>
                    <ContactSVG />
                </div>
            </div>
            <Footer />
        </div >
    )
}
