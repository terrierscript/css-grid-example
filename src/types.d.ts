import React from "react";

export type FixtureType<P = any> = {
  component: React.ComponentType<P>;
  name?: string;
  namespace?: string;
  props?: P;
  children?: Node;
  init?: (args: any) => Promise<any>;
}; // Deprecated in favor of props.children
