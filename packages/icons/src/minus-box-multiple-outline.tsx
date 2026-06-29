import { mdiMinusBoxMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MinusBoxMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiMinusBoxMultipleOutline} {...props} />;
}

export { mdiMinusBoxMultipleOutline as path };
