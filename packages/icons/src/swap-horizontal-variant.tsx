import { mdiSwapHorizontalVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SwapHorizontalVariant(props: IconComponentProps) {
  return <Icon path={mdiSwapHorizontalVariant} {...props} />;
}

export { mdiSwapHorizontalVariant as path };
