import { mdiSnowflakeVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SnowflakeVariant(props: IconComponentProps) {
  return <Icon path={mdiSnowflakeVariant} {...props} />;
}

export { mdiSnowflakeVariant as path };
