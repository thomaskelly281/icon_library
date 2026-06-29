import { mdiEmoticonConfusedOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonConfusedOutline(props: IconComponentProps) {
  return <Icon path={mdiEmoticonConfusedOutline} {...props} />;
}

export { mdiEmoticonConfusedOutline as path };
