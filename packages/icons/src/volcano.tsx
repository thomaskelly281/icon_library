import { mdiVolcano } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Volcano(props: IconComponentProps) {
  return <Icon path={mdiVolcano} {...props} />;
}

export { mdiVolcano as path };
