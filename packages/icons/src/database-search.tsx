import { mdiDatabaseSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseSearch(props: IconComponentProps) {
  return <Icon path={mdiDatabaseSearch} {...props} />;
}

export { mdiDatabaseSearch as path };
