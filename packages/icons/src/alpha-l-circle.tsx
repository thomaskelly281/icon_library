import { mdiAlphaLCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaLCircle(props: IconComponentProps) {
  return <Icon path={mdiAlphaLCircle} {...props} />;
}

export { mdiAlphaLCircle as path };
