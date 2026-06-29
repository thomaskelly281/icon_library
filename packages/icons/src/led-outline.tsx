import { mdiLedOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LedOutline(props: IconComponentProps) {
  return <Icon path={mdiLedOutline} {...props} />;
}

export { mdiLedOutline as path };
