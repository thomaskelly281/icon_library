import { mdiDatabaseLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseLock(props: IconComponentProps) {
  return <Icon path={mdiDatabaseLock} {...props} />;
}

export { mdiDatabaseLock as path };
