import { mdiSwapHorizontalHidden } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SwapHorizontalHidden(props: IconComponentProps) {
  return <Icon path={mdiSwapHorizontalHidden} {...props} />;
}

export { mdiSwapHorizontalHidden as path };
