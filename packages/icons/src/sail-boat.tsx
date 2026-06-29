import { mdiSailBoat } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SailBoat(props: IconComponentProps) {
  return <Icon path={mdiSailBoat} {...props} />;
}

export { mdiSailBoat as path };
