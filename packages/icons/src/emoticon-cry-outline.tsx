import { mdiEmoticonCryOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonCryOutline(props: IconComponentProps) {
  return <Icon path={mdiEmoticonCryOutline} {...props} />;
}

export { mdiEmoticonCryOutline as path };
