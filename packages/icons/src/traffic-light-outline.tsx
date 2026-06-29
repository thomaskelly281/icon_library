import { mdiTrafficLightOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TrafficLightOutline(props: IconComponentProps) {
  return <Icon path={mdiTrafficLightOutline} {...props} />;
}

export { mdiTrafficLightOutline as path };
