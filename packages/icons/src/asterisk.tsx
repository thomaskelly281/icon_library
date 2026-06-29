import { mdiAsterisk } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Asterisk(props: IconComponentProps) {
  return <Icon path={mdiAsterisk} {...props} />;
}

export { mdiAsterisk as path };
