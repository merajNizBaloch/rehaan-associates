"use client";

import TopBar from "./TopBar";
import { useSiteMode } from "../SiteModeProvider";

export default function TopBarWrapper() {
  const { mode, setMode } =
    useSiteMode();

  return (
    <TopBar
      mode={mode}
      setMode={setMode}
    />
  );
}