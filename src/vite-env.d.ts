
/// <reference types="vite/client" />

declare global {
  interface Window {
    voiceflow?: {
      chat: {
        load: (config: {
          verify: { projectID: string };
          url: string;
          versionID: string;
          voice: {
            url: string;
          };
        }) => void;
      };
    };
  }
}

export {};
