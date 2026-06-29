import { mdiSwapVerticalBold } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SwapVerticalBold(props: IconComponentProps) {
  return <Icon path={mdiSwapVerticalBold} {...props} />;
}

export { mdiSwapVerticalBold as path };
