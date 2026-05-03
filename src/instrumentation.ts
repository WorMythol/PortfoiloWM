// Patch broken localStorage polyfill in preview environments
// (e.g. Claude preview injects localStorage into Node.js without proper methods)
export async function register() {
  if (typeof localStorage !== "undefined" && typeof localStorage.getItem !== "function") {
    // Replace with a no-op storage so Next.js dev overlay doesn't crash
    (globalThis as any).localStorage = {
      getItem: () => null,
      setItem: () => undefined,
      removeItem: () => undefined,
      clear: () => undefined,
      key: () => null,
      length: 0,
    };
  }
}
