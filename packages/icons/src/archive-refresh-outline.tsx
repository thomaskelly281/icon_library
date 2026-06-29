import { mdiArchiveRefreshOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveRefreshOutline(props: IconComponentProps) {
  return <Icon path={mdiArchiveRefreshOutline} {...props} />;
}

export { mdiArchiveRefreshOutline as path };
