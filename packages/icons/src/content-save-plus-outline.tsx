import { mdiContentSavePlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ContentSavePlusOutline(props: IconComponentProps) {
  return <Icon path={mdiContentSavePlusOutline} {...props} />;
}

export { mdiContentSavePlusOutline as path };
