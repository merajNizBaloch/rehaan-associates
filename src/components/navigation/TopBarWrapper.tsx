"use client";

import EnquiryFormBridge from "../EnquiryFormBridge";
import { useSiteMode } from "../SiteModeProvider";
import TopBar from "./TopBar";

export default function TopBarWrapper() {
  const { mode, setMode } = useSiteMode();

  return (
    <>
      <EnquiryFormBridge />
      <TopBar mode={mode} setMode={setMode} />
    </>
  );
}
