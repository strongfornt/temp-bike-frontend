import {
    MailOutlined,
    PhoneOutlined,
    EnvironmentOutlined,
    GithubOutlined,
    TwitterOutlined,
    LinkedinOutlined,
  } from "@ant-design/icons"
  
  export default function Contact() {
    return (
      <div className="min-h-screen text-gray-100 p-4 sm:p-6 lg:p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-pulse">
            Get in Touch
            
          </h1>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-primary blur-[100px] opacity-20 animate-blob"></div>
                <div className="relative border p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                  <div className="space-y-4">
                    <p className="flex items-center">
                      <MailOutlined className="mr-2" /> hello@example.com
                    </p>
                    <p className="flex items-center">
                      <PhoneOutlined className="mr-2" /> +1 (555) 123-4567
                    </p>
                    <p className="flex items-center">
                      <EnvironmentOutlined className="mr-2" /> 123 Neon Street, Glow City, GL 12345
                    </p>
                  </div>
                </div>
              </div>
  
              <div className="border p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <GithubOutlined className="text-2xl" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <TwitterOutlined className="text-2xl" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <LinkedinOutlined className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
  
            <div className="border p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your message here..."
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/70 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  