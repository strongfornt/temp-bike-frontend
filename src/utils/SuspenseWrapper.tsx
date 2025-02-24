import { Spin } from "antd";
import React, { Suspense } from "react";

interface ISuspenseWrapper {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const SuspenseWrapper = ({
  children,
  fallback = <div className="min-h-screen grid place-content-center"><Spin size="large" /></div>
}: ISuspenseWrapper) => {
  return <Suspense fallback={fallback}>{children}</Suspense>
};

export default SuspenseWrapper;
