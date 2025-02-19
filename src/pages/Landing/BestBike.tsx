import { StarFilled } from "@ant-design/icons";
const BestBike = () => {
  return (
    <section className=" text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="">
          <h2 className="text-4xl font-bold text-center text-primary">
            Best Selling Bikes This Week
          </h2>
          <p className="text-center text-gray-400 mt-2 text-lg">
            Discover our most popular rides of the season
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1: Most Popular Bike */}
          <div className="border rounded-2xl overflow-hidden shadow-lg border-primary/30">
            <div className="p-8 relative">
              <div className="absolute top-0 right-0 bg-[#f97316] text-white font-bold py-1 px-3 rounded-bl-lg">
                TOP PICK
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                The Season's Champion
              </h3>
              <p className="text-gray-300 mb-6">
                Elevate your riding experience with our most sought-after model.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <StarFilled className="text-[#f97316] mr-1" />
                  <span className="text-[#f97316] font-bold">4.9</span>
                  <span className="text-gray-400 ml-1">(128 reviews)</span>
                </div>
                <button  className="px-6 cursor-not-allowed py-2 bg-primary text-white font-semibold rounded-full hover:bg-[#2563eb] transition-colors duration-300">
                  Explore
                </button>
              </div>
            </div>
            <div className="bg-gray-700 px-8 py-6">
              <h4 className="text-xl font-bold text-white mb-2">
                Ready to Dominate the Roads?
              </h4>
              <p className="text-gray-400">
                Unleash your potential with cutting-edge technology and
                unmatched performance.
              </p>
            </div>
          </div>
          {/* Card 2: Suzuki GSX-R1000 */}
          <div className=" rounded-2xl overflow-hidden shadow-lg border border-primary/30">
            <div className="p-8">
              <div className="flex flex-col lg:flex-row items-center gap-6">
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold text-[#f97316] mb-4">
                    Suzuki GSX-R1000
                  </h3>
                  <p className="text-gray-300 mb-6">
                    A high-performance sportbike designed for adrenaline-packed
                    rides and unbeatable agility.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-2 bg-gray-700 rounded-lg">
                      <p className="text-sm text-gray-400">Engine</p>
                      <h6 className="text-xs font-bold text-primary">
                        999cc Inline-4
                      </h6>
                    </div>
                    <div className="text-center p-2 bg-gray-700 rounded-lg">
                      <p className="text-sm text-gray-400">Weight</p>
                      <h6 className="text-xs font-bold text-primary">200KG</h6>
                    </div>
                    <div className="text-center p-2 bg-gray-700 rounded-lg">
                      <p className="text-sm text-gray-400">Power</p>
                      <h6 className="text-xs font-bold text-primary">202HP</h6>
                    </div>
                  </div>
                  <button className="w-full  cursor-not-allowed px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/70 transition-colors duration-300">
                    Discover More
                  </button>
                </div>
                <div className="lg:w-1/2">
                  <img
                    className="w-full h-64 object-cover rounded-lg shadow-2xl"
                    src="https://res.cloudinary.com/dxnccwiqn/image/upload/v1738560384/bike-1836962_1280%20%281%29.jpg"
                    alt="Suzuki GSX-R1000"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestBike;
