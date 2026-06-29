import { mdiBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Box(props: IconComponentProps) {
  return <Icon path={mdiBox} {...props} />;
}

export { mdiBox as path };
