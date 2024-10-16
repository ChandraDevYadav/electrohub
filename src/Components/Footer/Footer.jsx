import React from 'react'
import { FaEnvelope, FaFacebook, FaHeadphones, FaInstagram, FaLinkedin, FaMap, FaTwitter } from 'react-icons/fa'
import { VscTriangleRight } from 'react-icons/vsc'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className=''>
            <div className='grid grid-cols-8 gap-x-4 gap-y-10 px-4 md:px-36 pt-10 md:pt-20 pb-10 md:pb-28 bg-[#141414]'>
            <div className='col-span-8 md:col-span-2'>
                <div className='flex justify-start items-center gap-2'>
                    <img src="/logo.png" className='w-14 h-14' alt="" />
                    <p className='text-white font-bold text-2xl'>ELECTRO <span className='text-red-600 text-3xl'>HUB</span></p>
                </div>
                <p className='text-white my-4'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur.</p>
                <p className='text-white font-bold text-lg'>Stay Connected</p>
                <div className='flex justify-start items-center gap-6 mt-6'>
                    <div className='bg-gray-800 p-3 hover:bg-red-600 rounded-md'><FaFacebook className='text-white text-xl' /></div>
                    <div className='bg-gray-800 p-3 hover:bg-red-600 rounded-md'><FaInstagram className='text-white text-xl' /></div>
                    <div className='bg-gray-800 p-3 hover:bg-red-600 rounded-md'><FaLinkedin className='text-white text-xl' /></div>
                    <div className='bg-gray-800 p-3 hover:bg-red-600 rounded-md'><FaTwitter className='text-white text-xl' /></div>
                </div>
            </div>
            <div className='col-span-4 md:col-span-2'>
                <div className='ml-4 md:ml-32'>
                    <p className='text-2xl font-bold text-white'>Quick Links</p>
                    <ul>
                        <Link href='' className='flex justify-start text-md font-medium mt-4 text-white items-center hover:text-red-600 gap-2'><VscTriangleRight className='text-red-600' />Home</Link>
                        <Link href='' className='flex justify-start text-md font-medium mt-4 text-white items-center hover:text-red-600 gap-2'><VscTriangleRight className='text-red-600' />About Us</Link>
                        <Link href='' className='flex justify-start text-md font-medium mt-4 text-white items-center hover:text-red-600 gap-2'><VscTriangleRight className='text-red-600' />Services</Link>
                        <Link href='' className='flex justify-start text-md font-medium mt-4 text-white items-center hover:text-red-600 gap-2'><VscTriangleRight className='text-red-600' />Blog</Link>
                        <Link href='' className='flex justify-start text-md font-medium mt-4 text-white items-center hover:text-red-600 gap-2'><VscTriangleRight className='text-red-600' />Contact Us</Link>
                    </ul>
                </div>
            </div>
            <div className='col-span-4 md:col-span-2'>
                <div className='ml-0 md:ml-16'> 
                    <p className='text-2xl font-bold text-white'>Our Services</p>
                    <ul>
                        <Link href='' className='flex justify-start text-md font-medium mt-4 text-white items-center hover:text-red-600 gap-2'><VscTriangleRight className='text-red-600' />Smartphone Repair</Link>
                        <Link href='' className='flex justify-start text-md font-medium mt-4 text-white items-center hover:text-red-600 gap-2'><VscTriangleRight className='text-red-600' />Laptop Repair</Link>
                        <Link href='' className='flex justify-start text-md font-medium mt-4 text-white items-center hover:text-red-600 gap-2'><VscTriangleRight className='text-red-600' />Desktop Repair</Link>
                        <Link href='' className='flex justify-start text-md font-medium mt-4 text-white items-center hover:text-red-600 gap-2'><VscTriangleRight className='text-red-600' />Tablet Repair</Link>
                        <Link href='' className='flex justify-start text-md font-medium mt-4 text-white items-center hover:text-red-600 gap-2'><VscTriangleRight className='text-red-600' />Smart Watch Repair</Link>
                    </ul>
                </div>
            </div>
            <div className='col-span-8 md:col-span-2'>
                <div className='flex justify-start items-center'>
                <div className='mx-4 md:mx-16 '>
                    <p className='text-2xl font-bold text-white'>Contact Us</p>
                    <ul>
                        <li className='flex justify-start text-md font-medium mt-4 text-white items-center gap-2'><FaMap className='text-red-600' />32 Main Street, Miami, <br /> Florida 19091, FL</li>
                        <Link href='' className='flex justify-start text-md font-medium mt-4 text-white items-center hover:text-red-600 gap-2'><FaHeadphones className='text-red-600' />666 888 0000 <br /> 444 888 0000</Link>
                        <Link href='' className='flex justify-start text-md font-medium mt-4 text-white items-center hover:text-red-600 gap-2'><FaEnvelope className='text-red-600' />needhelp@company.com <br /> company@gmail.com</Link>
                    </ul>
                </div>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-1 py-10 bg-[#3b3b3b]'>
            <div className='flex justify-center items-center'>
                <p className='text-white font-medium'>© 2024 Copyright by <span className='text-red-600'>Chandra</span></p>
            </div>
        </div>
        </div>
    )
}

export default Footer