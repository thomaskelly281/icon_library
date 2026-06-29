import { mdiWiper } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Wiper(props: IconComponentProps) {
  return <Icon path={mdiWiper} {...props} />;
}

export { mdiWiper as path };
