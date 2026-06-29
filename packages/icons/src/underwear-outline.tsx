import { mdiUnderwearOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function UnderwearOutline(props: IconComponentProps) {
  return <Icon path={mdiUnderwearOutline} {...props} />;
}

export { mdiUnderwearOutline as path };
