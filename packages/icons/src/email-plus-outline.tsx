import { mdiEmailPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiEmailPlusOutline} {...props} />;
}

export { mdiEmailPlusOutline as path };
