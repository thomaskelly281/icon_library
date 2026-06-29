import { mdiSwapVerticalVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SwapVerticalVariant(props: IconComponentProps) {
  return <Icon path={mdiSwapVerticalVariant} {...props} />;
}

export { mdiSwapVerticalVariant as path };
