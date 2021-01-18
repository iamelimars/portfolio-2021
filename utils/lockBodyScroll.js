import { useLayoutEffect } from "react";

export default function useLockBodyScroll() {
  useLayoutEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "visible");
  }, []); // Empty array ensures effect is only run on mount and unmount
}
