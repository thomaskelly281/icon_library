import { mdiAlphaUCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaUCircle(props: IconComponentProps) {
  return <Icon path={mdiAlphaUCircle} {...props} />;
}

export { mdiAlphaUCircle as path };
