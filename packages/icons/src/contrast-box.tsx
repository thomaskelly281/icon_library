import { mdiContrastBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ContrastBox(props: IconComponentProps) {
  return <Icon path={mdiContrastBox} {...props} />;
}

export { mdiContrastBox as path };
