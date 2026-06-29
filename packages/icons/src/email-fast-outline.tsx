import { mdiEmailFastOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailFastOutline(props: IconComponentProps) {
  return <Icon path={mdiEmailFastOutline} {...props} />;
}

export { mdiEmailFastOutline as path };
