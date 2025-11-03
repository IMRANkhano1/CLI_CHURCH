import React, { useState } from "react";
import img1 from "../assets/sermon1.jpg";
import img2 from "../assets/sermon2.jpg";
import img3 from "../assets/sermon3.jpg";
import img4 from "../assets/sermon4.jpg";
import img5 from "../assets/sermon5.jpg";
import img6 from "../assets/sermon6.jpg";

import { Play } from "lucide-react";
function Sermons() {
  const [btnIndex, setBtnIndex] = useState(0);
  const btns = ["All Sermons", "Sunday", "Youth", "Special"];
  return (
    <>
      {/* main div */}
      <div className="main mx-6">
        <header className="my-12">
          <h1 className="font-heading font-bold text-3xl mb-2 text-gray-900 text-center">
            Recent Sermons
          </h1>
          <p className="text-lg text-gray-600 text-center font-semibold">
            Listen to our recent messages and grow in your faith journey.
          </p>
        </header>
        {/* nav */}
        <nav className="flex justify-center my-14">
          <div className="inline-flex flex-wrap border border-gray-300 p-1 rounded-xl">
            {btns.map((btn, ind) => {
              return (
                <>
                  <button
                    className={`py-1 px-4 text-lg font-semibold rounded-lg text-gray-600 ${
                      ind === btnIndex ? "bg-green-700 text-white" : "bg-white"
                    }`}
                    onClick={() => setBtnIndex(ind)}
                  >
                    {btn}
                  </button>
                </>
              );
            })}
          </div>
        </nav>
        {/* vedio content */}
        <main className="main">
          {/* object one */}
          {btnIndex === 0 && (
            <div className="one grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col rounded-lg shadow-xl transform duration-300 hover:-translate-y-2 ease-in-out">
                <div className="">
                  <img
                    src={img1}
                    alt="no img "
                    className="rounded-t-lg h-46 w-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-sm text-green-700 font-semibold">Sunday</p>
                  <h1 className="text-xl font-bold text-gray-900 ">
                    Walking in Faith
                  </h1>
                  <p className="text-gray-600 text-md">
                    Discover what it means to trust God completely and walk in
                    faith even when we can't see the path ahead.
                  </p>
                  <p className="flex justify-between items-center">
                    <span className="text-gray-500 text-md">
                      March 26, 2024
                    </span>
                    <span className="flex items-center text-green-700 hover:bg-gray-200/50 cursor-pointer rounded p-2">
                      <a
                        href="https://www.youtube.com/@CLIChurch"
                        target="_black"
                      >
                        <Play className="w-4 h-4" />
                      </a>
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg shadow-xl transform duration-300 hover:-translate-y-2 ease-in-out">
                <div className="">
                  <img
                    src={img2}
                    alt="no img "
                    className="rounded-t-lg h-46 w-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-sm text-green-700 font-semibold"> Youth</p>
                  <h1 className="text-xl font-bold text-gray-900 ">
                    Purpose and Passion
                  </h1>
                  <p className="text-gray-600 text-md">
                    Finding your God-given purpose and pursuing it with passion
                    and dedication.
                  </p>
                  <p className="flex justify-between items-center">
                    <span className="text-gray-500 text-md">
                      March 22, 2024
                    </span>
                    <span className="flex items-center text-green-700 hover:bg-gray-200/50 cursor-pointer rounded p-2">
                      <a
                        href="https://www.youtube.com/@CLIChurch"
                        target="_black"
                      >
                        <Play className="w-4 h-4" />
                      </a>
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg shadow-xl transform duration-300 hover:-translate-y-2 ease-in-out">
                <div className="">
                  <img
                    src={img3}
                    alt="no img "
                    className="rounded-t-lg h-46 w-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-sm text-green-700 font-semibold">
                    {" "}
                    Sunday
                  </p>
                  <h1 className="text-xl font-bold text-gray-900 ">
                    Grace and Forgiveness
                  </h1>
                  <p className="text-gray-600 text-md">
                    Understanding the depth of God's grace and our call to
                    forgive others as we have been forgiven.
                  </p>
                  <p className="flex justify-between items-center">
                    <span className="text-gray-500 text-md">
                      March 19, 2024
                    </span>
                    <span className="flex items-center text-green-700 hover:bg-gray-200/50 cursor-pointer rounded p-2">
                      <a
                        href="https://www.youtube.com/@CLIChurch"
                        target="_black"
                      >
                        <Play className="w-4 h-4" />
                      </a>
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg shadow-xl transform duration-300 hover:-translate-y-2 ease-in-out">
                <div className="">
                  <img
                    src={img4}
                    alt="no img "
                    className="rounded-t-lg h-46 w-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3 self-start">
                  <p className="text-sm text-green-700 font-semibold">
                    {" "}
                    Special
                  </p>
                  <h1 className="text-xl font-bold text-gray-900 ">
                    The Hope of Easter
                  </h1>
                  <p className="text-gray-600 text-md">
                    Celebrating the resurrection of Jesus Christ and the hope it
                    brings to our lives.
                  </p>
                  <p className="flex justify-between items-center">
                    <span className="text-gray-500 text-md">
                      March 31, 2024
                    </span>
                    <span className="flex items-center text-green-700 hover:bg-gray-200/50 cursor-pointer rounded p-2">
                      <a
                        href="https://www.youtube.com/@CLIChurch"
                        target="_black"
                      >
                        <Play className="w-4 h-4" />
                      </a>
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg shadow-xl transform duration-300 hover:-translate-y-2 ease-in-out">
                <div className="">
                  <img
                    src={img5}
                    alt="no img "
                    className="rounded-t-lg h-46 w-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3 self-start">
                  <p className="text-sm text-green-700 font-semibold"> Youth</p>
                  <h1 className="text-xl font-bold text-gray-900 ">
                    Leading with Integrity
                  </h1>
                  <p className="text-gray-600 text-md">
                    How young people can lead with integrity and make a positive
                    impact in their communities.
                  </p>
                  <p className="flex justify-between items-center">
                    <span className="text-gray-500 text-md">
                      March 15, 2024
                    </span>
                    <span className="flex items-center text-green-700 hover:bg-gray-200/50 cursor-pointer rounded p-2">
                      <a
                        href="https://www.youtube.com/@CLIChurch"
                        target="_black"
                      >
                        <Play className="w-4 h-4" />
                      </a>
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg shadow-xl transform duration-300 hover:-translate-y-2 ease-in-out">
                <div className="">
                  <img
                    src={img6}
                    alt="no img "
                    className="rounded-t-lg h-46 w-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3 self-start">
                  <p className="text-sm text-green-700 font-semibold">
                    {" "}
                    Sunday
                  </p>
                  <h1 className="text-xl font-bold text-gray-900 ">
                    The Heart of a Servant
                  </h1>
                  <p className="text-gray-600 text-md">
                    Learning from Jesus' example of servant leadership and how
                    to serve others with humility.
                  </p>
                  <p className="flex justify-between items-center">
                    <span className="text-gray-500 text-md">
                      March 12, 2024
                    </span>
                    <span className="flex items-center text-green-700 hover:bg-gray-200/50 cursor-pointer rounded p-2">
                      <a
                        href="https://www.youtube.com/@CLIChurch"
                        target="_black"
                      >
                        <Play className="w-4 h-4" />
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}
          {btnIndex === 1 && (
            <div className="two grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col rounded-lg shadow-xl transform duration-300 hover:-translate-y-2 ease-in-out">
                <div className="">
                  <img
                    src={img1}
                    alt="no img "
                    className="rounded-t-lg h-46 w-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-sm text-green-700 font-semibold">Sunday</p>
                  <h1 className="text-xl font-bold text-gray-900 ">
                    Walking in Faith
                  </h1>
                  <p className="text-gray-600 text-md">
                    Discover what it means to trust God completely and walk in
                    faith even when we can't see the path ahead.
                  </p>
                  <p className="flex justify-between items-center">
                    <span className="text-gray-500 text-md">
                      March 26, 2024
                    </span>
                    <span className="flex items-center text-green-700 hover:bg-gray-200/50 cursor-pointer rounded p-2">
                      <a
                        href="https://www.youtube.com/@CLIChurch"
                        target="_black"
                      >
                        <Play className="w-4 h-4" />
                      </a>
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg shadow-xl transform duration-300 hover:-translate-y-2 ease-in-out">
                <div className="">
                  <img
                    src={img3}
                    alt="no img "
                    className="rounded-t-lg h-46 w-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-sm text-green-700 font-semibold">
                    {" "}
                    Sunday
                  </p>
                  <h1 className="text-xl font-bold text-gray-900 ">
                    Grace and Forgiveness
                  </h1>
                  <p className="text-gray-600 text-md">
                    Understanding the depth of God's grace and our call to
                    forgive others as we have been forgiven.
                  </p>
                  <p className="flex justify-between items-center">
                    <span className="text-gray-500 text-md">
                      March 19, 2024
                    </span>
                    <span className="flex items-center text-green-700 hover:bg-gray-200/50 cursor-pointer rounded p-2">
                      <a
                        href="https://www.youtube.com/@CLIChurch"
                        target="_black"
                      >
                        <Play className="w-4 h-4" />
                      </a>
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg shadow-xl transform duration-300 hover:-translate-y-2 ease-in-out">
                <div className="">
                  <img
                    src={img6}
                    alt="no img "
                    className="rounded-t-lg h-46 w-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3 self-start">
                  <p className="text-sm text-green-700 font-semibold">
                    {" "}
                    Sunday
                  </p>
                  <h1 className="text-xl font-bold text-gray-900 ">
                    The Heart of a Servant
                  </h1>
                  <p className="text-gray-600 text-md">
                    Learning from Jesus' example of servant leadership and how
                    to serve others with humility.
                  </p>
                  <p className="flex justify-between items-center">
                    <span className="text-gray-500 text-md">
                      March 12, 2024
                    </span>
                    <span className="flex items-center text-green-700 hover:bg-gray-200/50 cursor-pointer rounded p-2">
                      <a
                        href="https://www.youtube.com/@CLIChurch"
                        target="_black"
                      >
                        <Play className="w-4 h-4" />
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}
          {btnIndex === 2 && (
            <div className="three grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col rounded-lg shadow-xl transform duration-300 hover:-translate-y-2 ease-in-out">
                <div className="">
                  <img
                    src={img2}
                    alt="no img "
                    className="rounded-t-lg h-46 w-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-sm text-green-700 font-semibold"> Youth</p>
                  <h1 className="text-xl font-bold text-gray-900 ">
                    Purpose and Passion
                  </h1>
                  <p className="text-gray-600 text-md">
                    Finding your God-given purpose and pursuing it with passion
                    and dedication.
                  </p>
                  <p className="flex justify-between items-center">
                    <span className="text-gray-500 text-md">
                      March 22, 2024
                    </span>
                    <span className="flex items-center text-green-700 hover:bg-gray-200/50 cursor-pointer rounded p-2">
                      <a
                        href="https://www.youtube.com/@CLIChurch"
                        target="_black"
                      >
                        <Play className="w-4 h-4" />
                      </a>
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg shadow-xl transform duration-300 hover:-translate-y-2 ease-in-out">
                <div className="">
                  <img
                    src={img5}
                    alt="no img "
                    className="rounded-t-lg h-46 w-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3 self-start">
                  <p className="text-sm text-green-700 font-semibold"> Youth</p>
                  <h1 className="text-xl font-bold text-gray-900 ">
                    Leading with Integrity
                  </h1>
                  <p className="text-gray-600 text-md">
                    How young people can lead with integrity and make a positive
                    impact in their communities.
                  </p>
                  <p className="flex justify-between items-center">
                    <span className="text-gray-500 text-md">
                      March 15, 2024
                    </span>
                    <span className="flex items-center text-green-700 hover:bg-gray-200/50 cursor-pointer rounded p-2">
                      <a
                        href="https://www.youtube.com/@CLIChurch"
                        target="_black"
                      >
                        <Play className="w-4 h-4" />
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}
          {btnIndex === 3 && (
            <div className="four grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col rounded-lg shadow-xl transform duration-300 hover:-translate-y-2 ease-in-out">
                <div className="">
                  <img
                    src={img4}
                    alt="no img "
                    className="rounded-t-lg h-46 w-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3 self-start">
                  <p className="text-sm text-green-700 font-semibold">
                    Special
                  </p>
                  <h1 className="text-xl font-bold text-gray-900 ">
                    The Hope of Easter
                  </h1>
                  <p className="text-gray-600 text-md">
                    Celebrating the resurrection of Jesus Christ and the hope it
                    brings to our lives.
                  </p>
                  <p className="flex justify-between items-center">
                    <span className="text-gray-500 text-md">
                      March 31, 2024
                    </span>
                    <span className="flex items-center text-green-700 hover:bg-gray-200/50 cursor-pointer rounded p-2">
                      <a
                        href="https://www.youtube.com/@CLIChurch"
                        target="_black"
                      >
                        <Play className="w-4 h-4" />
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </main>
        {/* end */}
        <div className="flex flex-col items-center bg-gray-200/50 rounded-xl my-14 p-12">
          <div className="mission  flex flex-col items-center ">
            <h1 className="text-3xl font-bold text-gray-900 text-center">
              Grow in Your Faith
            </h1>
            <p className="mb-4 text-xl md:w-4/5 font-sans font-semibold text-center leading-10 text-gray-700">
              Our sermons are just one way to grow spiritually. Explore other
              resources to deepen your understanding of God's Word and
              strengthen your relationship with Jesus.
            </p>
          </div>

          <div className="grid  md:grid-cols-3  md:w-4/5 gap-8">
            <div className="text-center font-sans flex flex-col items-center space-y-4">
              <span className="font-bold text-2xl  text-white w-15 h-15 bg-green-700 rounded-full flex items-center justify-center">
                📖
              </span>
              <h1 className="font-bold text-black/80 text-xl">Bible Study</h1>
              <p className="text-gray-700  font-semibold">
                Join our weekly Bible study groups for deeper discussion
              </p>
            </div>
            <div className="text-center font-sans flex flex-col items-center space-y-4">
              <span className="font-bold text-2xl  text-white w-15 h-15 bg-green-700 rounded-full flex items-center justify-center">
                📚
              </span>
              <h1 className="font-bold text-black/80 text-xl">
                Study Materials
              </h1>
              <p className="text-gray-700 font-semibold">
                Access study guides and resources for personal reflection
              </p>
            </div>
            <div className="text-center font-sans flex flex-col items-center space-y-4">
              <span className="font-bold text-2xl  text-white w-15 h-15 bg-green-700 rounded-full flex items-center justify-center">
                🎧
              </span>
              <h1 className="font-bold text-gray-900 text-xl">Podcast</h1>
              <p className="text-gray-700 font-semibold">
                Listen to sermons and teachings on your favorite podcast app
              </p>
            </div>
          </div>
          <div className="flex  justify-center my-4">
            <button className="text-lg font-semibold text-white px-4 py-2  bg-green-700 rounded-lg">
              View All Sermons
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sermons;
