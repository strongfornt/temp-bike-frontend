import { AppleOutlined, GoogleOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import {
    selectCurrentUser,
    setUser
} from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { verifyToken } from "../../utils/verifyToken";
import { useEffect } from "react";
const SignIn = () => {
  const [submitFunc, res] = useLoginMutation();
  const currentUser = useAppSelector(selectCurrentUser)
  const navigate = useNavigate();

  // const token = useAppSelector(useCurrentToken)
  const dispatch = useAppDispatch();
  const handleSubmit = async (values: any) => {
    const toastId = toast.loading("Logging in");

    const userInfo: any = {
      email: values.email,
      password: values?.password,
    };
    const response = await submitFunc(userInfo);
    if (response?.data?.success === true) {
      const user = verifyToken(response?.data?.data?.accessToken);
      dispatch(
        setUser({
          user,
          token: response?.data?.data.accessToken,
        })
      );
      toast.success(response?.data?.message || "Success", { id: toastId });
      navigate(`/`);
    } else {
      toast.error((response?.error as any).data?.message || "Failed to login", {
        id: toastId,
      });
    }
  };

  useEffect(() => {
    if(currentUser) {
         navigate('/')
      }
  },[])
  

  return (
    <div className="flex items-center min-h-screen">
      <div className="flex justify-center items-center bg-gray-200 h-screen flex-1">
        <div className="bg-gray-100 p-5 rounded-md space-y-2 md:space-y-5 w-full md:w-[550px] drop-shadow-lg">
          <div className="space-y-3 py-3 text-center">
            <h4 className="text-2xl md:text-3xl font-semibold">Welcome Back</h4>
            <p className="text-sm md:text-lg">
              Enter your Credentials to access your account
            </p>
          </div>

          <Form onFinish={handleSubmit} requiredMark={false} layout="vertical">
            <Form.Item
              name="email"
              label="Email:"
              rules={[
                {
                  required: true,
                  message: "Please enter your email!",
                  type: "email",
                },
              ]}
            >
              <Input
                className="h-[40px] w-full border-2 border-gray-400 bg-white text-black"
                placeholder="Email"
              />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password:"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input.Password
                className="h-[40px] w-full border-2 border-gray-400 bg-white text-black"
                placeholder="Password"
              />
            </Form.Item>
            <div className="text-end">
              <p className="text-end font-semibold !text-primary !hover:text-primary/40 text-xs md:text-sm cursor-pointer mb-2">
                Forgot password?
              </p>
            </div>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                loading={res.isLoading}
                block
                className="bg-black text-white text-xs md:text-sm hover:bg-gray-600 duration-300"
              >
                Sign In
              </Button>
            </Form.Item>
          </Form>

          <Divider plain>Or</Divider>

          <div className="flex flex-col md:flex-row items-center justify-between gap-5 text-black font-medium">
            <Button
              size="large"
              icon={<GoogleOutlined size={25} />}
              className="w-full pointer-events-none cursor-not-allowed flex justify-center items-center gap-3 border border-gray-400 rounded-md py-1 md:py-3 text-xs md:text-sm hover:bg-black hover:text-white hover:border-black duration-300"
            >
              Sign in with Google
            </Button>
            <Button
              icon={<AppleOutlined size={25} />}
              size="large"
              className="w-full pointer-events-none cursor-not-allowed flex justify-center items-center gap-3 border border-gray-400 rounded-md py-1 md:py-3 text-xs md:text-sm hover:bg-black hover:text-white hover:border-black duration-300"
            >
              Sign in with Apple
            </Button>
          </div>

          <div className="text-center text-xs md:text-sm font-medium">
            Don't have an account?{" "}
            <Link to="/sign-up" className="text-blue-400 font-bold">
              Create an account
            </Link>
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
          <Link
            to="/"
            className="text-xl md:text-3xl lg:text-4xl font-bold text-primary cursor-pointer"
          >
            Bike<span className="text-secondary">Shop</span>
          </Link>
          <p className="text-xs md:text-sm text-white">
            Discover a seamless shopping experience with our curated collection
            of products. From fashion to electronics, we bring quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
