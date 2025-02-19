import { useState } from "react";
import { Modal, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useAppSelector } from "../../redux/hook";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";

const CustomerDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<any>(null);
  const [imageText, setImageText] = useState<any>("Upload Image");

   const currentUser = useAppSelector(selectCurrentUser)
  
  const handleImageChange = (file: any) => {
    setImageText(file.name);
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex justify-center items-center p-4">
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
              "https://randomuser.me/api/portraits/men/25.jpg"
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
          disabled
            type="primary"
            className="mt-4"
            onClick={() => setIsModalOpen(true)}
          >
            Update Profile
          </Button>
        </div>
      </div>

      <Modal
        title="Update Profile"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <form className="space-y-3">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Update Name:
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
            />
          </div>
          <div className="flex items-center gap-4">
            <Upload
              beforeUpload={(file) => {
                handleImageChange(file);
                return false;
              }}
              showUploadList={false}
            >
              <Button icon={<UploadOutlined />}>{imageText}</Button>
            </Upload>
            {imagePreview && (
              <img
                className="w-20 h-20 rounded-lg"
                src={imagePreview}
                alt="Preview"
              />
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Address:
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
            />
          </div>
          <Button  type="primary" htmlType="submit" className="w-full mt-4">
            Update
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default CustomerDashboard;
