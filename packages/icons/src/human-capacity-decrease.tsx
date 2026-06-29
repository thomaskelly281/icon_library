import { mdiHumanCapacityDecrease } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HumanCapacityDecrease(props: IconComponentProps) {
  return <Icon path={mdiHumanCapacityDecrease} {...props} />;
}

export { mdiHumanCapacityDecrease as path };
