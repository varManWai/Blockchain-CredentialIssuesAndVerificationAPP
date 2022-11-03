import Link from 'next/link';

export default function Visitor() {
    return (
        <div>
            <h1>This is visitor nav bar</h1>
        </div>
    )
}

export function Student() {
    return (
        <div>
            <h1>this is student navigation bar</h1>
        </div>
    )
}

export function Educator() {
    return (
        <div>
            <h1>this is educator navigation bar</h1>
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
        </div>
    )
}