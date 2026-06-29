import { mdiSortClockDescendingOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SortClockDescendingOutline(props: IconComponentProps) {
  return <Icon path={mdiSortClockDescendingOutline} {...props} />;
}

export { mdiSortClockDescendingOutline as path };
