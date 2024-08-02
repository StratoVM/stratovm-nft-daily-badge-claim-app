import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function that merges classes, but makes sure that tailwind classes are correctly replaced.
 *
 * @param args
 */
export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(args));
};
