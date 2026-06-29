import { mdiSnowflake } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Snowflake(props: IconComponentProps) {
  return <Icon path={mdiSnowflake} {...props} />;
}

export { mdiSnowflake as path };
