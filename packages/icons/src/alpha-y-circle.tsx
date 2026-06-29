import { mdiAlphaYCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaYCircle(props: IconComponentProps) {
  return <Icon path={mdiAlphaYCircle} {...props} />;
}

export { mdiAlphaYCircle as path };
