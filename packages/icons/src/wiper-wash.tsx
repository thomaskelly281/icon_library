import { mdiWiperWash } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WiperWash(props: IconComponentProps) {
  return <Icon path={mdiWiperWash} {...props} />;
}

export { mdiWiperWash as path };
