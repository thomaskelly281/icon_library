import { mdiAlphaQCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaQCircle(props: IconComponentProps) {
  return <Icon path={mdiAlphaQCircle} {...props} />;
}

export { mdiAlphaQCircle as path };
