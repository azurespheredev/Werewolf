"use client";

import Link from "next/link";
import Image from "next/image";
import BackgroundBox from "../components/shared/BackgroundBox";
import Button from "../components/shared/Button";
import { RouteEnum } from "../lib/enums";

export default function HomePage() {
  return (
    <BackgroundBox src="/images/bg_home.jpg" className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col items-center justify-center gap-12">
        <Image
          alt="logo"
          src="/images/logo.png"
          width={320}
          height={320}
          priority
          className="w-80 anim-slide-to-bottom"
        />
        <div className="flex flex-col gap-6 w-80">
          <Link href={RouteEnum.CREATE_ROOM}>
            <Button className="w-60 px-8 py-4 anim-slide-to-top">Create Room</Button>
          </Link>
          <Link href={RouteEnum.JOIN_ROOM}>
            <Button className="w-60 px-8 py-4 anim-slide-to-top">Join Room</Button>
          </Link>
        </div>
      </div>
    </BackgroundBox>
  );
}
