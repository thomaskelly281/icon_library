import { mdiDatabaseArrowDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseArrowDown(props: IconComponentProps) {
  return <Icon path={mdiDatabaseArrowDown} {...props} />;
}

export { mdiDatabaseArrowDown as path };
