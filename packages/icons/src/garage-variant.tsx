import { mdiGarageVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GarageVariant(props: IconComponentProps) {
  return <Icon path={mdiGarageVariant} {...props} />;
}

export { mdiGarageVariant as path };
