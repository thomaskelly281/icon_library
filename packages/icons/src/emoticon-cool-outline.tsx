import { mdiEmoticonCoolOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonCoolOutline(props: IconComponentProps) {
  return <Icon path={mdiEmoticonCoolOutline} {...props} />;
}

export { mdiEmoticonCoolOutline as path };
