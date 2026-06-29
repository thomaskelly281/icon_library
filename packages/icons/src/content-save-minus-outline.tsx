import { mdiContentSaveMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ContentSaveMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiContentSaveMinusOutline} {...props} />;
}

export { mdiContentSaveMinusOutline as path };
