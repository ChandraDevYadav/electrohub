import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6'
import { IoIosPlayCircle } from 'react-icons/io'
import { TfiAngleDoubleLeft, TfiAngleDoubleRight } from 'react-icons/tfi'
import { Link } from 'react-router-dom'

const BlogDetail = () => {
  return (
    <div>
      <div className="bg-cover bg-center px-4 md:px-36 py-4 md:py-24 relative"
        style={{ backgroundImage: "url('/page-header-bg.jpg')" }}>
        <div className="absolute inset-0 bg-red-500 bg-opacity-70"></div>

        <div className="relative flex justify-center items-center">
          <div>
            <p className="text-center text-4xl md:text-6xl font-bold text-white">
              How To Fix Broken Back Glass On Your Phone
            </p>
            <p className="text-center text-md md:text-xl mt-3 mx-6 md:mx-0 font-medium text-white">
              Professional Smartphone Laptop Repair Services in Germany Since 2000
            </p>
            <div className="flex justify-center items-center mt-3">
              <p className="text-white text-lg font-medium">
                <Link href="">Home </Link> // Service Detail
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='px-4 md:px-36 py-4 md:py-36'>
        <div class="grid grid-cols-8 gap-4">
          <div class="col-start-3 col-span-4">
            <div>
              <p className='mb-6'>There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by injected humour,
                or randomised words which don't look even slightly believable.
                If you are going to use a passage of Lorem Ipsum, you need to be sure there
                isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum
                generators on the Internet tend to repeat predefined chunks as necessary,</p>
              <p className='mb-6'>It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point of using
                Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
              <p className='mb-6'>As opposed to using 'Content here, content here', making it look like readable
                English. Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text,</p>
              <h1 className='text-2xl font-bold mb-6'>Keep Your Battery Health 100%</h1>
              <p className='mb-6'>As opposed to using 'Content here, content here', making it look like readable
                English. Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text,</p>
              <div className='bg-gray-300 border-l-[6px] border-l-red-600 px-10 py-12'>
                <p className='text-xl'>Duis aute irure dolor in reprehenderit in voluptate velit on esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
                <div className='flex justify-start items-center gap-2 mt-8'>
                  <div className='w-12 h-[2px] bg-red-600'></div>
                  <p className='text-xl font-semibold'>Markon Deo</p>
                </div>
              </div>
              <p className='mt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the, printer took a galley of
                type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>

            </div>
          </div>
          <div className="col-start-2 col-span-6 relative">
            <div>
              <img src="/blog-details-1-1.jpg" alt="" className="w-full h-auto object-cover rounded-lg" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative group">
                <button className="z-10 bg-red-600 text-white p-3 rounded-full text-3xl group-hover:bg-black group-hover:text-white transition-colors duration-300 ease-linear">
                  <IoIosPlayCircle className='text-5xl' />
                </button>
              </div>
            </div>

          </div>
          <div className='col-start-3 col-span-4'>
            <h1 className='text-2xl font-bold mt-6 mb-6'>Choose The Right Case Guard</h1>
            <p className='mb-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the, printer took
              a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            <p className='mb-6'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem laudantium, totam rem aperiam, eaque ipsa quae
              ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <p className=''>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
              qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,</p>
            <div className='flex justify-start items-center gap-4 mt-10 border-b-2 border-gray-300 pb-12'>
              <h1 className='text-2xl font-bold'>Tags :</h1>
              <button className='bg-red-600 text-white px-6 py-3 hover:bg-gray-300 font-semibold hover:text-black'>Repair</button>
              <button className='bg-red-600 text-white px-6 py-3 hover:bg-gray-300 font-semibold hover:text-black'>Smartphone</button>
            </div>
            <div className='flex justify-start items-center gap-4 mt-10 pb-12'>
              <h1 className='text-2xl font-bold'>Share  This :</h1>
              <div className='bg-red-600 p-3 rounded-full hover:bg-white'>
                <FaFacebook className='text-white text-2xl hover:text-red-600'/>
              </div>
              <div className='bg-red-600 p-3 rounded-full hover:bg-white'>
                <FaInstagram className='text-white text-2xl hover:text-red-600'/>
              </div>
              <div className='bg-red-600 p-3 rounded-full hover:bg-white'>
                <FaTwitter className='text-white text-2xl hover:text-red-600'/>
              </div>
            </div>
            <div className='flex justify-between items-center bg-gray-100 rounded-md px-6 py-4'>
              <div className='flex justify-center items-center gap-2'>
                <TfiAngleDoubleLeft/>
                <p className='font-semibold'>Previous</p>
              </div>
              <div className='flex justify-center items-center gap-2'>
              <p className='font-semibold'>Next</p>
                <TfiAngleDoubleRight/>
              </div>
            </div>
            <div className='flex justify-between items-start bg-gray-100 rounded-md px-6 py-10 mt-16'>
              <div className='flex justify-start items-center gap-2'>
                <img src="./author-img.jpg" alt="" className='w-full h-full rounded-full' />
              </div>
              <div className=''>
              <p className='font-bold text-xl'>Hasnat Jion</p>
              <p className='mt-1'>About Author</p>
              <p className='mt-3'>Duis aute irure dolor in reprehenderit in voluptate velit <br /> esse cillum
                 dolore eu fugiat nulla pariatur. <br /> Excepteur sint occaecat cupidatat non proident, sunt in culpa</p>
                <div className='flex justify-start items-center gap-5 mt-6'>
                <FaFacebook className='text-2xl'/>
                <FaInstagram className='text-2xl'/>
                <FaTwitter className='text-2xl'/>
                <FaLinkedin className='text-2xl'/>
                </div>
              </div>
            </div>
            <div className='mt-12'>
              <h1 className='text-4xl font-bold'>2 comments</h1>
              <div className='flex justify-around items-start bg-gray-100 rounded-md px-6 py-10 mt-16'>
              <div className='flex justify-start items-center gap-2'>
                <img src="./author-img.jpg" alt="" className='w-full h-full rounded-full' />
              </div>
              <div className=''>
                <div className='flex justify-between items-start'>
                  <div>
                  <p className='text-gray-500'>Aug 10, 2023 at 11:29 am</p>
                  <p className='font-bold text-xl mt-4'>Hasnat Jion</p>
                  </div>
                  <button className="relative bg-red-600 text-white mt-6 font-bold px-6 py-3 rounded-md overflow-hidden group">
              <span className="relative z-10 flex items-center gap-2">Reply <FaAnglesRight/></span>
              <div className="absolute inset-0 bg-[#171a1d] transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>
            </button>
                </div>
              <p className='mt-5'>Duis aute irure dolor in reprehenderit in voluptate velit <br /> esse cillum
                 dolore eu fugiat nulla pariatur.</p>
              </div>
            </div>
              <div className='flex justify-around items-start bg-gray-100 rounded-md px-6 py-10 mt-12'>
              <div className='flex justify-start items-center gap-2'>
                <img src="./author-img.jpg" alt="" className='w-full h-full rounded-full' />
              </div>
              <div className=''>
                <div className='flex justify-between items-start'>
                  <div>
                  <p className='text-gray-500'>Aug 10, 2023 at 11:29 am</p>
                  <p className='font-bold text-xl mt-4'>Hasnat Jion</p>
                  </div>
                  <button className="relative bg-red-600 text-white mt-6 font-bold px-6 py-3 rounded-md overflow-hidden group">
              <span className="relative z-10 flex items-center gap-2">Reply <FaAnglesRight/></span>
              <div className="absolute inset-0 bg-[#171a1d] transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>
            </button>
                </div>
              <p className='mt-5'>Duis aute irure dolor in reprehenderit in voluptate velit <br /> esse cillum
                 dolore eu fugiat nulla pariatur.</p>
              </div>
            </div>
            <h1 className='text-4xl font-bold mt-12'>Leave a comment</h1>
            <div>
              <div className='flex justify-between items-center gap-4 mt-10'>
                <input type="text" placeholder='Name' className='py-4 px-4 placeholder-black bg-gray-100 rounded-md w-full' />
                <input type="email" placeholder='Email' className='py-4 px-4 placeholder-black bg-gray-100 rounded-md w-full' />
              </div>
              <textarea name="" placeholder='Write your comment here...' className='placeholder-black px-4 py-4 w-full bg-gray-100 rounded-md mt-4' rows={8} id=""></textarea>
              <button className="relative bg-red-600 text-white mt-6 font-bold px-10 py-4 rounded-md overflow-hidden group">
              <span className="relative z-10 flex items-center gap-2">Leave a Comment</span>
              <div className="absolute inset-0 bg-[#171a1d] transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>
            </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetail