"use client";

import { useImperativeHandle, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { OrchestratorControllerType, useAppState } from "./app-state-context";

type BuildEntranceTimeline = () => gsap.core.Timeline | void;

/**
 * Reusable orchestrator controller hook
 * Handles entrance callbacks and imperative handle for page orchestrators
 */
export function useOrchestratorController(
  buildEntranceTimeline: BuildEntranceTimeline,
) {
  const { introComplete, preloadComplete, orchestratorRef } = useAppState();
  const entranceCallbacksRef = useRef<Array<() => void>>([]);

  const { contextSafe } = useGSAP({ dependencies: [] });

  useImperativeHandle(orchestratorRef, (): OrchestratorControllerType => {
    const enter = contextSafe(() => {
      if (!introComplete || !preloadComplete) return;

      const entranceTimeline = buildEntranceTimeline();
      if (!entranceTimeline) return;

      // Create parent timeline with onComplete callback
      gsap
        .timeline({
          onComplete: () => {
            entranceCallbacksRef.current.forEach((cb) => cb());
          },
        })
        .add(entranceTimeline);
    });

    return {
      playEnter: enter,
      onEntranceComplete: (callback) => {
        entranceCallbacksRef.current.push(callback);
      },
    };
  });
}
