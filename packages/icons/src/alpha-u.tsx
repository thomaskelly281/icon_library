import { mdiAlphaU } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaU(props: IconComponentProps) {
  return <Icon path={mdiAlphaU} {...props} />;
}

export { mdiAlphaU as path };
