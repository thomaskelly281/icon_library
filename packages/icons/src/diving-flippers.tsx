import { mdiDivingFlippers } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DivingFlippers(props: IconComponentProps) {
  return <Icon path={mdiDivingFlippers} {...props} />;
}

export { mdiDivingFlippers as path };
