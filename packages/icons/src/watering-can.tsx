import { mdiWateringCan } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WateringCan(props: IconComponentProps) {
  return <Icon path={mdiWateringCan} {...props} />;
}

export { mdiWateringCan as path };
