import { mdiHumanCapacityIncrease } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HumanCapacityIncrease(props: IconComponentProps) {
  return <Icon path={mdiHumanCapacityIncrease} {...props} />;
}

export { mdiHumanCapacityIncrease as path };
