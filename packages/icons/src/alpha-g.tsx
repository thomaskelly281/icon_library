import { mdiAlphaG } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaG(props: IconComponentProps) {
  return <Icon path={mdiAlphaG} {...props} />;
}

export { mdiAlphaG as path };
