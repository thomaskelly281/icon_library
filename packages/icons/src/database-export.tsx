import { mdiDatabaseExport } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseExport(props: IconComponentProps) {
  return <Icon path={mdiDatabaseExport} {...props} />;
}

export { mdiDatabaseExport as path };
