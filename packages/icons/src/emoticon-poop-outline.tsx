import { mdiEmoticonPoopOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonPoopOutline(props: IconComponentProps) {
  return <Icon path={mdiEmoticonPoopOutline} {...props} />;
}

export { mdiEmoticonPoopOutline as path };
