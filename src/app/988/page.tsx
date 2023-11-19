/* eslint-disable */

import Footer from '@/components/Footer';
import ProjectFooter from '@/components/ProjectFooter/ProjectFooter';
import Nav from '@/components/nav/nav';

export default function Project1() {
    return (
        <div>
            <Nav />

            <div className="flex flex-col ml-48 mr-48 mb-16">
                <div className='flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[1136px] relative gap-12 mb-16'>
                    <p className='self-stretch flex-grow-0 flex-shrink-0 w-[1136px] text-4xl font-bold text-center text-black'>
                        988 - The National Suicide Prevention Lifeline of US
                    </p>
                    <div className='flex justify-between items-start flex-grow-0 flex-shrink-0 w-[1136px] relative'>
                        <div className='flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[558px] relative gap-4 py-10'>
                            <p className='flex-grow-0 flex-shrink-0 w-[558px] text-base text-left text-black'>
                                <span className='flex-grow-0 flex-shrink-0 w-[558px] text-base text-left text-black'>
                                    988, a new 3-digit hotline number in the United States, serves as a mental health
                                    service dedicated to offering crucial assistance to individuals when they require it
                                    most.{' '}
                                </span>
                                <br />
                                <br />
                                <span className='flex-grow-0 flex-shrink-0 w-[558px] text-base text-left text-black'>
                                    Beyond merely being a novel contact number, 988 presents us with the opportunity to
                                    reconsider our approach to addressing mental health concerns, substance use disorders,
                                    and suicide prevention within our communities. It represents a significant expansion of
                                    the current 10-digit health lifeline number.
                                </span>
                            </p>
                        </div>
                        <div className='flex-grow-0 flex-shrink-0 w-[484.68px] h-[310px] relative'>
                            <img
                                src='/works/988/image1.png'
                                className='w-[484.68px] h-[310px] absolute left-[-0.56px] top-[-0.56px] object-cover'
                            />
                        </div>
                    </div>
                </div>

                {/* card section */}
                <div
                    className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4 bg-white mb-16"
                    style={{ boxShadow: "0px 0px 8px 0 rgba(0,85,154,0.1)" }}
                >
                    <div className="flex justify-between items-start flex-grow-0 flex-shrink-0 w-[1136px]">
                        <div className="flex flex-col justify-center items-start flex-grow h-[70px] relative gap-2.5 px-5 py-2.5">
                            <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#000e10]">
                                Challenge
                            </p>
                            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#000e10]">
                                To make a product from scratch that would solve the problem of millions of people seeking
                                help related to mental health through a 3 digit hotline number.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between items-start flex-grow-0 flex-shrink-0 w-[1136px]">
                        <div className="flex flex-col justify-center items-start flex-grow h-[70px] relative gap-2.5 px-5 py-2.5">
                            <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#000e10]">
                                Sector
                            </p>
                            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#000e10]">
                                Public Sector, Mental Health
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-start flex-grow h-[70px] relative gap-2.5 px-5 py-2.5">
                            <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#000e10]">
                                My Role
                            </p>
                            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#000e10]">
                                Define, Ideate, Research, Design
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-start flex-grow h-[70px] relative gap-2.5 px-5 py-2.5">
                            <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#000e10]">
                                Project Duration
                            </p>
                            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#000e10]">4 weeks</p>
                        </div>
                    </div>
                </div>

                {/* Research Section */}
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-8 mb-8">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 h-9 relative">
                        <p className="absolute left-0 top-0 text-2xl font-bold text-left text-black">Research</p>
                    </div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1136px] text-base text-left text-black">
                            The important question to ask here was why Research is required?
                        </p>
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                            <ul className='list-disc list-outside ml-8'>
                                <li className="self-stretch flex-grow-0 flex-shrink-0 w-[1136px] text-base text-left text-black ">
                                    988 is a new feature yet be rolled out
                                </li>
                                <li className="self-stretch flex-grow-0 flex-shrink-0 w-[1136px] text-base text-left text-black">
                                    An existing 10 digit number for mental related help already existed but 988 requirement was
                                    much more
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Research plan */}
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-8 mb-16">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 h-9 relative">
                        <p className="absolute left-0 top-0 text-2xl font-bold text-left text-black">Research Plan</p>
                    </div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1136px] text-base text-left text-black">
                            As always I started with a Research plan that helps me guide through my entire research
                            process
                        </p>
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                            <ul className="list-disc list-outside ml-8">
                                <li className="self-stretch flex-grow-0 flex-shrink-0 w-[1136px] text-base text-left text-black">
                                    Timeline - timeline was strict and I had to choose my process efficiently keeping in mind
                                    the budget and resources.
                                </li>
                                <li className="self-stretch flex-grow-0 flex-shrink-0 w-[1136px] text-base text-left text-black">
                                    What I know - 988 is a 3-digit hotline number yet to be launched hence limited information.
                                </li>
                                <li className="self-stretch flex-grow-0 flex-shrink-0 w-[1136px] text-base text-left text-black">
                                    Being a new product, primary research was important , hence participant recruitment was to
                                    be started early.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>



                <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[1136px] relative mb-16">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-14">
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-12">
                            <p className="flex-grow-0 flex-shrink-0 w-[558px] text-base text-left text-black">
                                Since the information I had about 988 was not much and also recruitment of users took time,
                                so I started with secondary research, with 5Ws question.
                            </p>
                            <div
                                className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4 px-5 py-4 bg-white"
                                style={{ boxShadow: "0px 0px 8px 0 rgba(0,85,154,0.1)" }}
                            >
                                <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#000e10]">
                                    Key Takeaways
                                </p>
                                <ul className='list-disc list-outside ml-8'>

                                    <li className="flex-grow-0 flex-shrink-0 w-[558px] text-base text-left text-black mb-4">
                                        Who is affected by mental health problems and who participates in counselling?
                                    </li>
                                    <li className="flex-grow-0 flex-shrink-0 w-[558px] text-base text-left text-black mb-4">
                                        What issues are linked to mental health problems?
                                    </li>
                                    <li className="flex-grow-0 flex-shrink-0 w-[558px] text-base text-left text-black mb-4">
                                        Where does the counselling process typically occur?
                                    </li>
                                    <li className="flex-grow-0 flex-shrink-0 w-[558px] text-base text-left text-black mb-4">
                                        When do individuals typically experience mental health problems?
                                    </li>
                                    <li className="flex-grow-0 flex-shrink-0 w-[558px] text-base text-left text-black">
                                        Why has mental health emerged as a significant concern?
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <img
                        src="/works/988/image2.png"
                        className="flex-grow-0 flex-shrink-0 w-[497px] h-[590px] object-cover"
                    />
                </div>

                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1136px] text-base text-left text-black mb-16">
                    I encountered an abundance of insights from user interviews, secondary research, and feedback from
                    peers. To streamline the process of organizing this extensive dataset, I leveraged affinity
                    mapping as a means of prioritization.
                </p>

                <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 mb-16">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[497px] gap-10">
                        <div
                            className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4 px-5 py-4 bg-white"
                            style={{ boxShadow: "0px 0px 8px 0 rgba(0,85,154,0.1)" }}
                        >
                            <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#000e10]">
                                Key Takeaways
                            </p>
                            <ul className="list-disc list-outside ml-8">
                                <li className="self-stretch flex-grow-0 flex-shrink-0  text-base text-left text-black mb-4">
                                    Call centre staff and the Mobile Crisis Unit played vital roles
                                </li>
                                <li className="self-stretch flex-grow-0 flex-shrink-0 w-[457px] text-base text-left text-black mb-4">
                                    What sets 988 apart from 911 and its regulations
                                </li>
                                <li className="self-stretch flex-grow-0 flex-shrink-0 w-[457px] text-base text-left text-black mb-4">
                                    A surprising development was the creation of an additional group responsible for follow-up
                                    calls after the initial contact with the mental health seeker by the call center.
                                </li>
                                <li className="self-stretch flex-grow-0 flex-shrink-0 w-[457px] text-base text-left text-black">
                                    Verbiage is very important when dealing with people facing mental health crisis.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2.5"
                        style={{ filter: "drop-shadow(0px 0px 8px rgba(0,85,154,0.1))" }}
                    >
                        <img
                            src="/works/988/image3.png"
                            className="flex-grow-0 flex-shrink-0 w-[562.79px] h-[310.02px] object-none"
                        />
                    </div>
                </div>

                {/* Personas */}
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8 mb-16">
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                        <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-black">Personas</p>
                    </div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-8">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1136px] text-base text-left text-black">
                            Upon effectively categorizing insights, it became evident which end users should be our focus.
                            It turned out that there were two distinct personas -
                        </p>
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                            <ul className='list-disc list-outside ml-8'>
                                <li className="self-stretch flex-grow-0 flex-shrink-0 w-[1136px] text-base text-left text-black">
                                    <span className="self-stretch flex-grow-0 flex-shrink-0 w-[1136px] text-base font-bold text-left text-black">
                                        Call Centre Professionals
                                    </span>
                                    <span className="self-stretch flex-grow-0 flex-shrink-0 w-[1136px] text-base text-left text-black">
                                        {" "}
                                        - responsible for handling calls
                                    </span>
                                </li>
                                <li className="self-stretch flex-grow-0 flex-shrink-0 w-[1136px] text-base text-left text-black">
                                    <span className="self-stretch flex-grow-0 flex-shrink-0 w-[1136px] text-base font-bold text-left text-black">
                                        Mobile Crisis Unit -
                                    </span>
                                    <span className="self-stretch flex-grow-0 flex-shrink-0 w-[1136px] text-base text-left text-black">
                                        {" "}
                                        required for emergency situations
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 gap-12 mb-16">
                    <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                        <img src="/works/988/image4.png" className="flex-grow-0 flex-shrink-0 w-[550px] h-[670px] object-none" />
                        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#555]">
                            Call Centre Professional
                        </p>
                    </div>
                    <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                        <img
                            src="/works/988/image5.png"
                            className="flex-grow-0 flex-shrink-0 w-[550px] h-[670.02px] object-none"
                        />
                        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#555]">Mobile Crisis Unit</p>
                    </div>
                </div>

                {/* Journey Mapping */}
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8 mb-16">
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                        <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-black">
                            Journey Mapping
                        </p>
                    </div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1148px] text-base text-left text-black">
                            Since the research gave the idea of basic flow that each persona will take but to make the end
                            users experience smooth and easy it was important to understand each step of the flow, because
                            these health professionals would be exposed to numerous cases per day (12 million calls assume
                            to come in 988 per year by federal health officials).
                        </p>
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1148px] text-base text-left text-black">
                            Hence journey mapping was important at this point to get ideas of touch-points and associated
                            problems and to figure out opportunities like automation, condensed data etc wherever
                            applicable to improve the health professionals product experience.
                        </p>
                    </div>
                </div>

                <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 gap-12 mb-16">
                    <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-6">
                        <img
                            src="works/988/image6.png"
                            className="flex-grow-0 flex-shrink-0 w-[1136px] h-[640.19px] object-cover"
                        />
                    </div>
                </div>

                {/* Key Takeaways */}
                <div className='m-auto'>
                    <div
                        className="flex flex-col justify-start items-start flex-grow w-[702px] relative gap-4 px-5 py-4 bg-white mb-16"
                        style={{ boxShadow: "0px 0px 8px 0 rgba(0,85,154,0.1)" }}
                    >
                        <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#000e10]">
                            Key Takeaways
                        </p>
                        <ul className="list-disc list-outside ml-8">
                            <li className="flex-grow-0 flex-shrink-0 w-[558px] text-base text-left text-black mb-4">
                                There are two teams , Call centre and Mobile Crisis Unit (MCU)
                            </li>
                            <li className="flex-grow-0 flex-shrink-0 w-[558px] text-base text-left text-black mb-4">
                                Severity of cases is decided by the the call centre
                            </li>
                            <li className="flex-grow-0 flex-shrink-0 w-[558px] text-base text-left text-black mb-4">
                                High severity cases requires immediate action of MCU
                            </li>
                            <li className="flex-grow-0 flex-shrink-0 w-[558px] text-base text-left text-black mb-4">
                                Two portals were needed one for call centre professional and other for Mobile crisis unit
                            </li>
                            <li className="flex-grow-0 flex-shrink-0 w-[558px] text-base text-left text-black">
                                MCU unit would need the product in the devices which is portable like mobile/tablets as they
                                would be in a rush.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4 mb-16">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1148px] text-base text-left text-black">
                        We were on a very tight deadline and developers needed to start building soon. At this point it
                        was critical to decide further process which should be both non-time consuming and effective.
                        Our team was faced with following questions -
                    </p>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                        <ul className='list-disc list-inside ml-4'>
                            <li className="self-stretch flex-grow-0 flex-shrink-0 w-[1148px] text-base text-left text-black mb-4">
                                Should we design mobile first?
                            </li>
                            <li className="self-stretch flex-grow-0 flex-shrink-0 w-[1148px] text-base text-left text-black mb-4">
                                Should we go for sketches , low-fi wireframe then hi -fi wireframe?
                            </li>
                            <li className="self-stretch flex-grow-0 flex-shrink-0 w-[1148px] text-base text-left text-black">
                                By when we can have a prototype to demo and test?
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-6 mb-8">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 h-9 relative">
                        <p className="absolute left-0 top-0 text-2xl font-bold text-left text-black">Sketches</p>
                    </div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-8">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1148px] text-base text-left text-black">
                            Being good with sketches, I focused on rapid sketch iterations for call centre portal as it
                            had many screens. This helped with quick brainstorming and directional discussions.
                        </p>
                    </div>
                </div>

                <div className='mb-16'>
                    <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 space-y-[-80px]">
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                            <img
                                src="/works/988/image7.png"
                                className="flex-grow-0 flex-shrink-0 w-[800px] h-[809.64px] object-cover"

                            />
                        </div>
                        <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 gap-10">
                            <div
                                className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[556px] relative gap-4 px-5 py-4 bg-white"
                                style={{ boxShadow: "0px 0px 8px 0 rgba(0,85,154,0.1)" }}
                            >
                                <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#000e10]">
                                    Key Takeaways
                                </p>
                                <ul className='list-disc list-outside ml-8'>

                                    <li className="flex-grow-0 flex-shrink-0 w-[558px] text-base text-left text-black mb-4">
                                        Action toggle feature as per need of call center professional
                                    </li>
                                    <li className="flex-grow-0 flex-shrink-0 w-[558px] text-base text-left text-black mb-4">
                                        Assessment aid to decide risk factor
                                    </li>
                                    <li className="flex-grow-0 flex-shrink-0 w-[558px] text-base text-left text-black mb-4">
                                        Booking appointments, referrals , hospital beds.
                                    </li>
                                    <li className="flex-grow-0 flex-shrink-0 w-[558px] text-base text-left text-black">
                                        Dispatching MCU as main function on high risk cases.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wireframes */}
                <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-6 mb-8">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 h-[30.82px] relative">
                        <p className="absolute left-0 top-0 text-[20.545307159423828px] font-bold text-left text-black">
                            Wireframes
                        </p>
                    </div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[27.393739700317383px]">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1148px] text-[13.696869850158691px] text-left text-black">
                            Since MCU Portal was mobile and less screens were required, I focused exclusively on
                            wireframing high impact screens and specific modules whose functionality needed to be laid out
                            for our developers.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative space-y-[-64px] mb-16">
                    <div
                        className="self-stretch flex-grow-0 flex-shrink-0 h-[703.07px] relative bg-white"
                        style={{ boxShadow: "0px 0px 8px 0 rgba(0,85,154,0.1)" }}
                    >
                        <img
                            src="/works/988/image8.png"
                            className="w-[1135.98px] h-[703.07px] absolute left-[-0.71px] top-[-0.71px] object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
                        <div
                            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4 px-5 py-4 bg-white"
                            style={{ boxShadow: "0px 0px 8px 0 rgba(0,85,154,0.1)" }}
                        >
                            <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#000e10]">
                                Key Takeaways
                            </p>
                            <ul className='list-disc list-outside ml-8'>
                                <li className="flex-grow-0 flex-shrink-0 w-[558px] text-base text-left text-black mb-4">
                                    Linking of notes from call centre to MCU for critical live information
                                </li>
                                <li className="flex-grow-0 flex-shrink-0 w-[558px] text-base text-left text-black mb-4">
                                    Map feature for tracking location
                                </li>
                                <li className="flex-grow-0 flex-shrink-0 w-[558px] text-base text-left text-black">
                                    Selecting bed in nearby hospitals
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* MVP */}
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8 mb-16">
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                        <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-black">The MVP</p>
                    </div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1148px] text-base text-left text-black">
                            Even we came up with several ideas that could feature on the product , but it was important to
                            select those that met business goals and also can be completed in the deadline.
                        </p>
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                            <ul className='list-disc list-outside ml-8'>
                                <li className="self-stretch flex-grow-0 flex-shrink-0 w-[1148px] text-base text-left text-black mb-4">
                                    Capturing of information of the caller
                                </li>
                                <li className="self-stretch flex-grow-0 flex-shrink-0 w-[1148px] text-base text-left text-black mb-4">
                                    Assessment of the caller based on standard assessments and deciding severity
                                </li>
                                <li className="self-stretch flex-grow-0 flex-shrink-0 w-[1148px] text-base text-left text-black mb-4">
                                    Assigning of referrals , appointments , or even hospital beds if required
                                </li>
                                <li className="self-stretch flex-grow-0 flex-shrink-0 w-[1148px] text-base text-left text-black mb-4">
                                    Sending MCU unit in high severity cases and providing them with callers info
                                </li>
                                <li className="self-stretch flex-grow-0 flex-shrink-0 w-[1148px] text-base text-left text-black">
                                    Management of each individual case till satisfied cure
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8 mb-16">
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                        <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-black">
                            Unique Selling Proposition ( USP )
                        </p>
                    </div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1148px] text-base text-left text-black">
                            <span className="self-stretch flex-grow-0 flex-shrink-0 w-[1148px] text-base text-left text-black">
                                The ideation at this point was pretty obvious and was not very hard , infact any competitor
                                would come up with similar features if proper design process is followed.
                            </span>
                            <br />
                            <span className="self-stretch flex-grow-0 flex-shrink-0 w-[1148px] text-base text-left text-black">
                                But we needed to come up with a unique feature that would enhance the user experience. This
                                was achieved because of a deep research where I learnt that how difficult it was for the
                                Call centre professionals to manage all cases including follow-up, as follow up was critical
                                with mental crisis patient.
                            </span>
                        </p>
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                            <ul className='list-disc list-outside ml-8'>
                                <li className="self-stretch flex-grow-0 flex-shrink-0 w-[1148px] text-base text-left text-black mb-3">
                                    A case management feature was needed where all cases would be categorized as per severity
                                </li>
                                <li className="self-stretch flex-grow-0 flex-shrink-0 w-[1148px] text-base text-left text-black mb-3">
                                    The journey of each case can be seen
                                </li>
                                <li className="self-stretch flex-grow-0 flex-shrink-0 w-[1148px] text-base text-left text-black mb-3">
                                    Further actions can be added like appointments , referrals after getting feedback on current
                                    actions from patients
                                </li>
                                <li className="self-stretch flex-grow-0 flex-shrink-0 w-[1148px] text-base text-left text-black">
                                    Social media tracking
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='m-auto mb-16'>
                    <img src="/works/988/image9.png" className="w-[765.5px] h-[430.59px] object-cover" />
                </div>

                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8 mb-16">
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                        <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-black">
                            Overall Ideation Highlights
                        </p>
                    </div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                            <ul className="list-disc list-outside ml-8">
                                <li className="self-stretch flex-grow-0 flex-shrink-0 w-[1148px] text-base text-left text-black mb-4">Separate portal for each of Call centre professional and MCU</li>
                                <li className="self-stretch flex-grow-0 flex-shrink-0 w-[1148px] text-base text-left text-black mb-4">Follow up feature for case management</li>
                                <li className="self-stretch flex-grow-0 flex-shrink-0 w-[1148px] text-base text-left text-black">Live linking of data between two teams</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[1169px] relative gap-2.5 mb-8">
                        <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-black">Mockups</p>
                    </div>
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[1169px] relative gap-2.5">
                        <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-black">
                            Call Centre portal
                        </p>
                    </div>
                    <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-6">
                        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-14">
                            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[681.98px] relative gap-2">
                                <img
                                    src="/works/988/image10.png"
                                    className="flex-grow-0 flex-shrink-0 w-[650px] h-[405px] rounded-[10px] object-cover"

                                />
                                <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[21px] relative gap-2.5">
                                    <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#555]">
                                        Selecting MCU unit for high severity cases
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 gap-10">
                                <div className="flex flex-col justify-end items-start self-stretch flex-grow-0 flex-shrink-0 w-[651px] relative gap-2">
                                    <img
                                        src="/works/988/image11.png"
                                        className="flex-grow-0 flex-shrink-0 w-[650.88px] h-[405px] rounded-[10px] object-cover"
                                    />
                                    <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                                        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#555]">
                                            Case Management of callers
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-end items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
                                    <img
                                        src="/works/988/image12.png"
                                        className="flex-grow-0 flex-shrink-0 w-[597.45px] h-[405px] rounded-[10px] object-cover"
                                    />
                                    <div className="flex justify-center items-center flex-grow w-[597px] relative gap-2.5">
                                        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#555]">
                                            Assigning of appointment
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
                                <img
                                    src="/works/988/image13.png"
                                    className="flex-grow-0 flex-shrink-0 w-[652.02px] h-[405px] rounded-[10px] object-cover"
                                />
                                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[652px] h-[21px] relative gap-2.5">
                                    <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#555]">
                                        Callers list with severity status
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mb-16'>
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[1169px] relative gap-2.5">
                        <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-black">
                            Mobile crisis unit portal
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-16">
                        <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
                            <img
                                src="/works/988/image14.png"
                                className="flex-grow-0 flex-shrink-0 w-[350px] h-[734.92px] object-none"
                            />
                            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[21px] relative gap-2.5">
                                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#555]">Home</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-start flex-grow-0 flex-shrink-0 w-[1287px]">
                            <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
                                <img
                                    src="/works/988/image15.png"
                                    className="flex-grow-0 flex-shrink-0 w-[350px] h-[693.49px] object-cover"
                                />
                                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[21px] relative gap-2.5">
                                    <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#555]">
                                        Referral booking flow
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
                                <img
                                    src="/works/988/image16.png"
                                    className="flex-grow-0 flex-shrink-0 w-[350px] h-[690.28px] object-cover"
                                />
                                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[21px] relative gap-2.5">
                                    <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#555]">
                                        Map to reach caller
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
                                <img
                                    src="/works/988/image17.png"
                                    className="flex-grow-0 flex-shrink-0 w-[350px] h-[690.28px] object-cover"
                                />
                                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[21px] relative gap-2.5">
                                    <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#555]">
                                        Action page for MCU
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='mb-16'>
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-8">
                            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                                <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-black">
                                    Challenges and Compromises
                                </p>
                            </div>
                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                                <p className="self-stretch flex-grow-0 flex-shrink-0  text-base text-left text-black">
                                    Unfortunately, a primary hurdle we face is the scarcity of resources and the daily time
                                    constraints. Given these challenges, we frequently find ourselves revising our designs to
                                    align with both technical constraints and tight schedules, all while ensuring enhanced user
                                    value.
                                </p>
                                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                                    <ul className="list-disc list-outside ml-8">
                                        <li className="self-stretch flex-grow-0 flex-shrink-0  text-base text-left text-black mb-4">
                                            Due to the tight deadline, we couldn't implement all the functionalities we brainstormed
                                            during ideation, such as the in-depth social listening feature to access callers' Facebook
                                            accounts.
                                        </li>
                                        <li className="self-stretch flex-grow-0 flex-shrink-0 w-[1136px] text-base text-left text-black mb-4">
                                            As the sole Researcher and UX Designer, the initial two weeks were solely dependent on me,
                                            and it was hectic.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mb-16'>
                    <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-2.5">
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8 ">
                            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                                <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-black">
                                    The Learnings
                                </p>
                            </div>
                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                                <p className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-black">
                                    Every project experience comes with its own set of lessons, and this one was no exception.
                                </p>
                                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                                    <ul className='list-disc list-outside ml-8'>
                                        <li className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-black mb-4">
                                            This particular experience was special because I was accountable for the entire product,
                                            right from research to development. It was a significant responsibility, but I managed it
                                            with maximum efficiency.
                                        </li>
                                        <li className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-black mb-4">
                                            I gained insights into planning a product that needed to be delivered within a tight
                                            timeframe and learned how to allocate time effectively across research, design, and
                                            development phases.
                                        </li>
                                        <li className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-black mb-4">
                                            I realized the importance of early engagement with developers to assess the feasibility of
                                            design and its implementation.
                                        </li>
                                        <li className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-black">
                                            Involving the entire team in all stages, even if they aren't experts in a particular area,
                                            like including developers in brainstorming sessions to generate ideas, proved crucial.
                                            This approach helps maintain unity and team spirit.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-2.5">
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8">
                        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                            <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-black">
                                Conclusion
                            </p>
                        </div>
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                            <p className="self-stretch flex-grow-0 flex-shrink-0  text-base text-left text-black">
                                We successfully did the demo of our product to the leadership team and was ready to be
                                deployed.
                            </p>
                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                                <ul className='list-disc list-outside ml-8'>
                                    <li className="self-stretch flex-grow-0 flex-shrink-0  text-base text-left text-black">
                                        We were prepared ahead of the 988 launch date.
                                    </li>
                                    <li className="self-stretch flex-grow-0 flex-shrink-0  text-base text-left text-black">
                                        We unified all mental health facilities under one umbrella.
                                    </li>
                                    <li className="self-stretch flex-grow-0 flex-shrink-0  text-base text-left text-black">
                                        We introduced new features, such as comprehensive social listening, for inclusion in the
                                        2.0 launch.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <ProjectFooter prev='' next='/vaccine' />
            <Footer />


        </div>
    );
}
