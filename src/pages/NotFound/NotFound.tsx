import { Button } from "antd";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tl from-[#2c2c2c] to-[#000000] text-white px-6">
            <div className="text-center">
                {/* <img
                    src="https://i.ibb.co/WnWx7wN/bike-not-found.png"
                    alt="Bike Not Found"
                    className="w-72 mx-auto"
                /> */}
                <h1 className="text-6xl font-bold mt-6 text-red-500">404</h1>
                <h2 className="text-3xl font-semibold mt-2">Oops! Page Not Found</h2>
                <p className="text-lg mt-4 text-gray-300">
                    It looks like you're lost! The page you are looking for doesn't exist.
                </p>
                <Button type="link" href="/"> Back to Home</Button>
            </div>
        </div>
    );
};

export default NotFound;
