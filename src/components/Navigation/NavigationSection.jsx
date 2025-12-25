import React from 'react'
import HomeIcon from '../HomeIcon'
import Link from 'next/link'

export default function NavigationSection() {

    const navigation = [
        { name: "Ghostwriting", href: "/ghostwriting" },
        { name: "Editing", href: "/editing" },
        { name: "Publishing", href: "/publishing" },
        { name: "Marketing", href: "/marketing" },
        { name: "Audiobook", href: "/audiobook" },
        { name: "About Us", href: "/about" },
        { name: "Contact Us", href: "/contact" },
    ];

    return (
        <div className='flex flex-row justify-between md:gap-0 lg:gap-1'>
            <div>
                <Link href="/" className='hidden lg:block border-2 border-black p-3 rounded-xl group hover:bg-[#1f2a44] hover:scale-95 transition-all duration-500'>
                    <div>
                        <HomeIcon color="black" className='lg:w-7 lg:h-7 xl:w-7.5 xl:h-7.5' />
                    </div>
                </Link>
            </div>
            <div>
                <div className='border-2 border-black p-3.75 rounded-xl flex flex-row md:gap-3 lg:gap-5  xl:gap-8'>
                    {
                        navigation.map((item, index) => (
                            <Link href={item.href} key={index} className='font-semibold  md:text-[12px] lg:text-[14px] xl:text-[16px]'>
                                {item.name}
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div>
                <div className='border-2 border-black p-3.75 rounded-xl text-center bg-[#EB6358] hover:bg-[#1f2a44] hover:scale-95 transition-all duration-500'>
                    <p className='text-white md:text-[12px] lg:text-[14px] xl:text-[17px] font-semibold'>Submit Your Manuscript</p>
                </div>
            </div>
        </div>
    )
}
