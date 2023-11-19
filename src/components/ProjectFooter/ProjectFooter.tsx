/* eslint-disable */

import Link from 'next/link'
import React from 'react'

interface ProjectFooterProps {
  prev: string,
  next: string
}

interface MyLinkProps {
  linkName: string;
  children: React.ReactNode;
}

const MyLink: React.FC<MyLinkProps> = ({ linkName, children }) => {
  const isLinkActive = linkName.length > 0;
  const linkClasses = isLinkActive
    ? 'cursor-pointer text-[#000e10]'
    : 'cursor-not-allowed text-[#BDBDBD]';

  return (
    isLinkActive
      ? <Link href={linkName} className={`flex-grow-0 flex-shrink-0 text-sm text-left ${linkClasses}`}>{children}</Link>
      : <span className={`flex-grow-0 flex-shrink-0 text-sm text-left ${linkClasses}`}>{children}</span>
  );
};



export default function ProjectFooter({ next, prev }: ProjectFooterProps) {

  return (
    <div>
      <div className="flex justify-between items-start flex-grow-0 flex-shrink-0  relative px-10 py-4 bg-neutral-200">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-10">
          <svg
            width={25}
            height={24}
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
            preserveAspectRatio="none"
          >
            <g clip-path="url(#clip0_1435_183)">
              <path
                d="M15.6334 16.59L11.0534 12L15.6334 7.41L14.2234 6L8.22339 12L14.2234 18L15.6334 16.59Z"
                fill="#000E10"
              />
            </g>
            <defs>
              <clippath id="clip0_1435_183">
                <rect width={24} height={24} fill="white" transform="translate(0.223389)" />
              </clippath>
            </defs>
          </svg>
          <MyLink linkName={prev}>Previous Project</MyLink>
        </div>
        <Link href="/">
          <svg
            width={25}
            height={24}
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
            preserveAspectRatio="none"
          >
            <g clip-path="url(#clip0_1435_188)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.72339 3V11H11.7234V3H3.72339ZM9.72339 9H5.72339V5H9.72339V9ZM3.72339 13V21H11.7234V13H3.72339ZM9.72339 19H5.72339V15H9.72339V19ZM13.7234 3V11H21.7234V3H13.7234ZM19.7234 9H15.7234V5H19.7234V9ZM13.7234 13V21H21.7234V13H13.7234ZM19.7234 19H15.7234V15H19.7234V19Z"
                fill="#000E10"
              />
            </g>
            <defs>
              <clippath id="clip0_1435_188">
                <rect width={24} height={24} fill="white" transform="translate(0.723389)" />
              </clippath>
            </defs>
          </svg>
        </Link>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-10">
          <MyLink linkName={next}>Next Project</MyLink>
          <svg
            width={25}
            height={24}
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
            preserveAspectRatio="none"
          >
            <g clip-path="url(#clip0_1435_195)">
              <path
                d="M8.81335 16.59L13.3934 12L8.81335 7.41L10.2234 6L16.2234 12L10.2234 18L8.81335 16.59Z"
                fill="#000E10"
              />
            </g>
            <defs>
              <clippath id="clip0_1435_195">
                <rect width={24} height={24} fill="white" transform="translate(0.223389)" />
              </clippath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}
