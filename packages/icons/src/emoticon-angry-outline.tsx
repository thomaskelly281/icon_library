import { mdiEmoticonAngryOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonAngryOutline(props: IconComponentProps) {
  return <Icon path={mdiEmoticonAngryOutline} {...props} />;
}

export { mdiEmoticonAngryOutline as path };
