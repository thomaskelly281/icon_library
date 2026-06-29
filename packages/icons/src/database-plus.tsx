import { mdiDatabasePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabasePlus(props: IconComponentProps) {
  return <Icon path={mdiDatabasePlus} {...props} />;
}

export { mdiDatabasePlus as path };
