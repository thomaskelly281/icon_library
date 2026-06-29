import { mdiCarLightAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarLightAlert(props: IconComponentProps) {
  return <Icon path={mdiCarLightAlert} {...props} />;
}

export { mdiCarLightAlert as path };
