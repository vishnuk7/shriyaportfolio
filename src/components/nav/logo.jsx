import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/">
            <div>
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-primary">Shriya Shukla</span>
                <p className="text-light-text">UX Researcher & Designer</p>
            </div>
        </Link>
    )
}
