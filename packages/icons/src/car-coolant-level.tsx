import { mdiCarCoolantLevel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarCoolantLevel(props: IconComponentProps) {
  return <Icon path={mdiCarCoolantLevel} {...props} />;
}

export { mdiCarCoolantLevel as path };
