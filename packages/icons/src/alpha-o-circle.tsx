import { mdiAlphaOCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaOCircle(props: IconComponentProps) {
  return <Icon path={mdiAlphaOCircle} {...props} />;
}

export { mdiAlphaOCircle as path };
