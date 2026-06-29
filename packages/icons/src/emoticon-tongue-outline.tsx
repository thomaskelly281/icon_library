import { mdiEmoticonTongueOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonTongueOutline(props: IconComponentProps) {
  return <Icon path={mdiEmoticonTongueOutline} {...props} />;
}

export { mdiEmoticonTongueOutline as path };
