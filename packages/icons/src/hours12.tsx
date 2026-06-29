import { mdiHours12 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Hours12(props: IconComponentProps) {
  return <Icon path={mdiHours12} {...props} />;
}

export { mdiHours12 as path };
