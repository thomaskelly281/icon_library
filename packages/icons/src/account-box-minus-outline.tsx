import { mdiAccountBoxMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountBoxMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountBoxMinusOutline} {...props} />;
}

export { mdiAccountBoxMinusOutline as path };
