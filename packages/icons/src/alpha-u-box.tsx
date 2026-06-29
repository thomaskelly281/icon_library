import { mdiAlphaUBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaUBox(props: IconComponentProps) {
  return <Icon path={mdiAlphaUBox} {...props} />;
}

export { mdiAlphaUBox as path };
