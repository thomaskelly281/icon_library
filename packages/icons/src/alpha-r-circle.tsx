import { mdiAlphaRCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaRCircle(props: IconComponentProps) {
  return <Icon path={mdiAlphaRCircle} {...props} />;
}

export { mdiAlphaRCircle as path };
