import { mdiAlphaKBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaKBox(props: IconComponentProps) {
  return <Icon path={mdiAlphaKBox} {...props} />;
}

export { mdiAlphaKBox as path };
