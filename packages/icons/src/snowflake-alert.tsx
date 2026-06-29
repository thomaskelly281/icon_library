import { mdiSnowflakeAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SnowflakeAlert(props: IconComponentProps) {
  return <Icon path={mdiSnowflakeAlert} {...props} />;
}

export { mdiSnowflakeAlert as path };
