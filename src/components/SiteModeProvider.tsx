"use client";

import {
  createContext,
  useContext,
  useEffect,
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

const STORAGE_KEY = "rehan-consultants-site-mode";

export function SiteModeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [mode, setMode] =
    useState<SiteMode>("night");

  /*
   * Restore the last selected mode.
   * This runs only in the browser.
   */
  useEffect(() => {
    try {
      const saved =
        window.localStorage.getItem(
          STORAGE_KEY
        );

      if (
        saved === "night" ||
        saved === "site"
      ) {
        setMode(saved);
      }
    } catch {
      // Ignore localStorage errors.
    }
  }, []);

  /*
   * Save mode whenever it changes.
   */
  useEffect(() => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        mode
      );
    } catch {
      // Ignore localStorage errors.
    }
  }, [mode]);

  /*
   * Keep the global document in sync.
   *
   * This is useful for components outside the
   * page content and for the global navbar.
   */
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-mode",
      mode
    );

    document.body.setAttribute(
      "data-mode",
      mode
    );
  }, [mode]);

  return (
    <SiteModeContext.Provider
      value={{
        mode,
        setMode,
      }}
    >
      {/*

        IMPORTANT:

        We do NOT put data-mode on a wrapper here.

        The mode is applied directly to html/body,
        so the entire application uses the same mode.
      */}

      {children}
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