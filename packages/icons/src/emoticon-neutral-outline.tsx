import { mdiEmoticonNeutralOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonNeutralOutline(props: IconComponentProps) {
  return <Icon path={mdiEmoticonNeutralOutline} {...props} />;
}

export { mdiEmoticonNeutralOutline as path };
