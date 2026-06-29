import { mdiEmoticonDevilOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonDevilOutline(props: IconComponentProps) {
  return <Icon path={mdiEmoticonDevilOutline} {...props} />;
}

export { mdiEmoticonDevilOutline as path };
