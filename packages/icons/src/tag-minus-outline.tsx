import { mdiTagMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TagMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiTagMinusOutline} {...props} />;
}

export { mdiTagMinusOutline as path };
