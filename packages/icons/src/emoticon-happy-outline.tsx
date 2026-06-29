import { mdiEmoticonHappyOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonHappyOutline(props: IconComponentProps) {
  return <Icon path={mdiEmoticonHappyOutline} {...props} />;
}

export { mdiEmoticonHappyOutline as path };
