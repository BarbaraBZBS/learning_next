import Link from 'next/link';

export default function firstPost() {
    return <>
        <h1>First Post</h1>
        <h2>
            <Link href="/">Back to Home</Link>
        </h2>
    </>
}