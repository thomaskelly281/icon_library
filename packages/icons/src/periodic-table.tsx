import { mdiPeriodicTable } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PeriodicTable(props: IconComponentProps) {
  return <Icon path={mdiPeriodicTable} {...props} />;
}

export { mdiPeriodicTable as path };
