import { mdiTruckSnowflake } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TruckSnowflake(props: IconComponentProps) {
  return <Icon path={mdiTruckSnowflake} {...props} />;
}

export { mdiTruckSnowflake as path };
