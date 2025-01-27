import { Button, Checkbox, Divider, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const handleFinish = (values: any) => {
        const { firstName, email, password } = values;
        console.log({ name: firstName, email, password });
    };

    return (
        <div className="flex items-center min-h-screen">
            <div className="flex justify-center items-center bg-gray-200 h-screen flex-1">
                <div className="bg-gray-100 p-5 rounded-md space-y-2 md:space-y-5 w-full md:w-[550px] drop-shadow-lg">
                    <div className="text-center space-y-3">
                        <h4 className="text-sm md:text-lg font-medium">Welcome To</h4>
                        {/* Logo */}
                        <Link to="/" className="text-xl md:text-3xl lg:text-4xl font-bold text-primary cursor-pointer">
                            Bike<span className="text-secondary">Shop</span>
                        </Link>
                        <p className="text-xs md:text-sm">Signup for purchase your desire products</p>
                    </div>
                    <Form onFinish={handleFinish} layout="vertical" className="" requiredMark={false}>
                        <Form.Item
                            name="firstName"
                            label="Full Name:"
                            rules={[{ required: true, message: 'Name is required!' }]}
                        >
                            <Input
                                className="h-[40px] border-2 border-gray-400 bg-white px-2 text-black rounded-md"
                                placeholder="Full name"
                            />
                        </Form.Item>

                        <Form.Item
                            name="email"
                             label="Email:"
                            rules={[
                                { required: true, message: 'Email is required!' },
                                { type: 'email', message: 'Enter a valid email!' },
                            ]}
                        >
                            <Input
                                className="h-[40px] border-2 border-gray-400 bg-white px-2 text-black rounded-md"
                                placeholder="Email"
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                             label="Password:"
                            rules={[{ required: true, message: 'Password is required!' }]}
                        >
                            <Input.Password
                                className="h-[40px] border-2 border-gray-400 bg-white px-2 text-black rounded-md cursor-pointer"
                                placeholder="Password"
                                visibilityToggle
                            />
                        </Form.Item>

                        <Form.Item name="agree" valuePropName="checked" className="space-x-2 font-medium text-xs"
                            rules={[{ validator: (_, value) => value ? Promise.resolve() : Promise.reject('You must agree to the terms and conditions') }]}
                        >
                            <Checkbox>I agree to the Terms & Policy</Checkbox>
                        </Form.Item>

                        <Button
                            type="primary"
                            htmlType="submit"
                            size='large'
                            className="py-1 md:py-3 w-full bg-black rounded-md text-white text-xs md:text-sm hover:bg-gray-600 duration-300 disabled:cursor-not-allowed"
                        >
                            Sign Up
                        </Button>
                    </Form>

                    <Divider plain>Or</Divider>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-5 text-black font-medium">
                        <Button size='large' disabled={true} className="py-1 md:py-3 text-xs md:text-sm border border-gray-400 rounded-md w-full flex justify-center items-center gap-3 hover:bg-black hover:text-white hover:border-black duration-300">
                            Sign in with Google
                        </Button>
                        <Button size='large' disabled={true} className="py-1 md:py-3 text-xs md:text-sm border border-gray-400 rounded-md w-full flex justify-center items-center gap-3 hover:bg-black hover:text-white hover:border-black duration-300">
                            Sign in with Apple
                        </Button>
                    </div>

                    <div className="text-center text-xs md:text-sm font-medium">
                        Have an account? <Link to="/signIn" className="text-blue-400 font-bold">Sign In</Link>
                    </div>
                </div>
            </div>

            <div className="flex-1 min-h-screen lg:flex items-center justify-center hidden relative">
                <img
                    src="https://cdn.shoplightspeed.com/shops/623085/files/67047399/image.jpg"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="flex flex-col items-center justify-center max-w-lg text-center gap-3 relative z-10">
                    {/* Logo */}
                    <Link to="/" className="text-xl md:text-3xl lg:text-4xl font-bold text-primary cursor-pointer">
                        Bike<span className="text-secondary">Shop</span>
                    </Link>
                    <p className="text-xs md:text-sm text-white">
                        Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default SignUp;