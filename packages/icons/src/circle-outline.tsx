import { mdiCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CircleOutline(props: IconComponentProps) {
  return <Icon path={mdiCircleOutline} {...props} />;
}

export { mdiCircleOutline as path };
