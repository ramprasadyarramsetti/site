"use client";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function ContactButton() {
  useEffect(()=>{
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

  return (
    <div className="flex flex-col max-w-5xl mt-12" id="#contact">
      <span className="heading text-3xl font-bold mb-2">
        Let&apos;s Connect Over Coffee☕
      </span>
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-1 w-16 mb-4"></div>
      <p className="mb-4 text-start flex max-w-7xl md:w-1/3 items-center text-lg">
        Schedule a time that works for you and let&apos;s discuss opportunities,
        ideas, and more.
      </p>
      <button
        className="flex items-center justify-center w-max bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        data-cal-namespace=""
        data-cal-link="ibrahim-chikani/30min"
        data-cal-config='{"layout":"month_view"}'
      >
        Schedule a Meeting
      </button>
    </div>
  );
}