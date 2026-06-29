import { mdiCircleBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CircleBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiCircleBoxOutline} {...props} />;
}

export { mdiCircleBoxOutline as path };
