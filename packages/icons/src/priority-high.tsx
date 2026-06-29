import { mdiPriorityHigh } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PriorityHigh(props: IconComponentProps) {
  return <Icon path={mdiPriorityHigh} {...props} />;
}

export { mdiPriorityHigh as path };
