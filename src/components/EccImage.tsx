"use client";

import Image from "next/image";
import { useState } from "react";

interface WholeImageI {
  image: string;
  button: string;
}

export default function WholeImage({ image, button }: WholeImageI) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(true)}>{button}</button>
      {show && (
        <div
          className="fixed right-0 left-0 top-0 bottom-0 z-10"
          onClick={() => setShow(false)}>
          <div className="absolute right-0 left-0 top-0 bottom-0 bg-black opacity-70" />
          <Image
            src={image}
            priority
            fill
            objectFit="contain"
            alt=""
            placeholder="blur"
            blurDataURL={image}
          />
        </div>
      )}
    </div>
  );
}
