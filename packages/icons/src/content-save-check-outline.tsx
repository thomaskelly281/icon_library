import { mdiContentSaveCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ContentSaveCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiContentSaveCheckOutline} {...props} />;
}

export { mdiContentSaveCheckOutline as path };
