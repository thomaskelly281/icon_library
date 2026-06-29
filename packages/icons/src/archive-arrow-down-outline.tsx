import { mdiArchiveArrowDownOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveArrowDownOutline(props: IconComponentProps) {
  return <Icon path={mdiArchiveArrowDownOutline} {...props} />;
}

export { mdiArchiveArrowDownOutline as path };
