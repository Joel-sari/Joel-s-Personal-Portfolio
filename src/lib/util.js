import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/* This allows to pass multiple classname. Why is this useful? what if we wanted to reuse the className or even combine more than one className??

It actually just allows us to break out className Tailwind css to make it look cleaner*/
export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
