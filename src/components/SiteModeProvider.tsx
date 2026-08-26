"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import type { SiteMode } from "@/components/navigation/TopBar";

interface SiteModeContextType {
  mode: SiteMode;
  setMode: (mode: SiteMode) => void;
}

const SiteModeContext =
  createContext<SiteModeContextType | null>(null);

export function SiteModeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [mode, setMode] =
    useState<SiteMode>("night");

  return (
    <SiteModeContext.Provider
      value={{
        mode,
        setMode,
      }}
    >
      <div
        data-mode={mode}
        className="min-h-screen"
      >
        {children}
      </div>
    </SiteModeContext.Provider>
  );
}

export function useSiteMode() {
  const context =
    useContext(SiteModeContext);

  if (!context) {
    throw new Error(
      "useSiteMode must be used inside SiteModeProvider"
    );
  }

  return context;
}