import { mdiImageAutoAdjust } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageAutoAdjust(props: IconComponentProps) {
  return <Icon path={mdiImageAutoAdjust} {...props} />;
}

export { mdiImageAutoAdjust as path };
