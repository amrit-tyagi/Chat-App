"use client";
import React from "react";
import useActiveChannel from "../hooks/useActiveChannel";

type Props = {};

export default function ActiveStatus({}: Props) {
  useActiveChannel();
  return null;
}
