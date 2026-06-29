import { mdiSunSnowflakeVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SunSnowflakeVariant(props: IconComponentProps) {
  return <Icon path={mdiSunSnowflakeVariant} {...props} />;
}

export { mdiSunSnowflakeVariant as path };
