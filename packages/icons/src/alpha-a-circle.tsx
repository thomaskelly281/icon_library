import { mdiAlphaACircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaACircle(props: IconComponentProps) {
  return <Icon path={mdiAlphaACircle} {...props} />;
}

export { mdiAlphaACircle as path };
