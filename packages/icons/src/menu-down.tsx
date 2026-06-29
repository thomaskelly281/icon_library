import { mdiMenuDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MenuDown(props: IconComponentProps) {
  return <Icon path={mdiMenuDown} {...props} />;
}

export { mdiMenuDown as path };
