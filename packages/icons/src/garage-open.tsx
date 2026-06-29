import { mdiGarageOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GarageOpen(props: IconComponentProps) {
  return <Icon path={mdiGarageOpen} {...props} />;
}

export { mdiGarageOpen as path };
