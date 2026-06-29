import { mdiGarage } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Garage(props: IconComponentProps) {
  return <Icon path={mdiGarage} {...props} />;
}

export { mdiGarage as path };
