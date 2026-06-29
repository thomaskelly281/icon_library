import { mdiArchiveCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiArchiveCheckOutline} {...props} />;
}

export { mdiArchiveCheckOutline as path };
