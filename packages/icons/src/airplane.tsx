import { mdiAirplane } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Airplane(props: IconComponentProps) {
  return <Icon path={mdiAirplane} {...props} />;
}

export { mdiAirplane as path };
