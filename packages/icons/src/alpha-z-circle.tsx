import { mdiAlphaZCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaZCircle(props: IconComponentProps) {
  return <Icon path={mdiAlphaZCircle} {...props} />;
}

export { mdiAlphaZCircle as path };
