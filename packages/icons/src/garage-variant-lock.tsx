import { mdiGarageVariantLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GarageVariantLock(props: IconComponentProps) {
  return <Icon path={mdiGarageVariantLock} {...props} />;
}

export { mdiGarageVariantLock as path };
