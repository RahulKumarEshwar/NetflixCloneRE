import Head from "next/head";
import Link from "next/link";


export default function plans() {
    return (
        <div>
        <Head>
                <title>Netflix</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className='border-b border-white/10 bg-[#141414]'>
                <Link href='/'>
                    <img
                        src="https://rb.gy/ulxxee"
                        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
                        width={150}
                        height={150}
                    />
                </Link>
                <Link href='/login'>
                    <button className='text-lg font-medium hover:underline'>Go Back</button>
                </Link>
            </header>
            <main className='pt-56 mx-auto max-w-5xl px-5 pt-28 pb-12 transition-all md:px-20 md:pt-40'>
                <h1 className="text-3xl text-[red]/70 text-center font-bold">
               Plans page is still in progress...
                </h1>
            </main>
        </div>
    )
}
