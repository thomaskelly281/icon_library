import { mdiHeadPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeadPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiHeadPlusOutline} {...props} />;
}

export { mdiHeadPlusOutline as path };
