import { mdiTrashCanOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TrashCanOutline(props: IconComponentProps) {
  return <Icon path={mdiTrashCanOutline} {...props} />;
}

export { mdiTrashCanOutline as path };
