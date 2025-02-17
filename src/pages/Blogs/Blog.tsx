import {
    LikeOutlined,
    MessageOutlined,
    ReadOutlined,
    ShareAltOutlined
} from "@ant-design/icons";
const Blog = () => {
    return (

        <section className="py-10 text-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary my-5 md:my-8">Latest From Our Blog</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "10 Essential Bike Maintenance Tips for Longevity",
                            date: "July 15, 2023",
                            readTime: "5 min read",
                            excerpt:
                                "Keep your bike in top shape with these easy-to-follow maintenance tips. Learn how to extend the life of your beloved two-wheeler.",
                            likes: 124,
                            comments: 18,
                        },
                        {
                            title: "Choosing the Perfect Bike for Your Riding Style and Terrain",
                            date: "July 22, 2023",
                            readTime: "7 min read",
                            excerpt:
                                "Confused about which bike to buy? Our comprehensive guide helps you match your riding style and local terrain to the ideal bike type.",
                            likes: 98,
                            comments: 23,
                        },
                        {
                            title: "The Surprising Mental Health Benefits of Regular Cycling",
                            date: "July 29, 2023",
                            readTime: "6 min read",
                            excerpt:
                                "Discover how cycling can boost your mood, reduce stress, and improve overall mental well-being. It's not just good for your body!",
                            likes: 156,
                            comments: 31,
                        },
                    ].map((post, index) => (
                        <div
                            key={index}
                            className="border border-primary/30 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                        >
                            <img
                                src={`https://res.cloudinary.com/dxnccwiqn/image/upload/v1738560384/bike-1836962_1280%20%281%29.jpg`}
                                alt={post.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-primary">{post.title}</h3>
                                <p className="text-gray-400 mb-4">{post.date}</p>
                                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                                    <div className="flex items-center">
                                        <ReadOutlined className="mr-2" />
                                        <span>{post.readTime}</span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <span className="flex items-center">
                                            <LikeOutlined className="mr-1" /> {post.likes}
                                        </span>
                                        <span className="flex items-center">
                                            <MessageOutlined className="mr-1" /> {post.comments}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <button className="cursor-pointer">
                                        Read More
                                    </button>
                                    <button className="text-gray-400 cursor-pointer">
                                        <ShareAltOutlined /> Share
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;