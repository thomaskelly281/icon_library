import { mdiDivingScubaTank } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DivingScubaTank(props: IconComponentProps) {
  return <Icon path={mdiDivingScubaTank} {...props} />;
}

export { mdiDivingScubaTank as path };
