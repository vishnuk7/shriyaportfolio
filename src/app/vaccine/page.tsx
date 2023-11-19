import Footer from '@/components/Footer';
import ProjectFooter from '@/components/ProjectFooter/ProjectFooter';
import Nav from '@/components/nav/nav';
import AvergeTimeCard from '@/components/vaccine/AvergeTimeCard';
import ClickCard from '@/components/vaccine/ClickCard';
import ControlFlowImgCard from '@/components/vaccine/ControlFlowImgCard';
import ImgCard from '@/components/vaccine/ImgCard';


export default function Vaccine() {
    return (
        <div>
            <Nav />
            <div className="flex flex-col ml-48 mr-48 mb-[5.3727rem]">
                <div className='mb-16'>
                    <p className="flex-grow-0 flex-shrink-0 w-[1136px] text-4xl font-bold text-center text-black">
                        Usability Testing of Vaccine Appointment Scheduling Flow{" "}
                    </p>
                </div>

                <div className='mb-16'>
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5.125rem]">
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[34.875rem] relative gap-4">
                            <p className="flex-grow-0 flex-shrink-0 w-[34.875rem] text-base text-left text-black">
                                <span className="flex-grow-0 flex-shrink-0 w-[34.875rem] text-base text-left text-black">
                                    The Vaccine Department observed a low number of vaccination appointments in the existing
                                    product, despite a steady Covid infection rate in the state. Recognizing the need for
                                    improvement, we aimed to enhance the appointment-making flow, making it more user-friendly
                                    and intuitive.
                                </span>
                                <br />
                                <br />
                                <span className="flex-grow-0 flex-shrink-0 w-[558px] text-base text-left text-black">
                                    We came up with a new flow with a focus on user experience. To ensure its effectiveness, A/B
                                    testing was conducted, comparing it with existing flow.
                                </span>
                                <br />
                                <br />
                                <span className="flex-grow-0 flex-shrink-0 w-[558px] text-base text-left text-black">
                                    The covid vaccination department of a state was one of our client, and we were working on
                                    delivering the portal with appointments, scheduling, admin flow. The decision to redesign
                                    the appointment flow aimed to achieve a more intuitive user experience, with the new flow
                                    undergoing rigorous testing against the previous design.
                                </span>
                            </p>
                        </div>
                        <img
                            src="/works/vaccine/img1.webp"
                            className="flex-grow-0 flex-shrink-0 w-[31.25rem] h-[20.8331rem] object-cover"
                        />
                    </div>
                </div>

                <div className='mb-16'>
                    <div
                        className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4 bg-white"
                        style={{ boxShadow: "0px 0px 8px 0 rgba(0,85,154,0.1)" }}
                    >
                        <div className="flex justify-between items-start flex-grow-0 flex-shrink-0">
                            <div className="flex flex-col justify-center items-start flex-grow h-[4.375rem] relative gap-2.5 px-5 py-2.5">
                                <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#000e10]">
                                    Challenge
                                </p>
                                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#000e10]">
                                    To deliver an intuitive flow of the vaccine appointment process
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between items-start flex-grow-0 flex-shrink-0 w-[71rem]">
                            <div className="flex flex-col justify-center items-start flex-grow h-[4.375rem] relative gap-2.5 px-5 py-2.5">
                                <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#000e10]">
                                    Sector
                                </p>
                                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#000e10]">
                                    Public Sector, Health
                                </p>
                            </div>
                            <div className="flex flex-col justify-center items-start flex-grow h-[4.375rem] relative gap-2.5 px-5 py-2.5">
                                <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#000e10]">
                                    My Role
                                </p>
                                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#000e10]">Research</p>
                            </div>
                            <div className="flex flex-col justify-center items-start flex-grow h-[4.375rem] relative gap-2.5 px-5 py-2.5">
                                <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#000e10]">
                                    Project Duration
                                </p>
                                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#000e10]">2 weeks</p>
                            </div>
                            <div className="flex flex-col justify-center items-start flex-grow h-[4.375rem] relative gap-2.5 px-5 py-2.5">
                                <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#000e10]">
                                    Tool Used
                                </p>
                                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#000e10]">Maze</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mb-8'>
                    <div className="flex flex-col justify-start items-start w-[1140px] relative gap-8">
                        <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-black">
                            The control flow - Original
                        </p>
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                            <p className="self-stretch flex-grow-0 flex-shrink-0  text-base text-left text-black">
                                We designate the control flow to the original version. This was the flow that was first
                                delivered for Vaccine appointment scheduling.
                            </p>
                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                                <ul className="list-disc list-outside ml-8">
                                    <li className="self-stretch flex-grow-0 flex-shrink-0  text-base text-left text-black mb-4">
                                        It was simple, with basic verbiage
                                    </li>
                                    <li className="self-stretch flex-grow-0 flex-shrink-0  text-base text-left text-black mb-4">
                                        Not much images or icons
                                    </li>
                                    <li className="self-stretch flex-grow-0 flex-shrink-0  text-base text-left text-black">
                                        A simple flow with selection rounded buttons keeping it one selection per page
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mb-16'>
                    <div className="flex flex-col justify-start items-start gap-10">
                        <ControlFlowImgCard imgOne="img2" imgTwo="img3" />
                        <ControlFlowImgCard imgOne="img4" imgTwo="img5" />
                    </div>
                </div>

                <div className='mb-8'>
                    <div className="flex flex-col justify-start items-start w-[1140px] relative gap-8">
                        <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-black">
                            The Variant flow - Modified
                        </p>
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                            <p className="self-stretch flex-grow-0 flex-shrink-0  text-base text-left text-black">
                                We came up with a modified version of the Appointment scheduling flow, this time making use of
                                images and reducing the number of pages.
                            </p>
                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                                <ul className='list-disc list-outside ml-8'>
                                    <li className="self-stretch flex-grow-0 flex-shrink-0  text-base text-left text-black mb-4">
                                        Use of icon to make it easier for user to understand the action available like schedule,
                                        reschedule etc.
                                    </li>
                                    <li className="self-stretch flex-grow-0 flex-shrink-0  text-base text-left text-black mb-4">
                                        Including two selections in succession like vaccination type followed by number of doses
                                    </li>
                                    <li className="self-stretch flex-grow-0 flex-shrink-0  text-base text-left text-black">
                                        Next and Previous CTA to complete the step
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mb-16'>
                    <div className="flex flex-col justify-start items-start w-[1140px] gap-10">
                        <ControlFlowImgCard imgOne="img6" imgTwo="img7" />
                        <ControlFlowImgCard imgOne="img8" imgTwo="img9" />
                    </div>
                </div>

                <div className='mb-16'>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-8">
                        <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-black">
                            Why A/B Testing?
                        </p>
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1140px] text-base text-left text-black">
                                A/B testing was needed here because we were ready with two designs that is made on different
                                suggestions on team discussions. At this point it becomes important to choose the best one
                                which is done by this test helping to achieve following goals:
                            </p>
                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                                <ul className='list-disc list-outside ml-8'>
                                    <li className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-black mb-4">
                                        Solves visitor pain points
                                    </li>
                                    <li className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-black mb-4">
                                        Reduces bounce rate
                                    </li>
                                    <li className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-black mb-4">
                                        Achieve statistically significant improvements
                                    </li>
                                    <li className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-black">
                                        Redesign the flow to increase future business gains
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mb-16'>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-8">
                        <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-black">
                            Usability metrics
                        </p>
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1140px] text-base text-left text-black">
                                Before diving into the test it was important to consider what would be the usability metrics
                                upon which we would rank the flow by giving priority to metrics. So I came up with following
                                metrics:
                            </p>
                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                                <ul className='list-disc list-outside ml-8'>
                                    <li className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-black mb-4">
                                        <span className="self-stretch flex-grow-0 flex-shrink-0 text-base font-bold text-left text-black">
                                            Task completion
                                        </span>
                                        <span className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-black">
                                            {" "}
                                            - this was the first priority as it was the whole motive of making the user easily
                                            complete the scheduling task
                                        </span>
                                    </li>
                                    <li className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-black mb-4">
                                        <span className="self-stretch flex-grow-0 flex-shrink-0 text-base font-bold text-left text-black">
                                            Average time
                                        </span>
                                        <span className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-black">
                                            {" "}
                                            - this was of second priority as we also wanted users to spend as less time as possible
                                            and allowing them to focus on the action of scheduling and not overwhelming them by other
                                            secondary tasks.
                                        </span>
                                    </li>
                                    <li className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-black">
                                        <span className="self-stretch flex-grow-0 flex-shrink-0 text-base font-bold text-left text-black">
                                            Misclick
                                        </span>
                                        <span className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-black">
                                            {" "}
                                            - this was the third priority of finding the unwanted clicks
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mb-16'>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-8">
                        <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-black">Results</p>
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                            <p className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-black">
                                The test was conducted on the platform Maze.
                            </p>
                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                                <p className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-black">
                                    We hired users on maze platform and provided them the flows with each user being tested for
                                    only one flow. Their responses were recorded and detailed scrutiny was done.
                                </p>
                                <p className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-[#00559a]">
                                    All users were given the task to complete the flow by giving them a scenario of assumptions
                                    that they are a normal citizen of state and needs to schedule its first covid vaccination
                                    dose
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mb-10'>
                    <div className='mb-8'>
                        <p className="flex-grow-0 flex-shrink-0 text-2xl text-left text-black">The Control flow</p>
                    </div>
                    <div className='mb-6'>
                        <p className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-black">
                            All users completed the flow as it was simple and short, so other metrics were recorded
                        </p>
                    </div>

                    <div className='mb-6'>
                        <div className="flex justify-center items-start self-stretch flex-grow-0 flex-shrink-0 gap-4" >
                            <ClickCard percentage='5%' />
                            <AvergeTimeCard avergeTimeSpent='2.4s' />
                        </div>
                    </div>

                    <div>
                        <p className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-black">
                            The simple flow design of the control flow provided a 100% success rate with fairly less average
                            time and misclick. All users completed the task with zero bounce off.
                        </p>
                    </div>
                </div>



                <div className='mb-16'>
                    <div className='mb-8'>
                        <div className='mb-8'>
                            <p className="flex-grow-0 flex-shrink-0 text-2xl text-left text-black">Optimal Path Analysis</p>
                        </div>
                        <div className='mb-6'>
                            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1140px] text-base text-left text-black">
                                Analyzing usability of each screen and providing usability score to each and the inferences
                            </p>
                        </div>
                        <div className='flex'>
                            <div className='py-14 w-1/2'>
                                <div className="flex justify-center items-start self-stretch flex-grow-0 flex-shrink-0 gap-4 mb-14" >
                                    <ClickCard percentage='20%' />
                                    <AvergeTimeCard avergeTimeSpent='6s' />
                                </div>
                                <div>
                                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                                        <ul className="list-disc list-outside ml-8">
                                            <li className="self-stretch flex-grow-0 flex-shrink-0  text-base text-left text-black mb-8">
                                                Major hotspot is seen at the language selection button signifying its importance
                                            </li>
                                            <li className="self-stretch flex-grow-0 flex-shrink-0  text-base text-left text-black mb-8">
                                                Users very easily found the SCHEDULE VACCINATION as the major action
                                            </li>
                                            <li className="self-stretch flex-grow-0 flex-shrink-0  text-base text-left text-black">
                                                Misclicks are basically with the users trying to explore the page before starting the mission
                                                because the action button has less focus
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='w-1/2'>
                                <ImgCard imgName='img10' w="full" h="auto" />
                            </div>
                        </div>
                    </div>
                    <div className='mb-8'>
                        <div className='flex items-center'>
                            <div className='w-1/2'>
                                <ImgCard imgName='img11' w="full" h="auto" />
                            </div>
                            <div className="w-1/2">
                                <div className="flex justify-center items-start self-stretch flex-grow-0 flex-shrink-0 gap-4 mb-14" >
                                    <ClickCard percentage='0%' />
                                    <AvergeTimeCard avergeTimeSpent='1.8s' />

                                </div>
                                <div>
                                    <ul className='list-disc list-outside ml-8'>
                                        <li className="self-stretch flex-grow-0 flex-shrink-0 w-[562px] text-base text-left text-black">
                                            Users easily found the covid selection button
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center'>
                            <div className='w-1/2'>
                                <div className="flex justify-center items-start self-stretch flex-grow-0 flex-shrink-0 gap-4 mb-14" >
                                    <ClickCard percentage='0%' />
                                    <AvergeTimeCard avergeTimeSpent='1.8s' />
                                </div>
                                <div>
                                    <ul className='list-disc list-outside '>
                                        <li className="self-stretch flex-grow-0 flex-shrink-0 w-[562px] text-base text-left text-black">
                                            First dose action was easily found in quick time
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='w-1/2'>
                                <ImgCard imgName='img12' w="full" h="auto" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mb-10'>
                    <div className='mb-8'>
                        <p className="flex-grow-0 flex-shrink-0 text-2xl text-left text-black">The Variant flow</p>
                    </div>
                    <div className='mb-6'>
                        <p className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-black">
                            Need to examine each screen’s misclick rate to ensure users are finding what they need.
                        </p>
                    </div>

                    <div className='mb-6'>
                        <div className="flex justify-center items-start self-stretch flex-grow-0 flex-shrink-0 gap-4" >
                            <ClickCard percentage='8.3%' />
                            <AvergeTimeCard avergeTimeSpent='2.7s' />
                        </div>
                    </div>

                    <div>
                        <ul className='list-disc list-outside ml-8'>
                            <li className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-black mb-4">
                                The average time spent on screens is good but more than control flow
                            </li>
                            <li className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-black mb-4">
                                Zero bounce off rate with 100% completion success
                            </li>
                            <li className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-black">
                                Misclick rates is comparatively higher and needs to be examined every screen for improvements
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='mb-16'>
                    <div className='mb-8'>
                        <div className='mb-8'>
                            <p className="flex-grow-0 flex-shrink-0 text-2xl text-left text-black">Optimal Path Analysis</p>
                        </div>
                        <div className='mb-6'>
                            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1140px] text-base text-left text-black">
                                Analyzing usability of each screen and providing usability score to each and the inferences
                            </p>
                        </div>
                        <div className='flex'>
                            <div className='w-1/2 py-14'>
                                <div className="flex justify-center items-start self-stretch flex-grow-0 flex-shrink-0 gap-4 mb-14" >
                                    <ClickCard percentage='0%' />
                                    <AvergeTimeCard avergeTimeSpent='3.1s' />
                                </div>
                                <div>
                                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                                        <ul className="list-disc list-outside ml-8">
                                            <li className="self-stretch flex-grow-0 flex-shrink-0  text-base text-left text-black mb-8">
                                                Users very easily found the main button associated with task without any misclicks
                                            </li>
                                            <li className="self-stretch flex-grow-0 flex-shrink-0  text-base text-left text-[#00559a]">
                                                The icons played an important role of maintaining the focus
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='w-1/2'>
                                <ImgCard imgName='img13' w="full" h="auto" />
                            </div>
                        </div>
                    </div>
                    <div className='mb-8'>
                        <div className='flex items-center'>
                            <div className='w-1/2'>
                                <ImgCard imgName='img14' w="full" h="auto" />
                            </div>
                            <div className='w-1/2'>
                                <div className="flex justify-center items-start self-stretch flex-grow-0 flex-shrink-0 gap-4 mb-14" >
                                    <ClickCard percentage='0%' />
                                    <AvergeTimeCard avergeTimeSpent='4.6s' />
                                </div>
                                <div>
                                    <ul className='list-disc list-outside ml-8'>
                                        <li className="self-stretch flex-grow-0 flex-shrink-0 w-[562px] text-base text-left text-black">
                                            Easy selection when three options are available
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center'>
                            <div className='w-1/2'>
                                <div className="flex justify-center items-start self-stretch flex-grow-0 flex-shrink-0 gap-4 mb-14" >
                                    <ClickCard percentage='33%' />
                                    <AvergeTimeCard avergeTimeSpent='3.6s' />
                                </div>
                                <div>
                                    <ul className='list-disc list-outside '>
                                        <li className="self-stretch flex-grow-0 flex-shrink-0 w-[562px] text-base text-left text-black mb-4">
                                            Misclicks were found with user confusing between clicking of first dose and second dose.
                                        </li>
                                        <li className="self-stretch flex-grow-0 flex-shrink-0 w-[562px] text-base text-left text-[#00559a] mb-4 ">
                                            Reason being sudden release of information on the same page
                                        </li>
                                        <li className="self-stretch flex-grow-0 flex-shrink-0 w-[562px] text-base text-left text-[#00559a] mb-4 ">
                                            Selection of dose should be made on a separate page to avoid overwhelming of users
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='w-1/2'>
                                <ImgCard imgName='img15' w="full" h="auto" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mb-16'>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-10">
                        <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-black">
                            User rating Comparison
                        </p>
                        <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-8">
                            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[43.3125rem] gap-4">
                                <div className="flex justify-between items-start flex-grow-0 flex-shrink-0 w-[43.3125rem] relative">
                                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
                                        <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#abb0b0]">
                                            Control Flow
                                        </p>
                                    </div>
                                    <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#abb0b0]">Variant Flow</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-6 px-4">
                                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-20">
                                    <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
                                        <p className="flex-grow-0 flex-shrink-0 text-4xl font-bold text-left text-black">9.8</p>
                                        <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#abb0b0]">Avg</p>
                                    </div>
                                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-8 py-3 rounded-3xl bg-[#d1eef7]">
                                        <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">
                                            Did the experience meet your expectations ?
                                        </p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
                                        <p className="flex-grow-0 flex-shrink-0 text-4xl font-bold text-left text-black">9.8</p>
                                        <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#abb0b0]">Avg</p>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-20">
                                    <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
                                        <p className="flex-grow-0 flex-shrink-0 text-4xl font-bold text-left text-black">9.8</p>
                                        <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#abb0b0]">Avg</p>
                                    </div>
                                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-8 py-3 rounded-3xl bg-[#d1eef7]">
                                        <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">
                                            Did the experience meet your expectations ?
                                        </p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
                                        <p className="flex-grow-0 flex-shrink-0 text-4xl font-bold text-left text-black">9.8</p>
                                        <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#abb0b0]">Avg</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mb-16'>
                    <div className='mb-8'>
                        <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-black">Learnings</p>
                    </div>
                    <div className='mb-4'>
                        <ul className='list-disc list-outside '>
                            <li className="self-stretch flex-grow-0 flex-shrink-0 w-[562px] text-base text-left text-black mb-4">
                                Both the flows stood on 100% completion success
                            </li>
                            <li className="self-stretch flex-grow-0 flex-shrink-0 w-[562px] text-base text-left text-black mb-4">
                                Control Flow A was more successful than the Variant flow B in terms of usability and intuitive nature
                            </li>
                            <li className="self-stretch flex-grow-0 flex-shrink-0 w-[562px] text-base text-left text-[#00559a] mb-4 ">
                                However variant flow B landing page was much better in getting the task done with the icons present along with action
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="self-stretch flex-grow-0 flex-shrink-0 text-xl text-left text-[#00559a]">
                            A Hybrid flow here can be a better option comprising of landing page with icons and separate page
                            for each sub actions to avoid misclicks.
                        </p>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-10">
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-6">
                            <p className="flex-grow-0 flex-shrink-0 text-2xl text-left text-black">Proposed Hybrid flow</p>
                            <p className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-black">
                                A Hybrid flow was suggested with icons for landing pages to keep focus and reduce average time
                                of completion along separate page for each sub actions to avoid mis-clicks which was a major
                                concern in the whole testing result
                            </p>
                        </div>
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-10">
                            <ControlFlowImgCard imgOne='img16' imgTwo='img17' />
                            <ControlFlowImgCard imgOne='img18' imgTwo='img19' />
                        </div>
                        <p className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-black">
                            This was a very unique experience among all A/B testing and Usability testing done in my
                            research career because we were expecting a better flow to get from this result but we got a
                            hybrid version of both the flows with all good components.
                        </p>
                    </div>
                </div>

            </div>
            <ProjectFooter next="/alpha" prev="/988" />
            <Footer />
        </div>
    )
}
