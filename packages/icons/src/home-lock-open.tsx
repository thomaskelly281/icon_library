import { mdiHomeLockOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeLockOpen(props: IconComponentProps) {
  return <Icon path={mdiHomeLockOpen} {...props} />;
}

export { mdiHomeLockOpen as path };
