import { mdiDatabaseMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseMinus(props: IconComponentProps) {
  return <Icon path={mdiDatabaseMinus} {...props} />;
}

export { mdiDatabaseMinus as path };
