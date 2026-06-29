import { mdiAlphaEBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaEBox(props: IconComponentProps) {
  return <Icon path={mdiAlphaEBox} {...props} />;
}

export { mdiAlphaEBox as path };
