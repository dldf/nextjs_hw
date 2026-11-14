"use client";

import Link from "next/link";
import { useState } from "react";

export default function Page() {
  return (
    <>
      <h1>Github</h1>
      <p>Here's a link to my GitHub Repo.</p>
      <Link href="https://github.com/dldf/nextjs_hw/tree/main">GitHub Repo</Link>
    </>
  );
}
