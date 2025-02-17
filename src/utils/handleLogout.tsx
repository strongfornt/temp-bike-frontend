import { toast } from "sonner";
import { logout } from "../redux/features/auth/authSlice";
import { clearCart } from "../redux/features/cart/cartSlice";
import { useAppDispatch } from "../redux/hook";

const useHandleLogout = () => {
    const dispatch = useAppDispatch()
    const handleLogout = () => {
        dispatch(logout())
        dispatch(clearCart())
        toast.success("See you soon!")
    }
    return { handleLogout };
};

export default useHandleLogout;