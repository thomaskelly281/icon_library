import { mdiDatabaseCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseCheck(props: IconComponentProps) {
  return <Icon path={mdiDatabaseCheck} {...props} />;
}

export { mdiDatabaseCheck as path };
