import { mdiCarBrakeAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarBrakeAlert(props: IconComponentProps) {
  return <Icon path={mdiCarBrakeAlert} {...props} />;
}

export { mdiCarBrakeAlert as path };
