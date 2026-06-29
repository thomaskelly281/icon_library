import { mdiBellCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BellCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiBellCircleOutline} {...props} />;
}

export { mdiBellCircleOutline as path };
