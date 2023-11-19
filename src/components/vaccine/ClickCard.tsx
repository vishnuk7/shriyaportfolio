import React from 'react'

interface ClickCardProps {
    percentage: string
}

export default function ClickCard({ percentage }: ClickCardProps) {
    return (
        <div
            className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4 px-6 py-4 rounded bg-white"
            style={{ boxShadow: "0px 1px 2px 0 #ddd", borderBottom: '4px solid #e33f43' }}
        >
            <div className="flex-grow-0 flex-shrink-0">
                <div className="flex flex-col justify-start items-start gap-2">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
                        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#394041]">
                            Mis-click Average
                        </p>
                        <p className="flex-grow-0 flex-shrink-0 text-[32px] font-bold text-left text-[#000e10]">
                            {percentage}
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
                    <path
                        d="M9.33337 3.55533L9.33337 25.5553L14.7917 20.3626L19.0677 30.222L22 28.8887L17.5938 19.1569L17.599 19.1543L25.3334 18.4876L9.33337 3.55533ZM12 9.69074L19.1302 16.347L17.3724 16.498L16.9454 16.5345L16.5495 16.7038L13.75 17.9043L13.3099 18.0944L12.9636 18.4251L12 19.3392V9.69074Z"
                        fill="#002461"
                        fill-opacity="0.9"
                    />
                </svg>
            </div>

        </div>
    )
}
