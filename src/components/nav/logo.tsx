import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/">
            <div className="flex gap-5">
                <div>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary">Shriya Shukla</span>
                    <p className="text-light-text">UX Researcher & Designer</p>
                </div>
                <div>
                    <svg width="2" height="60" viewBox="0 0 2 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 0L1 60" stroke="#ABB0B0" />
                    </svg>
                </div>
            </div>
        </Link>
    )
}
