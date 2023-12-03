"use client"
import Nav from '@/components/nav/nav'
import Link from 'next/link';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';
// import NavItem from "@/components/nav/nav-item";



export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    // Assuming you want to navigate to '/about' page
    router.push('/contact');
  };

  const ref = useRef(null);
  React.useEffect(() => {
    import("@dotlottie/player-component");
  });

  return (
    <div>
      <Nav />
      <div className="mx-[9.375rem]">
        <div className="flex">
          <div className='flex-auto w-1/2'>
            <div className="mb-8">
              <p className="flex items-center flex-grow-0 flex-shrink-0 text-5xl font-medium text-left text-[#4f63dc]">
                Hi, I’m Shriya 👋🏻
                {/* <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand%20Medium-Light%20Skin%20Tone.png" alt="Waving Hand Medium-Light Skin Tone" width="50" height="50" className='inline' /> */}
              </p>
            </div>

            <div className="text-2xl mb-6">
              <p>I <span className="font-bold">lead</span> teams and <span className="font-bold">design</span> products that people love</p>

            </div>

            <div className="text-base mb-6">
              <p>I have four years of experience in conceptualizing and developing digital</p>
              <p>products, aiding businesses and products in their growth journey.</p>
            </div>

            <div>
              My expertise lies in delivering comprehensive UX/UI design solutions, backed by thorough research for software products. I am deeply enthusiastic about enhancing the user experience and am committed to continuous learning. I am adept at achieving results while maintaining a superb equilibrium between aesthetics and functionality.
            </div>
          </div>
          <div className="w-1/2">
            <div className="w-full h-full flex justify-center items-center">
              <dotlottie-player
                autoplay
                loop
                ref={ref}
                mode="normal"
                src="/hero.lottie"
                style={{ height: '100%', width: '500px' }}
              />
              {/* <img src="/hero.svg" alt="hero image" /> */}
              {/* <Image src="/hero.svg" alt="hero image"  fill /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="mt-16 px-[9.375rem]" style={{ background: "linear-gradient(71deg, rgb(65 143 234 / 4%) 35%, rgb(129 65 234 / 4%) 100%)" }}>

        <div className="mb-12 pt-12">
          <p className="text-4xl font-bold text-[#394041]">SELECTED WORK</p>
          <p className="mt-8">Have a look around some of my selected projects that created impact.</p>
        </div>

        <div className="mb-16">
          <Link href="/988" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-10">
            {/* <Image src="/988L.png" alt="hero image" className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"  /> */}
            <div className="w-[35.1548rem]">
              <img className="object-cover w-[35.1548rem] h-[25.75rem] rounded-t-lg md:rounded-none md:rounded-s-lg" src="/988L.png" alt="" />
            </div>
            <div className="flex flex-col justify-between mx-[3.0716rem] my-[2.3037rem] leading-normal">
              <div className="mb-6">
                <h5 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 ">988 - The National Suicide Prevention Lifeline of US</h5>
                <p className="mb-3 font-normal text-card-text">A Portal for frontline mental health workers to expand their reach.</p>
              </div>
              <div>
                <span className="bg-[#EBF2F7] text-primary text-base font-medium me-2 px-4 py-1 rounded-full mr-3">Product</span>
                <span className="bg-[#EAF2EA] text-[#1B5E20] text-base font-medium me-2 px-4 py-1 rounded-full">Healthcare</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="mb-16">
          <Link href="/vaccine" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-10">
            {/* <Image src="/988L.png" alt="hero image" className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"  /> */}
            <div className="w-[35.1548rem]">
              <img className="object-cover w-[35.1548rem] h-[25.75rem] rounded-t-lg md:rounded-none md:rounded-s-lg" src="/VaccineL.png" alt="" />
            </div>
            <div className="flex flex-col justify-between mx-[3.0716rem] my-[2.3037rem] leading-normal">
              <div className="mb-6">
                <h5 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 ">Vaccine Appointment Flow Redesign</h5>
                <p className="mb-3 font-normal text-card-text">A/B testing to redesign and improve a vaccine appointment flow..</p>
              </div>
              <div>
                <span className="bg-[#EBF2F7] text-primary text-base font-medium me-2 px-4 py-1 rounded-full mr-3">Public Sector</span>
                <span className="bg-[#EAF2EA] text-[#1B5E20] text-base font-medium me-2 px-4 py-1 rounded-full">Healthcare</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="mb-16">
          <Link href="/alpha" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-10">
            {/* <Image src="/988L.png" alt="hero image" className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"  /> */}
            <div className="w-[35.1548rem]">
              <img className="object-cover w-[35.1548rem] h-[25.75rem] rounded-t-lg md:rounded-none md:rounded-s-lg" src="/alpha.png" alt="" />
            </div>
            <div className="flex flex-col justify-between mx-[3.0716rem] my-[2.3037rem] leading-normal">
              <div className="mb-6">
                <h5 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 ">ALPHA - All Licensing & Permitting Hub</h5>
                <p className="mb-3 font-normal text-card-text">A Web application for your Gateway to Streamlined Licensing and Permits Solutions</p>
              </div>
              <div>
                <span className="bg-[#EBF2F7] text-primary text-base font-medium me-2 px-4 py-1 rounded-full mr-3">Product</span>
                <span className="bg-[#EAF2EA] text-[#1B5E20] text-base font-medium me-2 px-4 py-1 rounded-full">Licensing</span>
              </div>
            </div>
          </Link>
        </div>

      </div>

      {/* Pitch */}
      <div className="mx-[9.375rem]">
        <section className="mb-16">
          <div className="mt-16">
            <p className="text-6xl font-bold">LET’S <span className="text-blue-800">CREATE</span> SOMETHING </p>
            <p className="text-6xl font-bold">BEAUTIFUL TOGETHER 🤝</p>
          </div>
          {/* <div className="mt-8 w-2/3">
            <div className='mb-8'>
              <p>I am looking forward to talk about exciting opportunities and also open to exploring consulting and freelance opportunities. I love meeting and talking to new people. Or just want to say Hi? Feel free to reach out 👋
              </p>
            </div>
            <div className='flex items-center gap-[18.75rem]'>
              <button onClick={handleClick} className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[50px] relative overflow-hidden gap-2 px-6 py-2 rounded bg-[#00559a]">
                  <p className="flex-grow-0 flex-shrink-0 text-base text-left text-white">Get In Touch</p>
                </button>
              <div className="flex">
                <div className='flex justify-center items-center rounded-full bg-assets w-9 h-9 opacity-50 mr-3 cursor-pointer'>
                  <a href="mailto:shriyush3004@gmail.com" target='_blank'><img src="/icons/email.svg" /></a>
                </div>
                <div className='flex justify-center items-center rounded-full bg-assets w-9 h-9 opacity-50 cursor-pointer'>
                  <a href="https://www.linkedin.com/profile/in/shriya-shukla/" target='_blank'><img src="/icons/linkedin.svg" /></a>
                </div>
              </div>
            </div>
          </div> */}
        </section>
      </div>



      <Footer />
    </div>
  );
}
