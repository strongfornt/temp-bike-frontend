import { Button } from "antd";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import PassChangeModal from "../../components/modal/PassChangeModal";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hook";
import profile from "./../../assets/images (2).jpeg";
const CustomerDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
   const currentUser = useAppSelector(selectCurrentUser)
 

  return (
   <>
    <div className="flex justify-center items-center p-4">
       <Helmet>
              <title>Dashboard | SteelRev</title>
            </Helmet>
      <div className="bg-white shadow-lg rounded-2xl w-full md:w-4/5">
        <img
          alt="profile cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWumRdY_Qm3mPwyVFyyunAlNqGI721bc3Ftw&s"
          className="w-full mb-4 rounded-t-lg h-36 bg-cover"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-20 text-sm">
          <img
            alt="profile"
            src={
             profile
            }
            className="mx-auto object-cover rounded-full h-28 w-28 border-4 border-white"
          />
          <p className="font-bold text-black mt-2">
            Name: {currentUser?.name || "Unknown"}
          </p>
          <p className="font-bold text-black">
            Email: {currentUser?.email || "Not Available"}
          </p>
          {/* <p className="font-bold text-black">Address: {userDb?.address || 'Not Provided'}</p> */}
          <Button
          // disabled
            type="primary"
            className="mt-4"
            onClick={() => setIsModalOpen(true)}
          >
            Change Password
          </Button>
        </div>
      </div>

     
    </div>

    <PassChangeModal email={currentUser?.email} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
   </>
  );
};

export default CustomerDashboard;
