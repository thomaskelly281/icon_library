import { mdiSquareRoundedOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SquareRoundedOutline(props: IconComponentProps) {
  return <Icon path={mdiSquareRoundedOutline} {...props} />;
}

export { mdiSquareRoundedOutline as path };
