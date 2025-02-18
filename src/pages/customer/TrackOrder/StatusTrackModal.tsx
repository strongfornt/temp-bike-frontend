import { Modal } from "antd";
import React from "react";
import { Steps } from "antd";

interface IStatusTrackModal {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  status: string;
  setSelectedStatus: React.Dispatch<React.SetStateAction<string>>
}

const StatusTrackModal: React.FC<IStatusTrackModal> = ({
  isModalOpen,
  setIsModalOpen,
  status,
  setSelectedStatus
}) => {
 



  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedStatus('')
  };
  const orderStatus = ['Pending','Processing','Shipped','Delivered']

  const stepIndex = orderStatus.indexOf(status)

  
  return (
    <>
      <Modal
        title="Order Status"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        {
            status ? <Steps
            size="small"
            current={stepIndex}
            items={[
              {
                title: "Pending",
              },
              {
                title: "Processing",
              },
              {
                title: "Shipped",
              },
              {
                title: "Delivered",
              },
            ]}
          /> : <span>Loading....</span>
        }
        
      </Modal>
    </>
  );
};

export default StatusTrackModal;
