import { mdiKeyPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyPlus(props: IconComponentProps) {
  return <Icon path={mdiKeyPlus} {...props} />;
}

export { mdiKeyPlus as path };
