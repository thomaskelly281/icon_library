import { mdiEmoticonWinkOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonWinkOutline(props: IconComponentProps) {
  return <Icon path={mdiEmoticonWinkOutline} {...props} />;
}

export { mdiEmoticonWinkOutline as path };
