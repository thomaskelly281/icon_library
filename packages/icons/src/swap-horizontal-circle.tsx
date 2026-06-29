import { mdiSwapHorizontalCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SwapHorizontalCircle(props: IconComponentProps) {
  return <Icon path={mdiSwapHorizontalCircle} {...props} />;
}

export { mdiSwapHorizontalCircle as path };
