import { mdiBellCancelOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BellCancelOutline(props: IconComponentProps) {
  return <Icon path={mdiBellCancelOutline} {...props} />;
}

export { mdiBellCancelOutline as path };
