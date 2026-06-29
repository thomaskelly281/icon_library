import { mdiEmoticonOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonOutline(props: IconComponentProps) {
  return <Icon path={mdiEmoticonOutline} {...props} />;
}

export { mdiEmoticonOutline as path };
