"use client";

import { usePathname } from "next/navigation";

import CapabilitiesHeroMotion from "../CapabilitiesHeroMotion";
import EnquiryFormBridge from "../EnquiryFormBridge";
import HomeHeroConstructionMotion from "../HomeHeroConstructionMotion";
import PublicHoverEnhancer from "../PublicHoverEnhancer";
import { useSiteMode } from "../SiteModeProvider";
import TopBarV2 from "./TopBarV2";

export default function TopBarWrapper() {
  const { mode, setMode } = useSiteMode();
  const pathname = usePathname();

  return (
    <>
      <EnquiryFormBridge />
      <TopBarV2 mode={mode} setMode={setMode} />
      <PublicHoverEnhancer />
      {pathname === "/" ? <HomeHeroConstructionMotion mode={mode} /> : null}
      {pathname === "/capabilities" ? <CapabilitiesHeroMotion mode={mode} /> : null}
    </>
  );
}
