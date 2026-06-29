import { mdiDivingHelmet } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DivingHelmet(props: IconComponentProps) {
  return <Icon path={mdiDivingHelmet} {...props} />;
}

export { mdiDivingHelmet as path };
