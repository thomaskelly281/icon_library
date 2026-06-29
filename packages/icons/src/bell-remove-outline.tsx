import { mdiBellRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BellRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiBellRemoveOutline} {...props} />;
}

export { mdiBellRemoveOutline as path };
