import { mdiGarageAlertVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GarageAlertVariant(props: IconComponentProps) {
  return <Icon path={mdiGarageAlertVariant} {...props} />;
}

export { mdiGarageAlertVariant as path };
