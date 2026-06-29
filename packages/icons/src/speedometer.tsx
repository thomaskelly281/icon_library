import { mdiSpeedometer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Speedometer(props: IconComponentProps) {
  return <Icon path={mdiSpeedometer} {...props} />;
}

export { mdiSpeedometer as path };
