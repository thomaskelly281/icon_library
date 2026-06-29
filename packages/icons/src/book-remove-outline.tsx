import { mdiBookRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiBookRemoveOutline} {...props} />;
}

export { mdiBookRemoveOutline as path };
