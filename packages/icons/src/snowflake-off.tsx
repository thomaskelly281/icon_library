import { mdiSnowflakeOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SnowflakeOff(props: IconComponentProps) {
  return <Icon path={mdiSnowflakeOff} {...props} />;
}

export { mdiSnowflakeOff as path };
