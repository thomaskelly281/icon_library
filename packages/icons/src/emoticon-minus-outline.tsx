import { mdiEmoticonMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiEmoticonMinusOutline} {...props} />;
}

export { mdiEmoticonMinusOutline as path };
