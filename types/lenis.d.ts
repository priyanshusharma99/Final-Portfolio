declare module 'lenis/react' {
  import * as React from 'react';

  export interface ReactLenisProps {
    root?: boolean;
    options?: Record<string, unknown>;
    children?: React.ReactNode;
  }

  export const ReactLenis: React.ComponentType<ReactLenisProps>;
}
