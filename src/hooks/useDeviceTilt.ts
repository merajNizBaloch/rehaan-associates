"use client";
import { useEffect, useState } from "react";

export function useDeviceTilt(enabled=true){
  const [tilt,setTilt]=useState({x:0,y:0});
  const [permission,setPermission]=useState<"unknown"|"granted"|"denied">("unknown");
  useEffect(()=>{
    if(!enabled || typeof window === "undefined") return;
    const handler=(e:DeviceOrientationEvent)=>setTilt({x:(e.gamma||0)/45,y:(e.beta||0)/45});
    window.addEventListener("deviceorientation",handler,true);
    if(typeof (DeviceOrientationEvent as typeof DeviceOrientationEvent & { requestPermission?:()=>Promise<PermissionState> }).requestPermission !== "function") setPermission("granted");
    return()=>window.removeEventListener("deviceorientation",handler,true);
  },[enabled]);
  const requestPermission=async()=>{
    const C = DeviceOrientationEvent as typeof DeviceOrientationEvent & { requestPermission?:()=>Promise<PermissionState> };
    if(typeof C.requestPermission === "function"){
      try{const result=await C.requestPermission();setPermission(result === "granted" ? "granted":"denied");}catch{setPermission("denied");}
    }else setPermission("granted");
  };
  return {tilt,permission,requestPermission};
}
