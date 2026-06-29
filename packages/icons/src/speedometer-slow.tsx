import { mdiSpeedometerSlow } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SpeedometerSlow(props: IconComponentProps) {
  return <Icon path={mdiSpeedometerSlow} {...props} />;
}

export { mdiSpeedometerSlow as path };
