import { mdiDatabaseCog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseCog(props: IconComponentProps) {
  return <Icon path={mdiDatabaseCog} {...props} />;
}

export { mdiDatabaseCog as path };
