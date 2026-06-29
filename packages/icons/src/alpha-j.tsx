import { mdiAlphaJ } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaJ(props: IconComponentProps) {
  return <Icon path={mdiAlphaJ} {...props} />;
}

export { mdiAlphaJ as path };
