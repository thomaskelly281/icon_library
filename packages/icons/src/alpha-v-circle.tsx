import { mdiAlphaVCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaVCircle(props: IconComponentProps) {
  return <Icon path={mdiAlphaVCircle} {...props} />;
}

export { mdiAlphaVCircle as path };
