import { mdiLeafCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LeafCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiLeafCircleOutline} {...props} />;
}

export { mdiLeafCircleOutline as path };
