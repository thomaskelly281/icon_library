import { mdiBellOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BellOffOutline(props: IconComponentProps) {
  return <Icon path={mdiBellOffOutline} {...props} />;
}

export { mdiBellOffOutline as path };
