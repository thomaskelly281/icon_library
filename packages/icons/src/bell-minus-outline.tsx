import { mdiBellMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BellMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiBellMinusOutline} {...props} />;
}

export { mdiBellMinusOutline as path };
