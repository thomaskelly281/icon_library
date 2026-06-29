import { mdiEmoticonRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiEmoticonRemoveOutline} {...props} />;
}

export { mdiEmoticonRemoveOutline as path };
