import React from "react";
import blog1 from "../assets/blog/blog-1.jpg";
import blog2 from "../assets/blog/blog-2.jpg.webp";
import blog3 from "../assets/blog/blog-3.jpg.webp";
import { MdAccessTime, MdPostAdd } from "react-icons/md";
import {
  FaAnglesDown,
  FaFacebook,
  FaHashtag,
  FaTwitter,
  FaUser,
  FaYoutube,
} from "react-icons/fa6";
import strings from "../components/Strings/Strings";
import { CiSearch } from "react-icons/ci";
import { RiUserFollowLine } from "react-icons/ri";
import {
  FaInstagramSquare,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
} from "react-icons/fa";

function BlogPage() {
  const postblog = [
    {
      id: 1,
      posttitle: strings.posttitles,
      postcover: blog1,
      postdate: "19th March, 2025",
      postuser: "John Smith",
      postdecs: strings.PostDesc,
    },
    {
      id: 2,
      posttitle: strings.posttitles2,
      postcover: blog2,
      postdate: "19th March, 2025",
      postuser: "John Smith",
      postdecs: strings.PostDesc2,
    },
    {
      id: 3,
      posttitle: strings.posttitles3,
      postcover: blog3,
      postdate: "19th March, 2025",
      postuser: "John Smith",
      postdecs: strings.PostDesc3,
    },
  ];

  const Categories = [
    { id: 1, catname: "Finance", catIds: "18" },
    { id: 2, catname: "Business", catIds: "12" },
    { id: 3, catname: "Loan", catIds: "7" },
    { id: 4, catname: "Consulting", catIds: "17" },
    { id: 5, catname: "Credit", catIds: "5" },
  ];

  const recentposts = [
    { id: 1, recentpostsTitle: "Promote With Postcards", recentpostsDate: "19th March, 2025", recentpostsImg: blog1 },
    { id: 2, recentpostsTitle: "Promote With Postcards", recentpostsDate: "19th March, 2025", recentpostsImg: blog2 },
    { id: 3, recentpostsTitle: "Promote With Postcards", recentpostsDate: "19th March, 2025", recentpostsImg: blog3 },
  ];

  return (
    <div className="w-full h-auto">
      <div className="blog-cover w-full h-[250px]">
        <div className="w-full h-full bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold lg:text-4xl">MyBank Blog</h1>
        </div>
      </div>

      <div className="w-full px-4 lg:px-12 py-8 flex flex-col lg:flex-row gap-6">
        {/* Left Section */}
        <div className="lg:w-2/3 w-full">
          <div className="grid sm:grid-cols-1 gap-6">
            {postblog.map((post, index) => (
              <div key={index} className="w-full p-4 shadow-md rounded-md border">
                <img src={post.postcover} alt="cover" className="w-full h-48 lg:h-[400px] object-cover rounded-md" />
                <h1 className="pt-3 text-xl font-semibold cursor-pointer">{post.posttitle}</h1>
                <div className="flex items-center gap-3 text-sm text-gray-600 py-2">
                  <MdAccessTime className="text-[#ee7752]" /> {post.postdate}
                  <FaUser className="ml-4 text-[#ee7752]" /> {post.postuser}
                </div>
                <p className="text-[14px] text-gray-700">{post.postdecs}</p>
                <div className="mt-4">
                  <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-all">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-2 flex-wrap">
            <button className="flex items-center gap-1 border px-3 py-2 hover:bg-[#ee7752] transition-all">
              <FaLongArrowAltLeft /> Pre
            </button>
            {[1, 2, 3].map((num) => (
              <button key={num} className="border px-4 py-2 font-bold hover:bg-[#ee7752] transition-all">
                {num}
              </button>
            ))}
            <button className="flex items-center gap-1 border px-3 py-2 hover:bg-[#ee7752] transition-all">
              Next <FaLongArrowAltRight />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/3 w-full">
          <div className="w-full border p-5">
            <h1 className="text-xl font-bold mb-4">Search</h1>
            <form className="flex">
              <input
                className="flex-1 p-2 border border-r-0 rounded-l-md outline-none"
                type="text"
                placeholder="Search"
              />
              <button type="submit" className="w-12 flex items-center justify-center border rounded-r-md bg-gray-100">
                <CiSearch className="text-xl" />
              </button>
            </form>

            {/* Categories */}
            <div className="mt-8">
              <div className="bg-[#000000] text-white p-3 rounded flex justify-between items-center">
                <h1 className="text-lg font-bold">Categories</h1>
                <FaAnglesDown />
              </div>
              <div className="mt-2 divide-y">
                {Categories.map((cat, index) => (
                  <div key={index} className="flex justify-between p-2">
                    <span>{cat.catname}</span>
                    <span>{cat.catIds}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="mt-8">
              <div className="bg-[#000000] text-white p-3 rounded flex justify-between items-center">
                <h1 className="text-lg font-bold">Recent Posts</h1>
                <MdPostAdd />
              </div>
              <div className="mt-3 space-y-4">
                {recentposts.map((post, index) => (
                  <div key={index} className="flex gap-3 items-center">
                    <img src={post.recentpostsImg} alt="post" className="w-20 h-16 object-cover rounded" />
                    <div>
                      <h2 className="text-sm font-semibold">{post.recentpostsTitle}</h2>
                      <p className="text-xs text-gray-500">{post.recentpostsDate}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="mt-8">
              <div className="bg-[#000000] text-white p-3 rounded flex justify-between items-center">
                <h1 className="text-lg font-bold">Popular Tags</h1>
                <FaHashtag />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Business", "Marketing", "Payment", "Travel"].map((tag, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="text-[11px] px-3 py-1 bg-[#f2f2f2] rounded uppercase"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>

             {/* Follow Us */}
            <div className="Follow-Us">
              <div className="w-full h-[50px] bg-[#000000] flex justify-between p-2 mt-8 rounded-md">
                <h1 className="text-[20px] font-bold text-white">Follow Us</h1>
                <span className="mt-2">
                  <RiUserFollowLine className="text-white" />
                </span>
              </div>

              <div className="mt-10 flex p-2">
                <span className="ml-2  p-3 rounded-full bg-blue-600 text-white cursor-pointer">
                  <FaFacebook className="text-white text-[25px]" />
                </span>
                <span className="ml-2  p-3 rounded-full bg-blue-400 text-white cursor-pointer">
                  <FaTwitter className="text-white text-[25px]" />
                </span>
                <span className="ml-2  p-3 rounded-full bg-pink-400 text-white cursor-pointer">
                  <FaInstagramSquare className="text-white text-[25px]" />
                </span>
                <span className="ml-2 p-3 rounded-full bg-red-400 text-white cursor-pointer">
                  <FaYoutube className="text-red-white text-[25px]" />
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
