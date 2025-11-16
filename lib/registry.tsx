"use client";

import type { ReactNode } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { StyleRegistry, createStyleRegistry } from "styled-jsx";

type RegistryProps = {
  children: ReactNode;
};

export default function Registry({ children }: RegistryProps) {
  const registry = createStyleRegistry();

  useServerInsertedHTML(() => {
    const styles = registry.styles();
    registry.flush();
    return <>{styles}</>;
  });

  return <StyleRegistry registry={registry}>{children}</StyleRegistry>;
}
