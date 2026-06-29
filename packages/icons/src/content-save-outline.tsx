import { mdiContentSaveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ContentSaveOutline(props: IconComponentProps) {
  return <Icon path={mdiContentSaveOutline} {...props} />;
}

export { mdiContentSaveOutline as path };
