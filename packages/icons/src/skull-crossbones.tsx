import { mdiSkullCrossbones } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SkullCrossbones(props: IconComponentProps) {
  return <Icon path={mdiSkullCrossbones} {...props} />;
}

export { mdiSkullCrossbones as path };
