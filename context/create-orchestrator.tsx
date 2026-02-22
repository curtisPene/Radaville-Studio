"use client";

import { ComponentType, Context, ReactNode } from "react";
import { useOrchestratorController } from "./use-orchestrator-controller";
import { BuildEntranceTimeline } from "./use-orchestrator-controller";

export type OrchestratorSetup<TContext> = () => {
  context: Context<TContext>;
  contextValue: TContext;
  buildEntrance: BuildEntranceTimeline;
};

export function createOrchestrator<TContext>(
  setup: OrchestratorSetup<TContext>,
): ComponentType<{ children: ReactNode }> {
  return function Orchestrator({ children }: { children: ReactNode }) {
    const { context, contextValue, buildEntrance } = setup();

    useOrchestratorController(buildEntrance);

    const Provider = context.Provider as React.Provider<TContext>;
    return <Provider value={contextValue}>{children}</Provider>;
  };
}
