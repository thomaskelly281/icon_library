import { mdiFolderClockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderClockOutline(props: IconComponentProps) {
  return <Icon path={mdiFolderClockOutline} {...props} />;
}

export { mdiFolderClockOutline as path };
