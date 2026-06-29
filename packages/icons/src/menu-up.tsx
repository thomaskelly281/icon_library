import { mdiMenuUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MenuUp(props: IconComponentProps) {
  return <Icon path={mdiMenuUp} {...props} />;
}

export { mdiMenuUp as path };
