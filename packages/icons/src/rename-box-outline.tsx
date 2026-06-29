import { mdiRenameBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RenameBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiRenameBoxOutline} {...props} />;
}

export { mdiRenameBoxOutline as path };
