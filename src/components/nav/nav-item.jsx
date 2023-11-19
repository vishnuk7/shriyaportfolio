export default function NavItems({ text }) {
    return (
        <li>
            <a href="#" className="block text-center py-2 pl-3 pr-4 text-white bg-primary rounded " aria-current="page">{text}</a>
        </li>
    );
}
