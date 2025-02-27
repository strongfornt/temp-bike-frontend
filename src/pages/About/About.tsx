import {
  ClockCircleOutlined,
  EnvironmentOutlined,
  TeamOutlined,
  BulbOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import { Timeline } from "antd";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import img1 from "./../../assets/premium_photo-1689568126014-06fea9d5d341.jpeg";
import img2 from "./../../assets/images (1).jpeg";
import img3 from "./../../assets/images (2).jpeg";
import img4 from "./../../assets/images.jpeg";

const teamMembers = [
  {
    name: "Jane Doe",
    role: "Founder & CEO",
    image: img1,
  },
  {
    name: "John Smith",
    role: "Head Mechanic",
    image: img2,
  },
  {
    name: "Emily Brown",
    role: "Community Manager",
    image: img3,
  },
  {
    name: "Mike Johnson",
    role: "Bike Architect",
    image: img4,
  },
];

const timelineData = [
  {
    year: "2024",
    event: "Launched the Bike Shop website with a fully responsive design.",
  },
  {
    year: "2023",
    event: "Expanded inventory to include electric bikes and accessories.",
  },
  {
    year: "2022",
    event:
      "Partnered with local suppliers for better bike quality and pricing.",
  },
  {
    year: "2021",
    event: "Opened the first physical store and started online sales.",
  },
  {
    year: "2020",
    event:
      "Started the Bike Shop business with a small collection of road bikes.",
  },
];

const stats = [
  {
    icon: <TeamOutlined className="text-4xl mb-4 text-primary" />,
    value: "10k+",
    label: "Bike Community",
  },
  {
    icon: <EnvironmentOutlined className="text-4xl mb-4 text-primary" />,
    value: "2",
    label: "Urban Hubs",
  },
  {
    icon: <ClockCircleOutlined className="text-4xl mb-4 text-primary" />,
    value: "18",
    label: "Years Rolling",
  },
  {
    icon: <RocketOutlined className="text-4xl mb-4 text-primary" />,
    value: "200+",
    label: "Events Hosted",
  },
];
const About = () => {
  return (
    <div className="min-h-screen text-white">
      {/* page title using helmet  */}
      <Helmet>
        <title>About | SteelRev</title>
      </Helmet>
      {/* About Section */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-primary">
            Our Story
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start mt-8 md:mt-12">
            <div className="space-y-6 text-lg">
              <p className="text-gray-300 leading-relaxed">
                Founded in 2005, Cycle Haven has been revolutionizing urban
                mobility through sustainable cycling solutions. What started as
                a small repair shop has pedaled its way to becoming a community
                hub for cycling enthusiasts.
              </p>
              <div className="p-6 rounded-xl border border-primary/20 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <p className="text-gray-300 italic">
                  "We believe every ride tells a story. Our passion is to make
                  yours unforgettable."
                </p>
              </div>
            </div>
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://media.istockphoto.com/id/502000692/photo/headlight.jpg?s=612x612&w=0&k=20&c=rBLedmhMp3YzRrKhYRKNtuCVjKpkdxcVkYPgo3YVOYQ="
                alt="Bike shop interior"
                className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-primary">
            Vision & Mission
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mt-8 md:mt-12">
            <div className="p-8 border border-primary/30 rounded-lg hover:border-primary/40 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <div className="flex items-center gap-4 mb-6">
                <BulbOutlined className="text-4xl text-primary" />
                <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To create car-free cities by 2040 through accessible cycling
                infrastructure and community-driven initiatives that make biking
                the preferred mode of urban transportation.
              </p>
            </div>

            <div className="p-8 border border-primary/30 rounded-lg hover:border-primary/40 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <div className="flex items-center gap-4 mb-6">
                <RocketOutlined className="text-4xl text-primary" />
                <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Empower individuals and communities through cycling by providing
                innovative solutions, educational programs, and advocacy for
                bike-friendly urban development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-8 px-4 md:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-primary">
          The Pedal Pioneers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-8 md:mt-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="border border-primary/20 rounded-xl p-6 text-center backdrop-blur-sm hover:border-primary/40 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-32 h-32 object-cover border-4 border-primary/30"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">
                {member.name}
              </h3>
              <p className="text-gray-400 mb-3">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-primary pb-8 md:pb-12">
            Milestones in Motion
          </h2>
          <Timeline mode="alternate" className="!mt-8 custom-timeline">
            {timelineData.map((milestone, index) => (
              <Timeline.Item
                key={index}
                label={
                  <span className="text-2xl md:text-3xl font-bold text-primary">
                    {milestone.year}
                  </span>
                }
              >
                <div className="p-6 rounded-xl border border-primary/20 hover:border-primary/40 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 ">
                  <p className="text-gray-300 leading-relaxed text-lg md:text-2xl">
                    {milestone.event}
                  </p>
                </div>
              </Timeline.Item>
            ))}
          </Timeline>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-primary">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 md:mt-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6  rounded-xl border border-primary/20 hover:border-primary/40 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                {stat.icon}
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-300 text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-primary">
            Ready to Ride the Future?
          </h2>
          <p className="text-xl mb-8 text-gray-300 leading-relaxed mt-8 md:mt-12">
            Join our cycling revolution and experience the freedom of two
            wheels!
          </p>
          <Link
            to={"/contact"}
            className="inline-block mb-6 bg-primary text-white px-4 py-3 rounded-full text-sm md:text-lg font-semibold shadow-lg hover:shadow-primary/20 transition-all duration-300"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
