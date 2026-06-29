import { mdiDatabaseEyeOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseEyeOff(props: IconComponentProps) {
  return <Icon path={mdiDatabaseEyeOff} {...props} />;
}

export { mdiDatabaseEyeOff as path };
