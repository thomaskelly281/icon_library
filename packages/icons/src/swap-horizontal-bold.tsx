import { mdiSwapHorizontalBold } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SwapHorizontalBold(props: IconComponentProps) {
  return <Icon path={mdiSwapHorizontalBold} {...props} />;
}

export { mdiSwapHorizontalBold as path };
