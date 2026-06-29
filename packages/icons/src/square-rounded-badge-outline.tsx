import { mdiSquareRoundedBadgeOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SquareRoundedBadgeOutline(props: IconComponentProps) {
  return <Icon path={mdiSquareRoundedBadgeOutline} {...props} />;
}

export { mdiSquareRoundedBadgeOutline as path };
