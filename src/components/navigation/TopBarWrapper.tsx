"use client";

import { useState } from "react";

import TopBar, {
  type SiteMode,
} from "./TopBar";

export default function TopBarWrapper() {
  const [mode, setMode] =
    useState<SiteMode>("night");

  return (
    <TopBar
      mode={mode}
      setMode={setMode}
    />
  );
}