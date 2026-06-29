import { mdiAlphaL } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaL(props: IconComponentProps) {
  return <Icon path={mdiAlphaL} {...props} />;
}

export { mdiAlphaL as path };
