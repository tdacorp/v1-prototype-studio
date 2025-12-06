"use client";

import React, { useState } from "react";
import { HeroProps } from "@/types/type";
import HeroContent from "../HeroContent";

const FormVariant: React.FC<HeroProps> = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Form submitted: ${inputValue}`);
    setInputValue("");
  };

  return (
    <div className="relative flex flex-col justify-center items-center text-center">
      <div className="max-w-3xl mb-8">
        <HeroContent {...props} />
      </div>

      <form
        className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder={props.formPlaceholder || "Enter your email"}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormVariant;
