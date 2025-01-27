
const Testimonials = () => {
    return (
        <section className="bg-white py-10" >
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-6">What Our Customers Say</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-6 bg-gray-50 rounded-lg shadow">
                        <p className="italic text-gray-700">
                            "Great products and fantastic service! Highly recommend this store."
                        </p>
                        <h4 className="mt-4 font-semibold">- John Doe</h4>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg shadow">
                        <p className="italic text-gray-700">
                            "Amazing quality and fast delivery. I’m a loyal customer now!"
                        </p>
                        <h4 className="mt-4 font-semibold">- Jane Smith</h4>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg shadow">
                        <p className="italic text-gray-700">
                            "The best shopping experience I’ve ever had. Exceptional!"
                        </p>
                        <h4 className="mt-4 font-semibold">- Michael Lee</h4>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Testimonials;