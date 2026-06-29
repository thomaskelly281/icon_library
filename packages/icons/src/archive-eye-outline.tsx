import { mdiArchiveEyeOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveEyeOutline(props: IconComponentProps) {
  return <Icon path={mdiArchiveEyeOutline} {...props} />;
}

export { mdiArchiveEyeOutline as path };
