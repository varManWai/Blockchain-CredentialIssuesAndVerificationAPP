import Link from 'next/link';

export default function NavBar() {
    return (
        <>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/groups">Groups</Link>
                </li>
                <li>
                    <Link href="/certificates">Certificates</Link>
                </li>
                <li>
                    <Link href="/badge">Badges</Link>
                </li>
            </ul>
        </>
    )
}