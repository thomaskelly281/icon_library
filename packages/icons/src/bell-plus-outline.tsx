import { mdiBellPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BellPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiBellPlusOutline} {...props} />;
}

export { mdiBellPlusOutline as path };
