import { mdiMinusCircleOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MinusCircleOffOutline(props: IconComponentProps) {
  return <Icon path={mdiMinusCircleOffOutline} {...props} />;
}

export { mdiMinusCircleOffOutline as path };
