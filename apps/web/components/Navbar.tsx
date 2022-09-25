
import Link from "next/link";
import { Router, useRouter } from "next/router";
import React from "react";
import { getState } from "../store/useStore";
import WalletButton from "./WalletButton";

const Navbar = () => {
  const router = useRouter();

  const { loggenIn } = getState()

  return (
    <>
      <div className="flex justify-around items-center py-8">
        <span
          className="text-3xl font-bold flex gap-2 cursor-pointer"
          onClick={() => router.push("/")}
        >
          🔒<b>StorCrypt</b>
        </span>
        <div className="flex gap-6 text-xl items-center justify-evenly">
          <Link href="./team">
            <a target="_blank">Github</a>
          </Link>
          <Link href="./team">
            <a>Team</a>
          </Link>
          {
            loggenIn ? (
              <Link href="/files">
                <a>My Files</a>
              </Link>
            ) : ''
          }

          <WalletButton />
        </div>
      </div>
    </>
  );
};

export default Navbar;
