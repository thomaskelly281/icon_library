import { mdiEmailMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiEmailMinusOutline} {...props} />;
}

export { mdiEmailMinusOutline as path };
