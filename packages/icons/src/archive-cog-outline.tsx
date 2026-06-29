import { mdiArchiveCogOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveCogOutline(props: IconComponentProps) {
  return <Icon path={mdiArchiveCogOutline} {...props} />;
}

export { mdiArchiveCogOutline as path };
