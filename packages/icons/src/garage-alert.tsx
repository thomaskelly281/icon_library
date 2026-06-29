import { mdiGarageAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GarageAlert(props: IconComponentProps) {
  return <Icon path={mdiGarageAlert} {...props} />;
}

export { mdiGarageAlert as path };
