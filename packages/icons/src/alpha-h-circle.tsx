import { mdiAlphaHCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaHCircle(props: IconComponentProps) {
  return <Icon path={mdiAlphaHCircle} {...props} />;
}

export { mdiAlphaHCircle as path };
