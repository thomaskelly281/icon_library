import { mdiContentSaveAllOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ContentSaveAllOutline(props: IconComponentProps) {
  return <Icon path={mdiContentSaveAllOutline} {...props} />;
}

export { mdiContentSaveAllOutline as path };
