"use client";

import EnquiryFormBridge from "../EnquiryFormBridge";
import { useSiteMode } from "../SiteModeProvider";
import TopBarV2 from "./TopBarV2";

export default function TopBarWrapper() {
  const { mode, setMode } = useSiteMode();

  return (
    <>
      <EnquiryFormBridge />
      <TopBarV2 mode={mode} setMode={setMode} />
    </>
  );
}
