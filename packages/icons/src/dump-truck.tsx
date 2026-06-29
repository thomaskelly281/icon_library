import { mdiDumpTruck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DumpTruck(props: IconComponentProps) {
  return <Icon path={mdiDumpTruck} {...props} />;
}

export { mdiDumpTruck as path };
