"use client";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  id: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
};

export default function MessageInput({
  id,
  placeholder,
  type,
  required,
  register,
  errors,
}: Props) {
  return (
    <div className="relative w-full">
      <input
        className="text-black font-light py-2 px-4 bg-neutral-100 w-full rounded-full focus:outline-none "
        id={id}
        type={type}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
      />
    </div>
  );
}
