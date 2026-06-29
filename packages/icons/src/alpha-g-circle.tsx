import { mdiAlphaGCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaGCircle(props: IconComponentProps) {
  return <Icon path={mdiAlphaGCircle} {...props} />;
}

export { mdiAlphaGCircle as path };
