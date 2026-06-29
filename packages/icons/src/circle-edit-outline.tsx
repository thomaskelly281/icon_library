import { mdiCircleEditOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CircleEditOutline(props: IconComponentProps) {
  return <Icon path={mdiCircleEditOutline} {...props} />;
}

export { mdiCircleEditOutline as path };
