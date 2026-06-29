import { mdiHandExtendedOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HandExtendedOutline(props: IconComponentProps) {
  return <Icon path={mdiHandExtendedOutline} {...props} />;
}

export { mdiHandExtendedOutline as path };
