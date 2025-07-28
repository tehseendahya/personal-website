import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const copyEmailToClipboard = async (): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText("tdahya2@gmail.com");
    return true;
  } catch (err) {
    console.error("Failed to copy email:", err);
    return false;
  }
};
