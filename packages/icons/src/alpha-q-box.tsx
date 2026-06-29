import { mdiAlphaQBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaQBox(props: IconComponentProps) {
  return <Icon path={mdiAlphaQBox} {...props} />;
}

export { mdiAlphaQBox as path };
