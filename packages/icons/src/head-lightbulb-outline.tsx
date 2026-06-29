import { mdiHeadLightbulbOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeadLightbulbOutline(props: IconComponentProps) {
  return <Icon path={mdiHeadLightbulbOutline} {...props} />;
}

export { mdiHeadLightbulbOutline as path };
