import { mdiArchiveStarOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveStarOutline(props: IconComponentProps) {
  return <Icon path={mdiArchiveStarOutline} {...props} />;
}

export { mdiArchiveStarOutline as path };
