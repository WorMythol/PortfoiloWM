// Patch broken localStorage polyfill injected by some preview environments
// (e.g. Claude Code preview passes --localstorage-file to Node.js, creating a
//  stub object that lacks standard Storage methods, crashing Next.js dev overlay)
export async function register() {
  if (typeof localStorage !== "undefined" && typeof localStorage.getItem !== "function") {
    const noopStorage: Storage = {
      getItem: () => null,
      setItem: () => undefined,
      removeItem: () => undefined,
      clear: () => undefined,
      key: () => null,
      length: 0,
    };
    (globalThis as typeof globalThis & { localStorage: Storage }).localStorage = noopStorage;
  }
}
