import { mdiTank } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Tank(props: IconComponentProps) {
  return <Icon path={mdiTank} {...props} />;
}

export { mdiTank as path };
