import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function LogIn() {
    return (
        <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
            <Head>
                <title>Netflix</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Image
                src="https://rb.gy/p2hphi"
                layout="fill"
                className="-z-10 !hidden opacity-60 sm:!inline"
                objectFit="cover"
                alt=''
            />
            <Link href='/'>
            <img
                src="https://rb.gy/ulxxee"
                className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
                width={150}
                height={150}
            />
            </Link>
            <form action="" className='relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14'>
                <h1 className='text-4xl font-semibold' >
                    Sign In
                </h1>
                <div className='space-y-4'>
                    <label className='inline-block w-full' htmlFor="">
                        <input type="email" placeholder='Email' className='input' />
                    </label>
                    <label className='inline-block w-full' htmlFor="">
                        <input type="password" placeholder='Password' className='input' />
                    </label>
                </div>
                <div>
                <Link href='/'>
                <button className='bg-[#e50914] py-3 font-semibold w-full rounded '>Sign In</button>
                </Link>
                </div>
                <div className='flex space-x-2'>
                    <h1 className='text-[gray]'>
                    New to Netflix ?
                    </h1>
                    <Link href='/register'>
                    <button className='text-white hover:underline'>Sign Up Now</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}
