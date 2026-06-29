import { mdiPercentBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PercentBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiPercentBoxOutline} {...props} />;
}

export { mdiPercentBoxOutline as path };
