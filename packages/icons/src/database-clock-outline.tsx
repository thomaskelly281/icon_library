import { mdiDatabaseClockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseClockOutline(props: IconComponentProps) {
  return <Icon path={mdiDatabaseClockOutline} {...props} />;
}

export { mdiDatabaseClockOutline as path };
