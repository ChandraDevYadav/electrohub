import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import AddToCartButton from '../Product/_Components/AddToCartButton';
import AddToCartButtonPd from './_Components/AddToCartButtonPd';
import { FaArrowRight, FaFacebook, FaFacebookF, FaLinkedinIn, FaStar } from 'react-icons/fa';
import { FaInstagram, FaTwitter } from 'react-icons/fa6';
import { IoIosArrowRoundForward } from 'react-icons/io';

const products = [
  { id: 1, name: "Red Shirt", category: "Clothing", color: "Red", tags: ["New"], price: 29.99, rating: 4, image: "/shop-product-1-1.jpg" },
  { id: 2, name: "Blue Headphones", category: "Electronics", color: "Blue", tags: ["Featured"], price: 99.99, rating: 5, image: "/shop-product-1-2.jpg" },
  { id: 3, name: "Green T-Shirt", category: "Clothing", color: "Green", tags: ["Popular"], price: 19.99, rating: 3, image: "/shop-product-1-3.jpg" },
  { id: 4, name: "Black Watch", category: "Accessories", color: "Black", tags: ["New", "Discount"], price: 199.99, rating: 4, image: "/shop-product-1-4.jpg" },
  { id: 5, name: "Yellow Hat", category: "Clothing", color: "Yellow", tags: ["Discount"], price: 12.99, rating: 4, image: "/shop-product-1-5.jpg" },
  { id: 6, name: "White Shoes", category: "Footwear", color: "White", tags: ["New"], price: 49.99, rating: 5, image: "/shop-product-1-6.jpg" },
  { id: 7, name: "Gray Hoodie", category: "Clothing", color: "Gray", tags: ["Popular"], price: 39.99, rating: 4, image: "/shop-product-1-7.jpg" },
  { id: 8, name: "Red Dress", category: "Clothing", color: "Red", tags: ["Featured"], price: 59.99, rating: 5, image: "/shop-product-1-8.jpg" },
  { id: 9, name: "Blue Jeans", category: "Clothing", color: "Blue", tags: ["Discount"], price: 49.99, rating: 4, image: "/shop-product-1-9.jpg" },
  { id: 10, name: "Leather Wallet", category: "Accessories", color: "Brown", tags: ["New"], price: 29.99, rating: 4, image: "/shop-product-1-1.jpg" },
  { id: 11, name: "Black Sunglasses", category: "Accessories", color: "Black", tags: ["Popular"], price: 89.99, rating: 5, image: "/shop-product-1-2.jpg" },
  { id: 12, name: "Red Sneakers", category: "Footwear", color: "Red", tags: ["New", "Popular"], price: 79.99, rating: 5, image: "/shop-product-1-3.jpg" },
  { id: 13, name: "Silver Necklace", category: "Jewelry", color: "Silver", tags: ["Featured"], price: 149.99, rating: 4, image: "/shop-product-1-4.jpg" },
  { id: 14, name: "Black Belt", category: "Accessories", color: "Black", tags: ["New"], price: 19.99, rating: 4, image: "/shop-product-1-5.jpg" },
  { id: 15, name: "Yellow Scarf", category: "Accessories", color: "Yellow", tags: ["Discount"], price: 14.99, rating: 3, image: "/shop-product-1-6.jpg" },
  { id: 16, name: "Green Cap", category: "Clothing", color: "Green", tags: ["Popular"], price: 9.99, rating: 4, image: "/shop-product-1-7.jpg" },
  { id: 17, name: "White Socks", category: "Clothing", color: "White", tags: ["Featured"], price: 5.99, rating: 5, image: "/shop-product-1-8.jpg" },
  { id: 18, name: "Black Boots", category: "Footwear", color: "Black", tags: ["New"], price: 99.99, rating: 5, image: "/shop-product-1-9.jpg" },
  { id: 19, name: "Red Jacket", category: "Clothing", color: "Red", tags: ["Discount"], price: 89.99, rating: 4, image: "/shop-product-1-1.jpg" },
  { id: 20, name: "Blue Shorts", category: "Clothing", color: "Blue", tags: ["Popular"], price: 29.99, rating: 4, image: "/shop-product-1-2.jpg" },
];

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
    window.scrollTo(0, 0);  // Scroll to top when product changes
  }, [id]);

  if (!product) {
    return <div>Product not found</div>;
  }

  // Filter related products from the same category
  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  return (
    <div className="container">
      <div className="bg-cover bg-center px-4 md:px-36 py-4 md:py-24 relative"
        style={{ backgroundImage: "url('/page-header-bg.jpg')" }}>
        <div className="absolute inset-0 bg-red-500 bg-opacity-70"></div>
        <div className="relative flex justify-center items-center">
          <div>
            <p className="text-center text-4xl md:text-6xl font-bold text-white">
              Products
            </p>
            <p className="text-center text-md md:text-xl mt-3 mx-6 md:mx-0 font-medium text-white">
              Explore Our Latest Collections
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-36 py-4 md:py-12">
        {/* Product Image */}
        <div className='border border-gray-300 rounded-md'>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Product Info */}
        <div>
          <div className='flex justify-start items-center gap-20'>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl font-bold text-red-600">${product.price.toFixed(2)}</p>
          </div>
          <div className='flex justify-start items-center gap-8 mt-4 border-b border-gray-300 pb-5'>
            <div className="my-2">
              <span className="text-yellow-500">{'⭐'.repeat(product.rating)}</span>
            </div>
            <p>2 customer reviews</p>
          </div>
          <p className='mt-6 mb-4'>Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo
            venenatis ligula commodo leez sed blandit convallis dignissim onec vel pellentesque neque.</p>
          <div className='flex justify-start items-center gap-6 mb-5'>
            <p className="text-xl text-black font-bold mt-4">Category</p>
            <p className="text-md text-gray-600 mt-4">{product.category}</p>
          </div>
          <div className="flex justify-start items-center gap-10 mt-4 mb-4">
            <p className="mb-2">
              <span className="font-bold text-xl">Color: </span>{product.color}
            </p>
            <p className="mb-2">
              <span className="font-bold text-xl">Tags: </span>{product.tags.join(', ')}
            </p>
          </div>
          <div className="flex my-6">
            <AddToCartButtonPd />
          </div>
          <div className="flex justify-start items-center gap-4 my-4">
            <button className="relative bg-black text-white mt-6 font-bold px-12 py-4 rounded-md overflow-hidden group">
              <span className="relative z-10">Add to Wishlist</span>
              <div className="absolute inset-0 bg-red-600 transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>
            </button>
            <button className="relative bg-red-600 text-white mt-6 font-bold px-12 py-4 rounded-md overflow-hidden group">
              <span className="relative z-10">Add to Cart</span>
              <div className="absolute inset-0 bg-[#171a1d] transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>
            </button>
          </div>
          <div className='flex flex-col lg:flex-row justify-start items-center gap-2 md:gap-8 mt-8'>
            <p className='font-bold text-lg'>Share with friends</p>
            <div className='flex gap-2 mt-0 md:mt-2'>
              <div className='bg-gray-300 p-3 rounded-full'>
                <FaFacebookF />
              </div>
              <div className='bg-gray-300 p-3 rounded-full'>
                <FaInstagram />
              </div>
              <div className='bg-gray-300 p-3 rounded-full'>
                <FaLinkedinIn />
              </div>
              <div className='bg-gray-300 p-3 rounded-full'>
                <FaTwitter />
              </div>
            </div>
          </div>

          {/* Back to Products Link */}
          <div className="mt-6">
            <Link to="/product" className="bg-red-500 text-white py-2 px-4 rounded-md">
              Back to Products
            </Link>
          </div>
        </div>

        <div className="col-span-2">
          <div className='border-b border-gray-300 pb-10'>
            <p className='text-3xl font-bold mb-6 mt-8'>Description</p>
            <p className='font-medium text-gray-500'>Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are
              many variations of passages of Lorem Ipsum available, but the majority have alteration
              in some injected or words which don't look even slightly believable. If you are going
              to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrang hidden in the middle of text.</p>
            <ul className='mt-6'>
              <li className='flex justify-start items-center gap-2'><IoIosArrowRoundForward className='text-3xl text-red-700' /> Nam at elit nec neque suscipit gravida.</li>
              <li className='flex justify-start items-center gap-2'><IoIosArrowRoundForward className='text-3xl text-red-700' />Aenean egestas orci eu maximus tincidunt.</li>
              <li className='flex justify-start items-center gap-2'><IoIosArrowRoundForward className='text-3xl text-red-700' />Curabitur vel turpis id tellus cursus laoreet.</li>
            </ul>
            <p className='font-medium text-gray-500 mt-6'>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as 
              necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
               a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>

          </div>
        </div>
        <div className="col-span-2">
          <div className='border-b border-gray-300 pb-10'>
            <p className='text-3xl font-bold mb-10 mt-8'>2 reviews</p>
            <div className='flex flex-col lg:flex-row gap-6 mt-6'>
              <div>
                <img src="/review-1-1.jpg" className='object-cover rounded-md md:rounded-full w-[23rem] h-[11rem]' alt="" />
              </div>
              <div>
                <div className='flex justify-between items-center mb-6'>
                  <h1 className='text-2xl font-bold'>Chandra Dev<span className='text-lg ml-2 text-red-600 font-normal'>20 july 2023 . 4:00 pm</span></h1>
                  <div className='flex justify-start items-center gap-1'>
                    <FaStar className='text-red-600'/><FaStar className='text-red-600'/><FaStar className='text-red-600'/><FaStar className='text-red-600'/><FaStar className='text-red-600'/>
                  </div>
                </div>
                <p>It has survived not only five centuries, but also the leap into electronic typesetting unchanged.
                   It was popularised in the sheets containing lorem ipsum is simply free text. className aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin varius
                     mauris non dignissim.</p>
              </div>
            </div>
          </div>
          <div className='border-b border-gray-300 pb-10 mt-12'>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-6'>
              <div>
                <img src="/review-1-2.jpg" className='object-cover rounded-md md:rounded-full w-[23rem] h-[11rem]' alt="" />
              </div>
              <div>
                <div className='flex justify-between items-center mb-6'>
                  <h1 className='text-2xl font-bold'>Punam Dev<span className='text-lg ml-2 text-red-600 font-normal'>20 july 2023 . 4:00 pm</span></h1>
                  <div className='flex justify-start items-center gap-1'>
                    <FaStar className='text-red-600'/><FaStar className='text-red-600'/><FaStar className='text-red-600'/><FaStar className='text-red-600'/><FaStar className='text-red-600'/>
                  </div>
                </div>
                <p>It has survived not only five centuries, but also the leap into electronic typesetting unchanged.
                   It was popularised in the sheets containing lorem ipsum is simply free text. className aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin varius
                     mauris non dignissim.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className=''>
            <p className='text-3xl font-bold'>Add a review</p>
            <div className='flex justify-start items-center gap-4 pt-2 py-6'>
              <p className=''>Rate this product?</p>
              <div className='flex justify-start items-center gap-1'>
                <FaStar className='text-red-600'/>
                <FaStar className='text-red-600'/>
                <FaStar className='text-red-600'/>
                <FaStar className='text-red-600'/>
                <FaStar className='text-red-600'/>
              </div>
            </div>
            <div>
              <textarea name="" className='border border-gray-300 rounded-md w-full bg-gray-100' rows={8} id=""></textarea>
              <div className='flex flex-col lg:flex-row justify-center items-center gap-4 mt-4'>
                <input type="text" placeholder='Your name' className='border border-gray-300 w-full py-3 px-4 rounded-md bg-gray-100' />
                <input type="email" placeholder='Your email' className='border border-gray-300 w-full py-3 px-4 rounded-md bg-gray-100' />
              </div>
              <button className="relative bg-red-600 text-white mt-6 font-bold px-12 py-4 rounded-md overflow-hidden group">
              <span className="relative z-10">Submit Comment</span>
              <div className="absolute inset-0 bg-[#171a1d] transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>
            </button>
            </div>
            
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="px-4 md:px-36 py-4 md:py-24">
        <h2 className="text-2xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} className="border p-4 rounded-md">
              <Link to={`/product/${relatedProduct.id}`}>
                <img
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="mt-2 font-bold">{relatedProduct.name}</h3>
                <p className="text-gray-500">{relatedProduct.category}</p>
                <p className="text-red-600 font-bold">${relatedProduct.price.toFixed(2)}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;