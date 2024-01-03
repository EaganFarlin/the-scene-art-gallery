// import React from "react";

export default function EventSummary({
  title,
  date,
  time,
  desc,
}: {
  title: string;
  date: string;
  time: string;
  desc: string;
}) {
  return (
    <div className="mt-12">
      <p className="text-3xl">{title}</p>
      <p className="text-2xl">
        <span className="mr-4">{date}</span>|
        <span className="ml-4">{time}</span>
      </p>
      <p className="text-2xl text-gray-600">{desc}</p>
    </div>
  );
}
