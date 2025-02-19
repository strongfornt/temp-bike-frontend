import { ClockCircleOutlined } from "@ant-design/icons";
const OfferSection = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-5 md:mb-8">
          Exclusive Special Deals
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Summer Blowout Sale",
              discount: "20% OFF",
              code: "SUMMER20",
              expiry: "August 31",
              description:
                "Get ready for the ultimate summer ride with our biggest sale of the season. Applies to all bikes and accessories.",
              popular: true,
            },
            {
              title: "New Rider Bundle",
              discount: "Free Helmet + 10% OFF",
              code: "NEWBIKE",
              expiry: "Limited Time",
              description:
                "Start your cycling journey right. Get a free helmet and 10% off when you purchase your first bike with us.",
              popular: false,
            },
          ].map((deal, index) => (
            <div
              key={index}
              className="rounded-lg p-6 border space-y-5 border-primary/30 relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              {deal.popular && (
                <div className="absolute top-0 right-0 bg-[#f97316] text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
                  POPULAR
                </div>
              )}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-[#f97316]">
                  {deal.title}
                </h3>
                <span className="text-xl font-semibold text-primary">
                  {deal.discount}
                </span>
              </div>
              <p className="text-gray-300 mb-4">{deal.description}</p>
              <div className="bg-gray-700 p-3 rounded-lg mb-4">
                <p className="text-gray-300">
                  Use code:{" "}
                  <span className="font-bold line-through text-[#f97316]">
                    {deal.code}
                  </span>
                </p>
              </div>
              <div className="flex items-center text-gray-400">
                <ClockCircleOutlined className="mr-2" />
                <span>Expires: {deal.expiry}</span>
              </div>
              {/* <Button disabled className="mt-4 bg-primary text-white py-2 rounded-lg hover:bg-[#2563eb] transition-colors duration-300">
                                Claim Offer
                            </Button> */}
              <span className="text-red-500">Currently Unavailable</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
