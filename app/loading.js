import { BounceLoading } from "respinner";
import React from "react";

export default function Loading() {
  return (
    <div
      className="flex items-center justify-center min-h-screen h-screen w-full fixed inset-0 z-[500] bg-gray-800"
      role="status"
      aria-live="polite"
      aria-label="Loading content"
    >
      <BounceLoading fill="#5100ff" />
    </div>
  );
}
