import { mdiAlphaT } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaT(props: IconComponentProps) {
  return <Icon path={mdiAlphaT} {...props} />;
}

export { mdiAlphaT as path };
