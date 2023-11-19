import Image from 'next/image';

import Nav from '@/components/nav/nav'
import Link from 'next/link';
import Footer from '@/components/Footer';
// import NavItem from "@/components/nav/nav-item";


export default function Home() {
  return (
    <div>
      <Nav />
      <div className="ml-48 mr-48">
        <div className="flex">
          <div className='flex-auto w-1/2'>
            <div className="mb-8">
              <p className="text-base">Hi, I’m Shriya 👋🏻</p>
            </div>

            <div className="text-2xl mb-6">
              <p>I <span className="font-bold">lead</span> teams and <span className="font-bold">design</span></p>
              <p>products that people love</p>
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
              <img src="/hero.svg" alt="hero image" />
              {/* <Image src="/hero.svg" alt="hero image"  fill /> */}
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="mt-16">

          <div className="mb-12">
            <p className="text-4xl font-bold">SELECTED WORK</p>
            <p className="mt-8">Have a look around some of my selected projects that created impact.</p>
          </div>

          <div className="mb-16">
            <Link href="/988" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-10">
              {/* <Image src="/988L.png" alt="hero image" className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"  /> */}
              <div className="w-full h-full">
                <img className="object-cover w-full rounded-t-lg h-full md:h-auto md:rounded-none md:rounded-s-lg" src="/988L.png" alt="" />
              </div>
              <div className="flex flex-col justify-between mx-10 my-8 leading-normal">
                <div className="mb-6">
                  <h5 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 ">988 - The National Suicide Prevention Lifeline of US</h5>
                  <p className="mb-3 font-normal text-card-text">A Portal for frontline mental health workers to expand their reach.</p>
                </div>
                <div>
                  <span className="bg-blue-100 text-blue-800 text-base font-medium me-2 px-4 py-1 rounded-full mr-3">Product</span>
                  <span className="bg-green-100 text-green-800 text-base font-medium me-2 px-4 py-1 rounded-full">Healthcare</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="mb-16">
            <Link href="/vaccine" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-10">
              {/* <Image src="/988L.png" alt="hero image" className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"  /> */}
              <div className="w-full h-full">
                <img className="object-cover w-full rounded-t-lg h-full md:h-auto md:rounded-none md:rounded-s-lg" src="/VaccineL.png" alt="" />
              </div>
              <div className="flex flex-col justify-between mx-10 my-8 leading-normal">
                <div className="mb-6">
                  <h5 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 ">Vaccine Appointment Flow Redesign</h5>
                  <p className="mb-3 font-normal  text-card-text">A/B testing to redesign and improve a vaccine appointment flow.</p>
                </div>
                <div>
                  <span className="bg-blue-100 text-blue-800 text-base font-medium me-2 px-4 py-1 rounded-full mr-3">Public Sector</span>
                  <span className="bg-green-100 text-green-800 text-base font-medium me-2 px-4 py-1 rounded-full">Healthcare</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="mb-16">
            <Link href="/alpha" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-10">
              {/* <Image src="/988L.png" alt="hero image" className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"  /> */}
              <div className="w-full h-full">
                <img className="object-cover w-full rounded-t-lg h-full md:h-auto md:rounded-none md:rounded-s-lg" src="/alpha.png" alt="" />
              </div>
              <div className="flex flex-col justify-between mx-10 my-8 leading-normal">
                <div className="mb-6">
                  <h5 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 ">ALPHA - All Licensing & Permitting Hub</h5>
                  <p className="mb-3 font-normal  text-card-text">A Web application for your Gateway to Streamlined Licensing and Permits Solutions.</p>
                </div>
                <div>
                  <span className="bg-blue-100 text-blue-800 text-base font-medium me-2 px-4 py-1 rounded-full mr-3">Product</span>
                  <span className="bg-green-100 text-green-800 text-base font-medium me-2 px-4 py-1 rounded-full">Licensing</span>
                </div>
              </div>
            </Link>
          </div>

        </div>

        {/* Pitch */}
        <section className="mb-16">
          <div className="mt-16">
            <p className="text-6xl font-bold">LET’S <span className="text-blue-800">CREATE</span> SOMETHING </p>
            <p className="text-6xl font-bold">BEAUTIFUL TOGETHER 🤝</p>
          </div>

          <div className="mt-8 w-2/3">
            I am looking forward to talk about exciting opportunities and also open to exploring consulting and freelance opportunities. I love meeting and talking to new people. Or just want to say Hi? Feel free to reach out 👋
          </div>
        </section>


      </div>
      <Footer />
    </div>
  );
}
