import { mdiDatabaseRefresh } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseRefresh(props: IconComponentProps) {
  return <Icon path={mdiDatabaseRefresh} {...props} />;
}

export { mdiDatabaseRefresh as path };
