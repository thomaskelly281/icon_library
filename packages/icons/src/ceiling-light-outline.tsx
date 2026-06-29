import { mdiCeilingLightOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CeilingLightOutline(props: IconComponentProps) {
  return <Icon path={mdiCeilingLightOutline} {...props} />;
}

export { mdiCeilingLightOutline as path };
