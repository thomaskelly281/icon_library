import { mdiDatabaseSettings } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseSettings(props: IconComponentProps) {
  return <Icon path={mdiDatabaseSettings} {...props} />;
}

export { mdiDatabaseSettings as path };
