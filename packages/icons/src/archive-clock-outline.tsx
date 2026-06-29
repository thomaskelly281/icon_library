import { mdiArchiveClockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveClockOutline(props: IconComponentProps) {
  return <Icon path={mdiArchiveClockOutline} {...props} />;
}

export { mdiArchiveClockOutline as path };
