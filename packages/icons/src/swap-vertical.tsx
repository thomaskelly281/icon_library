import { mdiSwapVertical } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SwapVertical(props: IconComponentProps) {
  return <Icon path={mdiSwapVertical} {...props} />;
}

export { mdiSwapVertical as path };
