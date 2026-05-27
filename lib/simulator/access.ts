export const SIMULATOR_ACCESS_STORAGE_KEY = "simulator-access-v1";

export function hasSimulatorAccess(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(SIMULATOR_ACCESS_STORAGE_KEY) === "true";
}

export function grantSimulatorAccess(): void {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(SIMULATOR_ACCESS_STORAGE_KEY, "true");
}
