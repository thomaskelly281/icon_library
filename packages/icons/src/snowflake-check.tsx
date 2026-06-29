import { mdiSnowflakeCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SnowflakeCheck(props: IconComponentProps) {
  return <Icon path={mdiSnowflakeCheck} {...props} />;
}

export { mdiSnowflakeCheck as path };
