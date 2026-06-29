import { mdiAlphaICircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaICircle(props: IconComponentProps) {
  return <Icon path={mdiAlphaICircle} {...props} />;
}

export { mdiAlphaICircle as path };
