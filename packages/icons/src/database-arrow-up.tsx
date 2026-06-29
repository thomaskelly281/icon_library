import { mdiDatabaseArrowUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseArrowUp(props: IconComponentProps) {
  return <Icon path={mdiDatabaseArrowUp} {...props} />;
}

export { mdiDatabaseArrowUp as path };
