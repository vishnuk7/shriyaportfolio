import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/">
            <div className="flex gap-5">
                <div>
                    <p className="text-2xl font-bold text-left text-[#362e94]">SS</p>

                </div>
                {/* <div>
                    <svg width="2" height="60" viewBox="0 0 2 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 0L1 60" stroke="#ABB0B0" />
                    </svg>
                </div> */}
            </div>
        </Link>
    )
}
