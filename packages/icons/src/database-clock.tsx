import { mdiDatabaseClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseClock(props: IconComponentProps) {
  return <Icon path={mdiDatabaseClock} {...props} />;
}

export { mdiDatabaseClock as path };
