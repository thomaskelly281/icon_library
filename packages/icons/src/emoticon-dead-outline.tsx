import { mdiEmoticonDeadOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonDeadOutline(props: IconComponentProps) {
  return <Icon path={mdiEmoticonDeadOutline} {...props} />;
}

export { mdiEmoticonDeadOutline as path };
