import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(input: string) {
  const uncapitalizedWords: Set<string> = new Set([
    "de",
    "do",
    "da",
    "dos",
    "das"
  ]);

  const words: string[] = input.split(/\s+/);

  const capitalizedWords: string[] = words.map((word, index) => {
    if (index === 0 || !uncapitalizedWords.has(word.toLowerCase())) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    } else {
      return word.toLowerCase();
    }
  });

  const capitalizedString: string = capitalizedWords.join(" ");

  return capitalizedString;
}

export async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
