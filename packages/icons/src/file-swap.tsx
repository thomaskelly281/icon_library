import { mdiFileSwap } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileSwap(props: IconComponentProps) {
  return <Icon path={mdiFileSwap} {...props} />;
}

export { mdiFileSwap as path };
