/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Modal, Tag } from "antd";
import BTable from "../../components/BTable/BTable";
import {
  useGetAllUserQuery,
  useUpdateStatusMutation,
} from "../../redux/features/user/userApi";
import { useAppSelector } from "../../redux/hook";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { setRefreshObj } from "../../redux/features/commonRefresh/commonSlice";
import { useDispatch } from "react-redux";
import BPagination from "../../shared/Pagination/BPagination";

export default function ManageUser() {
  const user = useAppSelector(selectCurrentUser);
  const [handleAction] = useUpdateStatusMutation();
  const [params, setParams] = useState<{ limit: number; page: number }>({
    limit: 10,
    page: 1,
  });
  const { data, isLoading, isFetching, refetch } = useGetAllUserQuery(params);
  const dispatch = useDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const showModal = (record: any) => {
    setSelectedUser(record);
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    const updateStatus = {
      isBlocked: selectedUser?.isBlocked ? false : true, // Toggle the blocked status
    };

    try {
      const response = await handleAction({
        updateStatus,
        userID: selectedUser?._id,
      }).unwrap();
      setIsModalVisible(false);
      toast.success(response?.message);
    } catch (error: any) {
      setIsModalVisible(false);
      toast.error(error?.message || "Something went wrong");
    }
  };
  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedUser(null);
  };

  // useEffect(() => {
  //   if (res.isSuccess) {
  //     setIsModalVisible(false);
  //     toast.success(res?.data?.message); // Assuming `data` has a 'message'
  //   }

  //   if (res.isError) {
  //     setIsModalVisible(false);
  //     toast.error(res?.error?.message || "Something went wrong");
  //   }
  // }, [res.isSuccess, res.isError, res?.data, res?.error]);
  const columns = [
    {
      title: "SL",
      key: "sl",
      width: "80px",
      align: "center",
      render: (_: any, __: any, index: number) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Status",
      dataIndex: "isBlocked",
      key: "isBlocked",
      render: (status: any) => (
        <Tag color={status ? "gray" : "green"}>
          {status ? "Deactivated" : "Active"}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      width: "150px",
      align: "center",
      render: (_: any, record: any) => (
        <div className="flex items-center gap-2">
          {/* Deactivate button always visible */}
          <Button
            disabled={user?.email === record?.email || record?.isBlocked} // Disable if current user or already blocked
            size="small"
            type="primary"
            danger
            onClick={() => showModal(record)}
          >
            Deactivate
          </Button>

          {/* Active button always visible */}
          <Button
            type="default"
            style={{ marginLeft: 8 }}
            size="small"
            disabled={user?.email === record?.email || !record?.isBlocked} // Disable if current user or already active
            onClick={() => showModal(record)}
          >
            Active
          </Button>
        </div>
      ),
    },
  ];

  const handleRefresh = () => {
    refetch();
  };
  useEffect(() => {
    dispatch(
      setRefreshObj({
        CB: () => {
          handleRefresh();
        },
      })
    );
    return () => {
      dispatch(setRefreshObj({}));
    };
  }, []);

  return (
    <>
      <div>
        <h1 className="text-xl font-bold pb-3">User Management</h1>
      </div>
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <>
          <BTable
            columns={columns}
            dataSource={data?.data || []}
            isBorder={true}
            isLoading={isFetching}
            scroll={{y:440}}
          />
          <BPagination params={params} setParams={setParams} totalCount={data?.totalCount} />
        </>
      )}

      {/* Deactivation/Activation Confirmation Modal */}
      <Modal
        title={`Confirm ${
          selectedUser?.isBlocked ? "Activation" : "Deactivation"
        }`}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={selectedUser?.isBlocked ? "Activate" : "Deactivate"}
        cancelText="Cancel"
      >
        <p>
          Are you sure you want to{" "}
          {selectedUser?.isBlocked ? "activate" : "deactivate"}{" "}
          {selectedUser?.name}?
        </p>
      </Modal>
    </>
  );
}
