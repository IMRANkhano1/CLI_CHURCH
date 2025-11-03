import React from "react";
import lead1 from "../assets/lead1.jpg";

function Heritage() {
  return (
    <>
      <div className="con mx-6">
        <div className="con p-8 mt-8 ">
          <h1 className="font-bold text-4xl text-center text-black/80">
            About CSI Church
          </h1>
          <p className="text-center font-semibold text-xl  text-gray-600 max-w-3xl mx-auto py-4 ">
            Learn about our history, mission, and the people who make our church
            family special.
          </p>
        </div>
        <div className=" main p-4 grid md:grid-cols-2 gap-8">
          <div className=" md:m-4">
            <h1 className="font-bold text-3xl   text-black/80">
              The Church of South India
            </h1>
            <div className="   text-gray-600 py-4 text-justify">
              <p className="py-2 font-semibold">
                The Church of South India (CSI) was formed in 1947 through the
                historic union of Anglican, Methodist, Presbyterian, and
                Congregational churches. This groundbreaking unity brought
                together different Christian traditions under one church, making
                it one of the most significant examples of church union in
                modern history.
              </p>
              <br />
              <p className="py-2 font-semibold">
                As a CSI church, we are part of this remarkable legacy of unity
                in diversity, embracing the rich theological traditions of our
                founding churches while maintaining our commitment to biblical
                truth and evangelical fervor.
              </p>
            </div>
            <ul className=" font-normal text-gray-900 flex flex-col space-y-6 ">
              <li className="flex items-center space-x-3 ">
                <span className="font-bold   text-white w-8 h-8  flex items-center justify-center">
                  🕊️
                </span>
                <span className="flex flex-col">
                  <h3 className=" font-bold">Unity in Diversity</h3>
                  <p className="text-gray-600 ">
                    Embracing different traditions while maintaining biblical
                    foundation.
                  </p>
                </span>
              </li>

              <li className="flex items-center space-x-3 ">
                <span className="font-bold   text-white w-8 h-8  flex items-center justify-center">
                  📖
                </span>
                <span className="flex flex-col">
                  <h3 className=" font-bold">Biblical Authority</h3>
                  <p className="text-gray-600 ">
                    Scripture as the ultimate authority for faith and practice.
                  </p>
                </span>
              </li>
              <li className="flex items-center space-x-3 ">
                <span className="font-bold   text-white w-8 h-8  flex items-center justify-center">
                  🌍
                </span>
                <span className="flex flex-col">
                  <h3 className=" font-bold">Global Mission</h3>
                  <p className="text-gray-600 ">
                    Committed to spreading the Gospel throughout South India and
                    beyond
                  </p>
                </span>
              </li>
            </ul>
          </div>
          <div className="flex   md:place-self-center">
            <img
              src={lead1}
              alt="no img found"
              className="rounded-xl shadow-xl w-full md:w-auto h-auto md:h-100 object-cover"
            />
          </div>
        </div>
        <div className=" p-8 space-y-8">
          <h1 className="font-heading text-3xl font-bold text-gray-900 text-center">
            Our Heritage Timeline
          </h1>
          <p className="text-lg text-center font-semibold  text-gray-600">
            Key moments in CSI history and our local church journey
          </p>
        </div>
        <div className="my-5 mx-6 space-y-8">
          <div className="md:flex md:items-start md:space-x-6 space-y-5">
            <div className="">
              <button className="md:w-32 bg-green-700 px-4 py-2 rounded-xl font-bold text-white">
                1947
              </button>
            </div>
            <div>
              <h2 className=" font-bold text-gray-900 text-2xl pb-4">
                CSI Formation
              </h2>
              <p className="text-lg text-gray-600 font-semibold pb-4">
                The Church of South India was formed through the union of
                Anglican, Methodist, Presbyterian, and Congregational churches,
                creating the first united church in the Protestant world.
              </p>
            </div>
          </div>
          <div className="md:flex md:items-start md:space-x-6 space-y-5">
            <div className="">
              <button className="md:w-32 bg-yellow-400 px-4 py-2 rounded-xl font-bold text-gray-900">
                1947
              </button>
            </div>
            <div>
              <h2 className=" font-bold text-gray-900 text-2xl pb-4">
                Our Church Founded
              </h2>
              <p className="text-lg text-gray-600 font-semibold pb-4">
                Our local congregation was established as part of the newly
                formed CSI, beginning our journey as a unified Christian
                community committed to biblical truth and evangelical mission.
              </p>
            </div>
          </div>
          <div className="md:flex md:items-start md:space-x-6 space-y-5">
            <div className="">
              <button className="md:w-32 bg-green-700 px-4 py-2 rounded-xl font-bold text-white">
                1950s
              </button>
            </div>
            <div>
              <h2 className=" font-bold text-gray-900 text-2xl pb-4">
                Growth and Expansion
              </h2>
              <p className="text-lg text-gray-600 font-semibold pb-4">
                During this decade, our church grew significantly, establishing
                various ministries and outreach programs that continue to serve
                our community today.
              </p>
            </div>
          </div>
          <div className="md:flex md:items-start md:space-x-6 space-y-5">
            <div className="">
              <button className="md:w-32 bg-yellow-500 px-4 py-2 rounded-xl font-bold text-gray-900">
                1970s
              </button>
            </div>
            <div>
              <h2 className=" font-bold text-gray-900 text-2xl pb-4">
                Community Impact
              </h2>
              <p className="text-lg text-gray-600 font-semibold pb-4">
                We expanded our social service initiatives, establishing
                educational and healthcare programs that demonstrated Christ's
                love in practical ways.
              </p>
            </div>
          </div>
        </div>
        {/* belief */}
        <div className="mission  m-12 my-16  flex flex-col items-center space-y-5">
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-3xl font-bold text-gray-900 text-center">
              Our Core Beliefs
            </h1>
            <p className="text-xl md:w-3/4 font-sans font-semibold text-center leading-10 text-gray-700">
              As a CSI church, we hold to the historic Christian faith as
              expressed in the ecumenical creeds and the Reformed tradition,
              while embracing the episcopal structure and liturgical richness of
              Anglican worship.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-6 ">
            <div className="border border-gray-300/50 rounded-xl shadow-lg p-6 text-center font-sans flex flex-col items-center space-y-3">
              <span className="font-bold text-xl  text-white w-12 h-12 bg-green-700 rounded-full flex items-center justify-center">
                ✝️
              </span>
              <h1 className="font-bold text-black/80 text-xl">Trinity</h1>
              <p className="text-sm text-gray-700  font-semibold">
                We believe in one God in three persons: Father, Son, and Holy
                Spirit
              </p>
            </div>
            <div className="border border-gray-300/50 rounded-xl shadow-lg p-6 text-center font-sans flex flex-col items-center space-y-3">
              <span className="font-bold text-xl  text-white w-12 h-12 bg-green-700 rounded-full flex items-center justify-center">
                📖
              </span>
              <h1 className="font-bold text-black/80 text-xl">Scripture</h1>
              <p className="text-sm text-gray-700  font-semibold">
                The Bible is the inspired Word of God and our ultimate
                authority.
              </p>
            </div>
            <div className="border border-gray-300/50 rounded-xl shadow-lg p-6 text-center font-sans flex flex-col items-center space-y-3">
              <span className="font-bold text-xl  text-white w-12 h-12 bg-green-700 rounded-full flex items-center justify-center">
                💒
              </span>
              <h1 className="font-bold text-black/80 text-xl">Sacraments</h1>
              <p className="text-sm text-gray-700  font-semibold">
                Baptism and Holy Communion as means of grace ordained by Christ.
              </p>
            </div>

            <div className="border border-gray-300/50 rounded-xl shadow-lg p-6 text-center font-sans flex flex-col items-center space-y-3">
              <span className="font-bold text-xl  text-white w-12 h-12 bg-green-700 rounded-full flex items-center justify-center">
                🙏
              </span>
              <h1 className="font-bold text-black/80 text-xl">Salvation</h1>
              <p className="text-sm text-gray-700  font-semibold">
                Salvation by grace through faith in Jesus Christ alone.
              </p>
            </div>
            <div className="border border-gray-300/50 rounded-xl shadow-lg p-6 text-center font-sans flex flex-col items-center space-y-3">
              <span className="font-bold text-xl  text-white w-12 h-12 bg-green-700 rounded-full flex items-center justify-center">
                🌍
              </span>
              <h1 className="font-bold text-black/80 text-xl">Mission</h1>
              <p className="text-sm text-gray-700  font-semibold">
                Called to proclaim the Gospel and serve the world in Christ's
                name.
              </p>
            </div>
            <div className="border border-gray-300/50 rounded-xl shadow-lg p-6 text-center font-sans flex flex-col items-center space-y-3">
              <span className="font-bold text-xl  text-white w-12 h-12 bg-green-700 rounded-full flex items-center justify-center">
                🤝
              </span>
              <h1 className="font-bold text-black/80 text-xl">Unity</h1>
              <p className="text-sm text-gray-700  font-semibold">
                Commitment to Christian unity while maintaining biblical truth.
              </p>
            </div>
          </div>
        </div>
        {/* end */}
        <div className="flex flex-col items-center p-4 space-y-6 pb-8 mb-12">
          <h1 className="font-heading text-gray-900 text-3xl font-bold">
            Learn More About CSI
          </h1>
          <p className="text-lg font-semibold text-gray-600 text-center md:w-1/2">
            Discover more about the Church of South India and our continuing
            mission to unite Christians in worship, witness, and service.
          </p>
          <button className="md:w-auto cursor-pointer bg-green-700 px-4 py-2 rounded-xl font-bold text-white">
            Visit CSI Official Website
          </button>
        </div>
      </div>
    </>
  );
}

export default Heritage;
