import { mdiPriorityLow } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PriorityLow(props: IconComponentProps) {
  return <Icon path={mdiPriorityLow} {...props} />;
}

export { mdiPriorityLow as path };
