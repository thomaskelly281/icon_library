import { mdiAlphaH } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaH(props: IconComponentProps) {
  return <Icon path={mdiAlphaH} {...props} />;
}

export { mdiAlphaH as path };
