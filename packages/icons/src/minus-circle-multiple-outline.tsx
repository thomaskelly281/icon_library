import { mdiMinusCircleMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MinusCircleMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiMinusCircleMultipleOutline} {...props} />;
}

export { mdiMinusCircleMultipleOutline as path };
