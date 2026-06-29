import { mdiAlphaYBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaYBox(props: IconComponentProps) {
  return <Icon path={mdiAlphaYBox} {...props} />;
}

export { mdiAlphaYBox as path };
