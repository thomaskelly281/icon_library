import { mdiArchivePlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchivePlusOutline(props: IconComponentProps) {
  return <Icon path={mdiArchivePlusOutline} {...props} />;
}

export { mdiArchivePlusOutline as path };
