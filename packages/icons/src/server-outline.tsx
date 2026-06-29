import { mdiServerOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ServerOutline(props: IconComponentProps) {
  return <Icon path={mdiServerOutline} {...props} />;
}

export { mdiServerOutline as path };
