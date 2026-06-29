import { mdiArchiveSearchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveSearchOutline(props: IconComponentProps) {
  return <Icon path={mdiArchiveSearchOutline} {...props} />;
}

export { mdiArchiveSearchOutline as path };
