/* eslint-disable */


"use client";

import React, { Suspense } from 'react';

import Nav from '@/components/nav/nav';

import AlphaSVG from '@/components/alpha/svg';
import IconCardItem from '@/components/alpha/iconCardItem';
import ProjectFooter from '@/components/ProjectFooter/ProjectFooter';
import Footer from '@/components/Footer';
const UserFlow = React.lazy(() => import('@/components/alpha/UserFlow'));


const renderedIcons = (items: string[]) => (items.map(item => {
    const methodName = item.replace(/\s+/g, '') + 'Icon';

    const iconMethod = AlphaSVG[methodName as keyof typeof AlphaSVG];

    return <IconCardItem key={item} iconName={item} IconFunctionName={iconMethod} />
}));


export default function Alpha() {
    return (
        <div>
            <Nav />
            <div className="flex flex-col mx-[9.375rem]">
                <div className='mb-12'>
                    <p className="self-stretch flex-grow-0 flex-shrink-0 text-4xl font-bold text-center text-black">
                        Alpha - All Licensing and Permitting Hub
                    </p>
                </div>

                <div className='flex justify-between mb-16'>
                    <div className='w-1/2'>
                        <div className="flex flex-col justify-start items-start relative gap-4 py-10">
                            <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-black">
                                Project Description
                            </p>
                            <p className="flex-grow-0 flex-shrink-0  text-base text-left text-[#000e10]">
                                <span className="flex-grow-0 flex-shrink-0  text-base text-left text-[#000e10]">
                                    ALPHA is a licensing, permitting and inspections solution that helps the users to succeed through compliance.
                                </span>
                                <br />
                                <br />
                                <span className="flex-grow-0 flex-shrink-0 text-base text-left text-[#000e10]">
                                    Its based on simple, powerful and intuitive salesforce based platform which truly puts user in control by enabling them to track the progress of every application.
                                </span>
                            </p>
                        </div>
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4 py-10">
                            <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-black">
                                Facets of the Product
                            </p>

                            <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#000e10]">
                                The process of licensing and permitting applications typically demands a significant amount of time. However, ALPHA provides an efficient solution by categorizing crucial actions based on priority. Users can complete their tasks in just a few steps, ensuring a smooth and user-friendly experience.
                            </p>
                            <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#000e10]">
                                Additionally, the interactive dashboard offers a quick glance at the status of user licenses, important notifications, inspections, and investigations, all within a unified interface.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex-grow-0 flex-shrink-0 ">
                            <img
                                src="/works/alpha/img1.png"
                                className="object-none"
                            />
                        </div>
                    </div>
                </div>

                <div className='mb-16'>
                    <div className="flex flex-col  gap-[1.813rem]">
                        <div className="flex justify-between items-start gap-[1.813rem]">
                            {renderedIcons(["Scalable", "Interoperable", "High Visbility", "Accessible"])}
                        </div>
                        <div className="flex justify-between items-start gap-[1.813rem]">
                            {renderedIcons(["Centralised Database", "Distributed Data", "Integrable", "Customizable"])}
                        </div>
                    </div>
                </div>

                <div className='mb-[3.688rem]'>
                    <div className='mb-8'>
                        <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-black">
                            The ‘What’ and ‘How’
                        </p>
                    </div>

                    <div className='flex w-1/2 gap-x-8 mb-8'>
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-6 w-full">
                            <div>
                                <div className="flex justify-center items-center w-[12.125rem] h-[2.188rem] rounded-[40px] bg-[#c62828] border border-[#c62828] m-auto" >
                                    <p className="text-base font-medium text-white">
                                        Problem Statement
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8">
                                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
                                    <ul className='list-disc list-outside ml-8'>
                                        <li className="self-stretch flex-grow-0 flex-shrink-0  text-base text-left text-black mb-4">
                                            MTX has been making licensing and permit application , but it required a product that
                                            consolidated all the existing features with main goal to keep it user-centric apart from
                                            meeting the business goals
                                        </li>
                                        <li className="self-stretch flex-grow-0 flex-shrink-0  text-base text-left text-black mb-4">
                                            One common drawback of existing solutions was the absence of an end-user perspective.
                                        </li>
                                        <li className="self-stretch flex-grow-0 flex-shrink-0  text-base text-left text-black mb-4">
                                            The information architecture in these solutions often lacked clarity and intuitiveness.
                                        </li>
                                        <li className="self-stretch flex-grow-0 flex-shrink-0  text-base text-left text-black">
                                            The user interface (UI) lacked emphasis on user needs and task prioritization.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-6 w-full">
                            <div>
                                <div className="flex justify-center items-center w-[12.125rem] h-[2.188rem] rounded-[40px] bg-[#1B5E20] border border-[#1B5E20] m-auto" >
                                    <p className="text-base font-medium text-white">
                                        Problem Statement
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8">
                                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">

                                    <ul className='list-disc list-outside ml-8'>
                                        <li className="self-stretch flex-grow-0 flex-shrink-0  text-base text-left text-black mb-4">
                                            Getting all good points from existing solutions
                                        </li>
                                        <li className="self-stretch flex-grow-0 flex-shrink-0  text-base text-left text-black mb-4">
                                            Developing Information Architecture as per user need
                                        </li>
                                        <li className="self-stretch flex-grow-0 flex-shrink-0  text-base text-left text-black mb-4">
                                            Keeping UI simple and at the same time making it intuitive
                                        </li>
                                        <li className="self-stretch flex-grow-0 flex-shrink-0  text-base text-left text-black mb-4">
                                            Interactive Dashboard that reduces the step of tasks
                                        </li>
                                        <li className="self-stretch flex-grow-0 flex-shrink-0  text-base text-left text-black mb-4">
                                            Document Vault to keep the documents for a quick use in applications
                                        </li>
                                        <li className="self-stretch flex-grow-0 flex-shrink-0  text-base text-left text-black mb-4">
                                            Clear Application/Amendment process
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col justify-start items-start gap-4 mb-[4.688rem]">
                            <div className="flex-grow-0 flex-shrink-0">
                                <p className="text-2xl font-bold text-left text-black">Research</p>
                            </div>
                            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0  gap-14">
                                <p className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-black">
                                    Given our prior experience with licensing projects, we began by conducting extensive secondary
                                    research to gather valuable insights. This research served as the foundation for crafting an
                                    effective information architecture. Furthermore, we recognized the importance of understanding
                                    our user base better, which led us to create personas. These personas allowed us to gain
                                    invaluable insights into our users' behaviours, needs, and preferences, enabling us to design
                                    a more user-centric solution.
                                </p>
                            </div>
                        </div>

                        <div className='mb-12'>
                            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-14">
                                <div
                                    className="flex-grow-0 flex-shrink-0 w-[30rem] h-[42.623rem] relative"
                                    style={{ filter: "drop-shadow(0px 0px 8px rgba(0,85,154,0.1))" }}
                                >
                                    <img
                                        src="/works/alpha/img2.png"
                                        className="w-[30rem] h-[681.96px] object-none"
                                    />
                                </div>
                                <div
                                    className="flex-grow-0 flex-shrink-0 w-[30rem] h-[42.623rem] relative"
                                    style={{ filter: "drop-shadow(0px 0px 8px rgba(0,85,154,0.1))" }}
                                >
                                    <img
                                        src="/works/alpha/img3.png"
                                        className="w-[30rem] h-[42.623rem] object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
                                <div
                                    className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5"
                                    style={{ filter: "drop-shadow(0px 0px 8px rgba(0,85,154,0.1))" }}
                                >
                                    <img
                                        src="/works/alpha/img4.png"
                                        className="flex-grow-0 flex-shrink-0 w-[21.313rem] h-[25.529rem] object-none"
                                    />
                                </div>
                                <div
                                    className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5"
                                    style={{ filter: "drop-shadow(0px 0px 8px rgba(0,85,154,0.1))" }}
                                >
                                    <img
                                        src="/works/alpha/img5.png"
                                        className="flex-grow-0 flex-shrink-0 w-[22.875rem] h-[18.938rem] object-none"
                                    />
                                </div>
                                <div
                                    className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5"
                                    style={{ filter: "drop-shadow(0px 0px 8px rgba(0,85,154,0.1))" }}
                                >
                                    <img
                                        src="/works/alpha/img6.png"
                                        className="flex-grow-0 flex-shrink-0 w-[23.25rem] h-[24.313rem] object-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>





                </div>

                <div className='mb-[3.688rem]'>

                    <div className='mb-4'>
                        <p className="text-2xl font-bold text-left text-black">Information Architecture</p>
                    </div>
                    <div className='mb-6'>
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1136px] text-base text-left text-[#000e10]">
                            This research served as the foundation for crafting an effective information architecture. This
                            helped us understand navigation and content of the entire application.
                        </p>
                    </div>
                    <div className='flex justify-center items-center mb-12'>
                        <img className='w-full h-full' src="/works/alpha/one.svg" alt="" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='w-full h-full' src="/works/alpha/two.svg" alt="" />
                    </div>
                </div>

                <div className='mb-[3.688rem]'>

                    <div className='mb-12'>
                        <p className="text-2xl font-bold text-left text-black">Defining Persona</p>
                    </div>
                    <div>
                        <div className='flex justify-center mb-12'>
                            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[13.32223129272461px] px-[25.312240600585938px] py-[18.651124954223633px] bg-white" style={{ filter: "drop-shadow(0px 0px 2px rgba(0,85,154,0.1))" }}>
                                <div className="flex-grow-0 flex-shrink-0">
                                    <div className="flex justify-start items-start gap-[53.28892517089844px]">
                                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[21.315570831298828px]">
                                            <img className="flex-grow-0 flex-shrink-0" src="/works/alpha/img7.png" />
                                            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[10.657785415649414px]">
                                                <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#000e10]">
                                                    Emily
                                                </p>
                                                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[0.5rem]">
                                                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-[59.950042724609375px]">
                                                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5.328892707824707px]">
                                                            {AlphaSVG.PinIcon()}
                                                            <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#394041]">Ohio</p>
                                                        </div>
                                                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5.328892707824707px]">
                                                            {AlphaSVG.CakeIcon()}
                                                            <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#394041]">34</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-[42.631141662597656px]">
                                                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5.328892707824707px]">
                                                            {AlphaSVG.HeartIcon()}
                                                            <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#394041]">
                                                                Married
                                                            </p>
                                                        </div>
                                                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5.328892707824707px]">
                                                            {AlphaSVG.SuitCaseIcon()}
                                                            <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#394041]">
                                                                <span className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#394041]">
                                                                    Health{" "}
                                                                </span>
                                                                <br />
                                                                <span className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#394041]">
                                                                    Practitioner
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[10.657785415649414px]">
                                            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 rounded-[10.66px] w-[28.1rem] h-10 ">
                                                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 rounded-[10.66px] py-1.5 px-2.5 bg-[#b5efec]">
                                                    <p className="flex-grow-0 flex-shrink-0  text-xs text-left text-[#394041]">
                                                        <span className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#394041]">
                                                            “ Strict measures in Licensing makes us stagnant as professional with no room for
                                                            improvement. ”{" "}
                                                        </span>
                                                        <br />
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-[53.28892517089844px]">
                                                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[21.315570831298828px]">
                                                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5.328892707824707px]">
                                                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
                                                            <p className="flex-grow-0 flex-shrink-0 w-[71.61px] text-base font-medium text-left text-[#000e10]">
                                                                About
                                                            </p>
                                                            <svg
                                                                width={55}
                                                                height={2}
                                                                viewBox="0 0 55 2"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="flex-grow-0 flex-shrink-0"
                                                                preserveAspectRatio="none"
                                                            >
                                                                <path
                                                                    d="M0.734619 1.27063H54.0235"
                                                                    stroke="#07CBC1"
                                                                    stroke-width="0.832639"
                                                                    stroke-linecap="round"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <p className="flex-grow-0 flex-shrink-0 w-[197.75px] text-xs text-left text-[#555]">
                                                            Emily is a mother of two , and has been a health practitioner since 3 years, as a
                                                            nurse in a government hospital
                                                        </p>
                                                    </div>
                                                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5.328892707824707px]">
                                                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
                                                            <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#000e10]">
                                                                Goals &amp; Needs
                                                            </p>
                                                            <svg
                                                                width={114}
                                                                height={2}
                                                                viewBox="0 0 114 2"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="flex-grow-0 flex-shrink-0"
                                                                preserveAspectRatio="none"
                                                            >
                                                                <path
                                                                    d="M0.734619 0.915039L112.725 0.915039"
                                                                    stroke="#07CBC1"
                                                                    stroke-width="0.832639"
                                                                    stroke-linecap="round"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <ul className="list-disc list-outside flex-grow-0 flex-shrink-0 w-48 text-xs text-left text-[#555] ml-4">
                                                            <li className="flex-grow-0 flex-shrink-0 w-48 text-xs text-left text-[#555]">
                                                                Opportunities to grow
                                                            </li>
                                                            <li className="flex-grow-0 flex-shrink-0 w-48 text-xs text-left text-[#555]">
                                                                To get the certifications and licensing easily and at a less price
                                                            </li>
                                                            <li className="flex-grow-0 flex-shrink-0 w-48 text-xs text-left text-[#555]">
                                                                Check licenses in all states, if needs arises to change state
                                                            </li>
                                                            <li className="flex-grow-0 flex-shrink-0 w-48 text-xs text-left text-[#555]">
                                                                All opportunities and certifications information
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[21.315570831298828px]">
                                                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5.328892707824707px]">
                                                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
                                                            <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#000e10]">
                                                                Motivations
                                                            </p>
                                                            <svg
                                                                width={96}
                                                                height={2}
                                                                viewBox="0 0 96 2"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="flex-grow-0 flex-shrink-0"
                                                                preserveAspectRatio="none"
                                                            >
                                                                <path
                                                                    d="M0.775391 1.27063H95.28"
                                                                    stroke="#07CBC1"
                                                                    stroke-width="0.832639"
                                                                    stroke-linecap="round"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <ul className="list-disc list-outside flex-grow-0 flex-shrink-0 w-48 text-xs text-left text-[#555] ml-4">
                                                            <li className="flex-grow-0 flex-shrink-0 w-48 text-xs text-left text-[#555]">
                                                                Wage is high since her non licensed days
                                                            </li>

                                                            <li className="flex-grow-0 flex-shrink-0 w-48 text-xs text-left text-[#555]">
                                                                Working with licensed workers who are experienced{" "}
                                                            </li>

                                                            <li className="flex-grow-0 flex-shrink-0 w-48 text-xs text-left text-[#555]">
                                                                Preparing for various higher certifications for better position
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5.328892707824707px]">
                                                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
                                                            <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#000e10]">
                                                                Frustrations
                                                            </p>
                                                            <svg
                                                                width={100}
                                                                height={2}
                                                                viewBox="0 0 100 2"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="flex-grow-0 flex-shrink-0"
                                                                preserveAspectRatio="none"
                                                            >
                                                                <path
                                                                    d="M0.775391 0.915039L99.444 0.915039"
                                                                    stroke="#07CBC1"
                                                                    stroke-width="0.832639"
                                                                    stroke-linecap="round"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <ul className="list-disc list-outside flex-grow-0 flex-shrink-0 w-48 text-xs text-left text-[#555] ml-4">
                                                            <li className="flex-grow-0 flex-shrink-0 w-48 text-xs text-left text-[#555]">
                                                                Have ben working in the same place for 3 years but has a stagnant role
                                                            </li>
                                                            <li className="flex-grow-0 flex-shrink-0 w-48 text-xs text-left text-[#555]">
                                                                Stringent measures of licensing
                                                            </li>
                                                            <li className="flex-grow-0 flex-shrink-0 w-48 text-xs text-left text-[#555]">
                                                                Lack of information for independent profession
                                                            </li>
                                                            <li className="flex-grow-0 flex-shrink-0 w-48 text-xs text-left text-[#555]">
                                                                Unable to change to state that has more opportunity
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[13.32223129272461px] px-[25.312240600585938px] py-[18.651124954223633px] bg-white" style={{ filter: "drop-shadow(0px 0px 2px rgba(0,85,154,0.1))" }}>
                                <div className="flex-grow-0 flex-shrink-0">
                                    <div className="flex justify-start items-start gap-[53.28892517089844px]">
                                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[21.315570831298828px]">
                                            <img className="flex-grow-0 flex-shrink-0 rounded-full" src="/works/alpha/img8.png" />
                                            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[10.657785415649414px]">
                                                <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#000e10]">
                                                    Steven
                                                </p>
                                                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[0.5rem]">
                                                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-[59.950042724609375px]">
                                                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5.328892707824707px]">
                                                            {AlphaSVG.PinIcon()}
                                                            <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#394041]">Minnesota</p>
                                                        </div>
                                                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5.328892707824707px]">
                                                            {AlphaSVG.CakeIcon()}
                                                            <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#394041]">31</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-[42.631141662597656px]">
                                                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5.328892707824707px]">
                                                            {AlphaSVG.HeartIcon()}
                                                            <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#394041]">
                                                                Married
                                                            </p>
                                                        </div>
                                                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5.328892707824707px]">
                                                            {AlphaSVG.SuitCaseIcon()}
                                                            <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#394041]">
                                                                <span className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#394041]">
                                                                    Surgeon
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[10.657785415649414px]">
                                            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 rounded-[10.66px] w-[28.1rem] h-10 ">
                                                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 rounded-[10.66px] py-1.5 px-2.5 bg-[#AED9F7]">
                                                    <p className="flex-grow-0 flex-shrink-0  text-xs text-left text-[#394041]">
                                                        <span className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#394041]">
                                                            “ Difficulty to practice ones profession in other states with same license is the biggest hurdle in professional licensing. ” {" "}
                                                        </span>
                                                        <br />
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-[53.28892517089844px]">
                                                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[21.315570831298828px]">
                                                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5.328892707824707px]">
                                                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
                                                            <p className="flex-grow-0 flex-shrink-0 w-[71.61px] text-base font-medium text-left text-[#000e10]">
                                                                About
                                                            </p>
                                                            <svg
                                                                width={55}
                                                                height={2}
                                                                viewBox="0 0 55 2"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="flex-grow-0 flex-shrink-0"
                                                                preserveAspectRatio="none"
                                                            >
                                                                <path
                                                                    d="M0.734619 1.27063H54.0235"
                                                                    stroke="#07CBC1"
                                                                    stroke-width="0.832639"
                                                                    stroke-linecap="round"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <p className="flex-grow-0 flex-shrink-0 w-[12rem] text-xs text-left text-[#555]">
                                                            Steven is a specialist in surgery and moved from Georgia, his hometown, to Minnesota to practice his profession.
                                                        </p>
                                                    </div>
                                                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5.328892707824707px]">
                                                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
                                                            <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#000e10]">
                                                                Goals &amp; Needs
                                                            </p>
                                                            <svg
                                                                width={114}
                                                                height={2}
                                                                viewBox="0 0 114 2"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="flex-grow-0 flex-shrink-0"
                                                                preserveAspectRatio="none"
                                                            >
                                                                <path
                                                                    d="M0.734619 0.915039L112.725 0.915039"
                                                                    stroke="#07CBC1"
                                                                    stroke-width="0.832639"
                                                                    stroke-linecap="round"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <ul className="list-disc list-outside flex-grow-0 flex-shrink-0 w-48 text-xs text-left text-[#555] ml-4">
                                                            <li className="flex-grow-0 flex-shrink-0 w-48 text-xs text-left text-[#555]">
                                                                Opportunities to grow
                                                            </li>
                                                            <li className="flex-grow-0 flex-shrink-0 w-48 text-xs text-left text-[#555]">
                                                                To return to his hometown and live with his parents
                                                            </li>
                                                            <li className="flex-grow-0 flex-shrink-0 w-48 text-xs text-left text-[#555]">
                                                                To practice his licensed profession after shifting without applying for a new one for that state
                                                            </li>
                                                            <li className="flex-grow-0 flex-shrink-0 w-48 text-xs text-left text-[#555]">
                                                                Easy License transfer rather than re-applying
                                                            </li>
                                                            <li className="flex-grow-0 flex-shrink-0 w-48 text-xs text-left text-[#555]">
                                                                Easy permits for location to practice
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[21.315570831298828px]">
                                                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5.328892707824707px]">
                                                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
                                                            <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#000e10]">
                                                                Motivations
                                                            </p>
                                                            <svg
                                                                width={96}
                                                                height={2}
                                                                viewBox="0 0 96 2"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="flex-grow-0 flex-shrink-0"
                                                                preserveAspectRatio="none"
                                                            >
                                                                <path
                                                                    d="M0.775391 1.27063H95.28"
                                                                    stroke="#07CBC1"
                                                                    stroke-width="0.832639"
                                                                    stroke-linecap="round"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <ul className="list-disc list-outside flex-grow-0 flex-shrink-0 w-48 text-xs text-left text-[#555] ml-4">
                                                            <li className="flex-grow-0 flex-shrink-0 w-48 text-xs text-left text-[#555]">
                                                                More wage after licensing
                                                            </li>

                                                            <li className="flex-grow-0 flex-shrink-0 w-48 text-xs text-left text-[#555]">
                                                                Quality of work and environment{" "}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5.328892707824707px]">
                                                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
                                                            <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#000e10]">
                                                                Frustrations
                                                            </p>
                                                            <svg
                                                                width={100}
                                                                height={2}
                                                                viewBox="0 0 100 2"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="flex-grow-0 flex-shrink-0"
                                                                preserveAspectRatio="none"
                                                            >
                                                                <path
                                                                    d="M0.775391 0.915039L99.444 0.915039"
                                                                    stroke="#07CBC1"
                                                                    stroke-width="0.832639"
                                                                    stroke-linecap="round"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <ul className="list-disc list-outside flex-grow-0 flex-shrink-0 w-48 text-xs text-left text-[#555] ml-4">
                                                            <li className="flex-grow-0 flex-shrink-0 w-48 text-xs text-left text-[#555]">
                                                                Stringent and conflicting rules of various states on licensing
                                                            </li>
                                                            <li className="flex-grow-0 flex-shrink-0 w-48 text-xs text-left text-[#555]">
                                                                To visit different platform for different needs such as permits and registrations
                                                            </li>
                                                            <li className="flex-grow-0 flex-shrink-0 w-48 text-xs text-left text-[#555]">
                                                                Lack of information of various requirement related to his profession
                                                            </li>
                                                            <li className="flex-grow-0 flex-shrink-0 w-48 text-xs text-left text-[#555]">
                                                                Difficult to keep track of renewal of license
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className='mb-[3.688rem]'>
                    <div className='mb-4'>
                        <p className="text-2xl font-bold text-left text-black">User Flow</p>
                    </div>
                    <div className='mb-12'>
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1136px] text-base text-left text-[#000e10]">
                            Since the research gave the idea of basic flow that each persona will take but to make the end
                            users experience smooth and easy it was important to understand each step of the flow.{" "}
                        </p>
                    </div>
                    {/* <div className='hover:cursor-zoom-in mb-12'>
                        <Suspense fallback={<div>Loading...</div>}>
                            <UserFlow SVGFileName={AlphaSVG.ApplicantLicenseSVG} />
                        </Suspense>
                    </div> */}
                    <div className='flex justify-center items-center mb-12'>
                        <img className='w-full h-full' src="/works/alpha/three.svg" alt="" />
                    </div>
                    <div className='flex justify-center'>
                        <div className='flex justify-center items-center w-[31.25rem]'>
                            <img className='w-full h-full' src="/works/alpha/four.svg" alt="" />
                        </div>
                    </div>
                </div>

                <div className='mb-16'>
                    <div className='mb-4'>
                        <p className="text-2xl font-bold text-left text-black">Usability Testing</p>
                    </div>
                    <div>
                        <p className="self-stretch flex-grow-0 flex-shrink-0  text-base text-left">
                            <span className="self-stretch flex-grow-0 flex-shrink-0  text-base text-left text-[#394041]">
                                To find out how I conducted the Usability Testing in detail,{" "}
                            </span>
                            <a href='https://docs.google.com/presentation/d/1nrLqDP7xraAGMT4DN2RtauQP9X6ZboO3Xd8CMDiU_6U/edit#slide=id.g2501778aa94_0_7' target='_blank' className="cursor-pointer self-stretch flex-grow-0 flex-shrink-0  text-base text-left text-[#00559a]">
                                click here
                            </a>
                        </p>
                    </div>
                </div>

                <div className='mb-8'>
                    <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-black">Mockups</p>

                </div>
            </div>
            <div className="bg-[url('/works/alpha/img9.png')] h-[62rem] bg-cover bg-center mb-20">

            </div>
            <ProjectFooter next="" prev="/vaccine" />
            <Footer />
        </div >
    )
}
