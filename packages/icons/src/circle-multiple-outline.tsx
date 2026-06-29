import { mdiCircleMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CircleMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiCircleMultipleOutline} {...props} />;
}

export { mdiCircleMultipleOutline as path };
