import { mdiRolodexOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RolodexOutline(props: IconComponentProps) {
  return <Icon path={mdiRolodexOutline} {...props} />;
}

export { mdiRolodexOutline as path };
