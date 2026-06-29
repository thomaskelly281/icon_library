import { mdiAirplaneEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AirplaneEdit(props: IconComponentProps) {
  return <Icon path={mdiAirplaneEdit} {...props} />;
}

export { mdiAirplaneEdit as path };
