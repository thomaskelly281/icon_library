import { mdiEmoticonLolOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonLolOutline(props: IconComponentProps) {
  return <Icon path={mdiEmoticonLolOutline} {...props} />;
}

export { mdiEmoticonLolOutline as path };
