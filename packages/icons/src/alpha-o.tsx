import { mdiAlphaO } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaO(props: IconComponentProps) {
  return <Icon path={mdiAlphaO} {...props} />;
}

export { mdiAlphaO as path };
