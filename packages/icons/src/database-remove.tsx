import { mdiDatabaseRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseRemove(props: IconComponentProps) {
  return <Icon path={mdiDatabaseRemove} {...props} />;
}

export { mdiDatabaseRemove as path };
