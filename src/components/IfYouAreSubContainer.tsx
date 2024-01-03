import React from "react";

export default function IfYouAreSubContainer({
  children,
  iconUri,
}: {
  children: React.ReactNode;
  iconUri: string;
}) {
  return (
    <div className="flex items-start mb-12 lg:mb-16">
      <img src={iconUri} className="w-10 h-10 lg:w-12 lg:h-12 mr-4" alt="" />
      <p className="text-2xl">{children}</p>
    </div>
  );
}
