import { mdiFireExtinguisher } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FireExtinguisher(props: IconComponentProps) {
  return <Icon path={mdiFireExtinguisher} {...props} />;
}

export { mdiFireExtinguisher as path };
