import { mdiEmoticonPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiEmoticonPlusOutline} {...props} />;
}

export { mdiEmoticonPlusOutline as path };
