import { mdiAlphaKCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaKCircle(props: IconComponentProps) {
  return <Icon path={mdiAlphaKCircle} {...props} />;
}

export { mdiAlphaKCircle as path };
