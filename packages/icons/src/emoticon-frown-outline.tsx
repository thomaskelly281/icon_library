import { mdiEmoticonFrownOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonFrownOutline(props: IconComponentProps) {
  return <Icon path={mdiEmoticonFrownOutline} {...props} />;
}

export { mdiEmoticonFrownOutline as path };
