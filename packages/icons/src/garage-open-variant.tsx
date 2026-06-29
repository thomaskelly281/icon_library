import { mdiGarageOpenVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GarageOpenVariant(props: IconComponentProps) {
  return <Icon path={mdiGarageOpenVariant} {...props} />;
}

export { mdiGarageOpenVariant as path };
