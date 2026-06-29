import { mdiHeadSnowflake } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeadSnowflake(props: IconComponentProps) {
  return <Icon path={mdiHeadSnowflake} {...props} />;
}

export { mdiHeadSnowflake as path };
