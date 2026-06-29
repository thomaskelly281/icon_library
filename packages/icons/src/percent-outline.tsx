import { mdiPercentOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PercentOutline(props: IconComponentProps) {
  return <Icon path={mdiPercentOutline} {...props} />;
}

export { mdiPercentOutline as path };
