import { mdiAlphaJCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaJCircle(props: IconComponentProps) {
  return <Icon path={mdiAlphaJCircle} {...props} />;
}

export { mdiAlphaJCircle as path };
