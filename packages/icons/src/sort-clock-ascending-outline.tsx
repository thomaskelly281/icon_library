import { mdiSortClockAscendingOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SortClockAscendingOutline(props: IconComponentProps) {
  return <Icon path={mdiSortClockAscendingOutline} {...props} />;
}

export { mdiSortClockAscendingOutline as path };
