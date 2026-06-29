import { mdiAlphaRBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaRBox(props: IconComponentProps) {
  return <Icon path={mdiAlphaRBox} {...props} />;
}

export { mdiAlphaRBox as path };
