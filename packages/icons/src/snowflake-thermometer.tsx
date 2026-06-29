import { mdiSnowflakeThermometer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SnowflakeThermometer(props: IconComponentProps) {
  return <Icon path={mdiSnowflakeThermometer} {...props} />;
}

export { mdiSnowflakeThermometer as path };
