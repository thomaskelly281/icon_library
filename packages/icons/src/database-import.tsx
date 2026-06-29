import { mdiDatabaseImport } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseImport(props: IconComponentProps) {
  return <Icon path={mdiDatabaseImport} {...props} />;
}

export { mdiDatabaseImport as path };
