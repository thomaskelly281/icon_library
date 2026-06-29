import { mdiTimelinePlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimelinePlusOutline(props: IconComponentProps) {
  return <Icon path={mdiTimelinePlusOutline} {...props} />;
}

export { mdiTimelinePlusOutline as path };
