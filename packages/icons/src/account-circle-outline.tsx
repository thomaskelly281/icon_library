import { mdiAccountCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountCircleOutline} {...props} />;
}

export { mdiAccountCircleOutline as path };
