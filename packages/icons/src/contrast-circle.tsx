import { mdiContrastCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ContrastCircle(props: IconComponentProps) {
  return <Icon path={mdiContrastCircle} {...props} />;
}

export { mdiContrastCircle as path };
