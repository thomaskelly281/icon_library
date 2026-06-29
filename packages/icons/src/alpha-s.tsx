import { mdiAlphaS } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaS(props: IconComponentProps) {
  return <Icon path={mdiAlphaS} {...props} />;
}

export { mdiAlphaS as path };
