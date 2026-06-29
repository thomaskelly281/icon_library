import { mdiAlphaECircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaECircle(props: IconComponentProps) {
  return <Icon path={mdiAlphaECircle} {...props} />;
}

export { mdiAlphaECircle as path };
