import { AppleOutlined, GoogleOutlined } from '@ant-design/icons';
import { Button, Checkbox, Divider, Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useSingInMutation } from '../../redux/features/auth/authApi';
import { setUser } from '../../redux/features/auth/authSlice';
import { useAppDispatch } from '../../redux/hook';
const SignUp = () => {
    const [submitFunc, res] = useSingInMutation()
    
    const navigate = useNavigate()
    const dispatch= useAppDispatch()
    const handleFinish = (values: any) => {
        const { name, email, password } = values;
        const userInfo = {
            name,
            email,
            password
        }
        submitFunc(userInfo )
        if (res.isSuccess) {
            message.success("Log in successfully!")
            navigate('/')
            dispatch(setUser(userInfo))
        }
        if (res.isError) {
            message.error("Something went wrong!")
        }
    };

    return (
        <div className="flex items-center min-h-screen">
            <div className="flex justify-center items-center bg-[#c2c2c2] h-screen flex-1">
                <div className="bg-[#f3f4f6ec] p-5 rounded-xl space-y-2 md:space-y-5 w-full md:w-[480px] drop-shadow-lg">
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
                            name="name"
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
                            loading={res.isLoading}
                            className="py-1 md:py-3 w-full bg-black rounded-md text-white text-xs md:text-sm hover:bg-gray-600 duration-300 disabled:cursor-not-allowed"
                        >
                            Sign Up
                        </Button>
                    </Form>

                    <Divider plain>Or</Divider>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-5 text-black font-medium">
                        <Button icon={<GoogleOutlined size={25} />} size='large' className="py-1 pointer-events-none cursor-not-allowed md:py-3 text-xs md:text-sm border border-gray-400 rounded-md w-full flex justify-center items-center gap-3 hover:bg-black hover:text-white hover:border-black duration-300">
                            Sign in with Google
                        </Button>
                        <Button icon={<AppleOutlined size={25} />} size='large' className="py-1 pointer-events-none cursor-not-allowed md:py-3 text-xs md:text-sm border border-gray-400 rounded-md w-full flex justify-center items-center gap-3 hover:bg-black hover:text-white hover:border-black duration-300">
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
                    src="https://wallpaperbat.com/img/873115-cafe-racer-photo-download-the-best.jpg"
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