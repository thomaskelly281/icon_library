import { mdiHomeLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeLock(props: IconComponentProps) {
  return <Icon path={mdiHomeLock} {...props} />;
}

export { mdiHomeLock as path };
