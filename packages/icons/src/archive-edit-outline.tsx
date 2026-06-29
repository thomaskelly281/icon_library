import { mdiArchiveEditOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveEditOutline(props: IconComponentProps) {
  return <Icon path={mdiArchiveEditOutline} {...props} />;
}

export { mdiArchiveEditOutline as path };
