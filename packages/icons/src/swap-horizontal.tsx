import { mdiSwapHorizontal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SwapHorizontal(props: IconComponentProps) {
  return <Icon path={mdiSwapHorizontal} {...props} />;
}

export { mdiSwapHorizontal as path };
