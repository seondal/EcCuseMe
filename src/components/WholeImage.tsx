"use client";

import Image from "next/image";
import { PropsWithChildren, useState } from "react";

interface WholeImageI extends PropsWithChildren {
  image: string;
}

export default function WholeImage({ image, children }: WholeImageI) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div onClick={() => setShow(true)}>{children}</div>
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
