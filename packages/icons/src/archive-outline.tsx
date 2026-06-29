import { mdiArchiveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveOutline(props: IconComponentProps) {
  return <Icon path={mdiArchiveOutline} {...props} />;
}

export { mdiArchiveOutline as path };
