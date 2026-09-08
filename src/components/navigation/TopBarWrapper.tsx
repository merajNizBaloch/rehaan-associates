"use client";

import { usePathname } from "next/navigation";

import EnquiryFormBridge from "../EnquiryFormBridge";
import HomeHeroConstructionMotion from "../HomeHeroConstructionMotion";
import { useSiteMode } from "../SiteModeProvider";
import TopBarV2 from "./TopBarV2";

export default function TopBarWrapper() {
  const { mode, setMode } = useSiteMode();
  const pathname = usePathname();

  return (
    <>
      <EnquiryFormBridge />
      <TopBarV2 mode={mode} setMode={setMode} />
      {pathname === "/" ? <HomeHeroConstructionMotion mode={mode} /> : null}
    </>
  );
}
