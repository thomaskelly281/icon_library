import { mdiMinusBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MinusBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiMinusBoxOutline} {...props} />;
}

export { mdiMinusBoxOutline as path };
