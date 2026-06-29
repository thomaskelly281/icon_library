import { mdiDatabaseEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseEdit(props: IconComponentProps) {
  return <Icon path={mdiDatabaseEdit} {...props} />;
}

export { mdiDatabaseEdit as path };
