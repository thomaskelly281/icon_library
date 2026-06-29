import { mdiCircleOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CircleOffOutline(props: IconComponentProps) {
  return <Icon path={mdiCircleOffOutline} {...props} />;
}

export { mdiCircleOffOutline as path };
