import { mdiPercentCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PercentCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiPercentCircleOutline} {...props} />;
}

export { mdiPercentCircleOutline as path };
