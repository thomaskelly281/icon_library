import { mdiAirplaneCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AirplaneCheck(props: IconComponentProps) {
  return <Icon path={mdiAirplaneCheck} {...props} />;
}

export { mdiAirplaneCheck as path };
