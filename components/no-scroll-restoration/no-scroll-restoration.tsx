"use client";

import { useEffect } from "react";

export const NoScrollRestoration = () => {
  useEffect(() => {
    history.scrollRestoration = "manual";
  }, []);

  return null;
};
