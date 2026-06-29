import { mdiBellCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BellCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiBellCheckOutline} {...props} />;
}

export { mdiBellCheckOutline as path };
