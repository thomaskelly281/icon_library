import { mdiDirections } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Directions(props: IconComponentProps) {
  return <Icon path={mdiDirections} {...props} />;
}

export { mdiDirections as path };
