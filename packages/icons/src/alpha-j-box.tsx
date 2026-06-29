import { mdiAlphaJBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaJBox(props: IconComponentProps) {
  return <Icon path={mdiAlphaJBox} {...props} />;
}

export { mdiAlphaJBox as path };
