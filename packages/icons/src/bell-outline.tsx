import { mdiBellOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BellOutline(props: IconComponentProps) {
  return <Icon path={mdiBellOutline} {...props} />;
}

export { mdiBellOutline as path };
