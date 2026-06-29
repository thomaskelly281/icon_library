import { mdiHeadSnowflakeOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeadSnowflakeOutline(props: IconComponentProps) {
  return <Icon path={mdiHeadSnowflakeOutline} {...props} />;
}

export { mdiHeadSnowflakeOutline as path };
