import { mdiRenameOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RenameOutline(props: IconComponentProps) {
  return <Icon path={mdiRenameOutline} {...props} />;
}

export { mdiRenameOutline as path };
