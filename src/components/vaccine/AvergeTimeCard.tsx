import React from 'react'

interface AvergeTimeCardProps {
    avergeTimeSpent: string
}

export default function AvergeTimeCard({ avergeTimeSpent }: AvergeTimeCardProps) {
    return (
        <div
            className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4 px-6 py-4 rounded bg-white"
            style={{ boxShadow: "0px 1px 2px 0 #ddd", borderBottom: '4px solid #e33f43' }}
        >
            <div className="flex-grow-0 flex-shrink-0 ">
                <div className="flex flex-col justify-start items-start gap-2">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
                        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#394041]">
                            Average Time Spent
                        </p>
                        <p className="flex-grow-0 flex-shrink-0 text-[32px] font-bold text-left text-[#000e10]">
                            {avergeTimeSpent}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-16 h-16 relative p-2 rounded-[50px] bg-[#e5e9ef]">
                <svg
                    width={32}
                    height={33}
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g clip-path="url(#clip0_1358_1437)">
                        <path d="M0 0.888672L32 0.888672V32.8887H0L0 0.888672Z" fill="#E5E9EF" />
                        <path
                            d="M15.9866 3.55533C8.62663 3.55533 2.66663 9.52866 2.66663 16.8887C2.66663 24.2487 8.62663 30.222 15.9866 30.222C23.36 30.222 29.3333 24.2487 29.3333 16.8887C29.3333 9.52866 23.36 3.55533 15.9866 3.55533ZM16 27.5553C10.1066 27.5553 5.33329 22.782 5.33329 16.8887C5.33329 10.9953 10.1066 6.22199 16 6.22199C21.8933 6.22199 26.6666 10.9953 26.6666 16.8887C26.6666 22.782 21.8933 27.5553 16 27.5553ZM16.6666 10.222H14.6666V18.222L21.6666 22.422L22.6666 20.782L16.6666 17.222V10.222Z"
                            fill="#002461"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_1358_1437">
                            <rect width={32} height={32} fill="white" transform="translate(0 0.888672)" />
                        </clipPath>
                    </defs>
                </svg>
            </div>

        </div>
    )
}
