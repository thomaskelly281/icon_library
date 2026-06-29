import { mdiBoomGateOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BoomGateOutline(props: IconComponentProps) {
  return <Icon path={mdiBoomGateOutline} {...props} />;
}

export { mdiBoomGateOutline as path };
