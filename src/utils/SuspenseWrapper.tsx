import React, { Suspense } from "react";

interface ISuspenseWrapper {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const SuspenseWrapper = ({
  children,
  fallback = <div>Loading...</div>
}: ISuspenseWrapper) => {
  return <Suspense fallback={fallback}>{children}</Suspense>
};

export default SuspenseWrapper;
