import { mdiDotsVerticalCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DotsVerticalCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiDotsVerticalCircleOutline} {...props} />;
}

export { mdiDotsVerticalCircleOutline as path };
