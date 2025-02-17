import {
  SafetyCertificateOutlined,
  ShoppingOutlined,
  SyncOutlined,
} from "@ant-design/icons";
const WhyChooseUs = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary my-5 md:my-8">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <ShoppingOutlined />,
              title: "Free Shipping",
              description:
                "Enjoy free shipping on all orders over $500. We deliver to your doorstep with care and precision.",
              benefits: ["No hidden fees", "Fast delivery", "Secure packaging"],
            },
            {
              icon: <SafetyCertificateOutlined />,
              title: "2-Year Warranty",
              description:
                "Rest easy with our comprehensive 2-year warranty on all bike frames. We stand behind our quality.",
              benefits: [
                "Full coverage",
                "Easy claims process",
                "Expert support",
              ],
            },
            {
              icon: <SyncOutlined />,
              title: "Easy Returns",
              description:
                "Not satisfied? Take advantage of our 30-day money-back guarantee for a hassle-free return.",
              benefits: [
                "No questions asked",
                "Free return shipping",
                "Quick refunds",
              ],
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-primary/30 rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
            >
              <div className="text-5xl text-[#f97316] mb-4">{item.icon}</div>
              <h3 className="text-xl text-primary font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 mb-4">{item.description}</p>
              <ul className="text-sm text-gray-300">
                {item.benefits.map((benefit, i) => (
                  <li key={i} className="mb-1">
                    ✓ {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
