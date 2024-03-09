"use client";

import Image from "next/image";
import { useState } from "react";

export default function EccImage() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(true)}>출구 위치 보기</button>
      {show && (
        <div
          className="fixed right-0 left-0 top-0 bottom-0 z-10"
          onClick={() => setShow(false)}>
          <div className="absolute right-0 left-0 top-0 bottom-0 bg-black opacity-70" />
          <Image
            src="/image/map.jpg"
            priority
            fill
            objectFit="contain"
            alt=""
            placeholder="blur"
            blurDataURL="/image/map.jpg"
          />
        </div>
      )}
    </div>
  );
}
