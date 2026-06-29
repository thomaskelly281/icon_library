import { mdiSunSnowflake } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SunSnowflake(props: IconComponentProps) {
  return <Icon path={mdiSunSnowflake} {...props} />;
}

export { mdiSunSnowflake as path };
