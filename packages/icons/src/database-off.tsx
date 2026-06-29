import { mdiDatabaseOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseOff(props: IconComponentProps) {
  return <Icon path={mdiDatabaseOff} {...props} />;
}

export { mdiDatabaseOff as path };
