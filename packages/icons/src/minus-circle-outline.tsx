import { mdiMinusCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MinusCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiMinusCircleOutline} {...props} />;
}

export { mdiMinusCircleOutline as path };
