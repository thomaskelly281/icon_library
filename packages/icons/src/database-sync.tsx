import { mdiDatabaseSync } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseSync(props: IconComponentProps) {
  return <Icon path={mdiDatabaseSync} {...props} />;
}

export { mdiDatabaseSync as path };
