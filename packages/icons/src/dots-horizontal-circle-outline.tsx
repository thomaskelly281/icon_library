import { mdiDotsHorizontalCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DotsHorizontalCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiDotsHorizontalCircleOutline} {...props} />;
}

export { mdiDotsHorizontalCircleOutline as path };
