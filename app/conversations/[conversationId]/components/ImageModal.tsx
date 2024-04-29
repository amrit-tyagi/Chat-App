"use client";

import Modal from "@/app/components/Modal";
import Image from "next/image";
type Props = {
  isOpen?: boolean;
  src?: string | null;
  onClose: () => void;
};

export default function ImageModal({ isOpen, src, onClose }: Props) {
  if (!src) {
    return null;
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-80 h-80">
        <Image alt="image" fill className="object-cover" src={src} />
      </div>
    </Modal>
  );
}
