import { mdiSwapVerticalCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SwapVerticalCircle(props: IconComponentProps) {
  return <Icon path={mdiSwapVerticalCircle} {...props} />;
}

export { mdiSwapVerticalCircle as path };
