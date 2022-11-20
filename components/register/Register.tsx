import { CheckIcon } from '@heroicons/react/outline'
import Head from 'next/head'
import Link from 'next/link'

export default function RegisterPlans() {
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
                    <button className='text-lg font-medium hover:underline'>Sign Out</button>
                </Link>
            </header>
            <main className='pt-56 mx-auto max-w-5xl px-5 pt-28 pb-12 transition-all md:px-20 md:pt-40'>
                <h1 className='mb-3 text-3xl font-medium '>Choose the plan that's right for you</h1>
                <ul>
                    <li className="flex items-center gap-x-2 text-lg">
                        <CheckIcon className="h-7 w-7 text-[#E50914]" /> Watch all you want.
                        Ad-free.
                    </li>
                    <li className="flex items-center gap-x-2 text-lg">
                        <CheckIcon className="h-7 w-7 text-[#E50914]" /> Recommendations
                        just for you.
                    </li>
                    <li className="flex items-center gap-x-2 text-lg">
                        <CheckIcon className="h-7 w-7 text-[#E50914]" /> Change or cancel
                        your plan anytime.
                    </li>
                </ul>
                {/* <div className='mt-4 flex flex-col space-y-4 mb-36'>
                    <div className='flex w-full items-center justify-end  md:w-3/5'>
                        <div className='planBox'>Basic </div>
                        <div className='planBox'>Premium</div>
                        <div className='planBox'>Standard</div>
                    </div>
                </div> */}
                {/* <Table /> */}
                {/* <table>
                    <tbody className='w-full'>
                        <tr>
                            <td> Monthly Price </td>
                            <td className="tableDataFeature">hi</td>
                            <td className="tableDataFeature">hi</td>
                            <td className="tableDataFeature">hi</td>
                        </tr>
                    </tbody>
                </table> */} 
                <div>

                </div>
                <div className='flex justify-start '>
                    <Link href='/plans'>
                    <button
                        className='mt-10 w-11/12 rounded bg-[#E50914] py-4 text-xl shadow hover:bg-[#f6121d] md:w-[420px] '
                    >
                        Next
                    </button>
                    </Link>
                </div>
            </main>
        </div>
    )
}
