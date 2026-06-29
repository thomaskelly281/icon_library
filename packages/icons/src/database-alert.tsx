import { mdiDatabaseAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseAlert(props: IconComponentProps) {
  return <Icon path={mdiDatabaseAlert} {...props} />;
}

export { mdiDatabaseAlert as path };
