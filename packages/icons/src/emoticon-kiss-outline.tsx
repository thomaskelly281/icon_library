import { mdiEmoticonKissOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonKissOutline(props: IconComponentProps) {
  return <Icon path={mdiEmoticonKissOutline} {...props} />;
}

export { mdiEmoticonKissOutline as path };
