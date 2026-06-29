import { mdiFileMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiFileMinusOutline} {...props} />;
}

export { mdiFileMinusOutline as path };
