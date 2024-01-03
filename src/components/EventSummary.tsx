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
      <div className="lg:flex lg:flex-wrap text-2xl">
        <p className="mr-4">{date}</p>
        {window.innerWidth > 1024 && <p className="mr-4">|</p>}
        <p>{time}</p>
      </div>
      <p className="text-2xl text-gray-600">{desc}</p>
    </div>
  );
}
