import { Button, Form, Input, Modal } from "antd";
import React from "react";
import { toast } from "sonner";
import { useChangePassMutation } from "../../redux/features/auth/authApi";

interface IPassChangeModal {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  email?: string;
}

export default function PassChangeModal({
  isModalOpen,
  setIsModalOpen,
  email,
}: IPassChangeModal) {
  const [form] = Form.useForm();

  const [handlePassChange, res] = useChangePassMutation();

  const onFinish = async (value: any) => {
    const payload = {
      email: value?.email,
      password: value?.password,
      newPassword: value?.newPassword,
    };
    const toastId = toast.loading("Requesting ....");

    const res: any = await handlePassChange(payload);

    if (res?.data?.success === true) {
      setIsModalOpen(false);
      form.resetFields();
      return toast.success(res?.data?.message, { id: toastId });
    } else {
      toast.error(res?.error?.data?.message || "Something went wrong", {
        id: toastId,
      });
    }
  };


  return (
    <Modal
      title="Change Password"
      open={isModalOpen}
      onCancel={() => {
        setIsModalOpen(false);
        form.resetFields();
      }}
      footer={null}
    >
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        // className="space-y-3"
        initialValues={{ email }}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please enter your email" }]}
          // className="col-span-2"
        >
          <Input
            readOnly
            defaultValue={email}
            // value={email}
            type="email"
            placeholder="Current Password"
          />
        </Form.Item>
        <Form.Item
          label="Current Password"
          name="password"
          rules={[
            { required: true, message: "Please enter your current password" },
          ]}
        >
          <Input.Password placeholder="Current Password" />
        </Form.Item>
        <Form.Item
          label="New Password"
          name="newPassword"
          rules={[
            { required: true, message: "Please enter your new password" },
          ]}
          // className="col-span-2"
        >
          <Input.Password placeholder="New Password" />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          className={`w-full ${res?.isLoading && "pointer-events-none"}`}
        >
           {res?.isLoading ? 'Updating...':' Update'}
        </Button>
      </Form>
    </Modal>
  );
}
