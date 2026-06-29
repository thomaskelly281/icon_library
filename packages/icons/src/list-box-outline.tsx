import { mdiListBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ListBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiListBoxOutline} {...props} />;
}

export { mdiListBoxOutline as path };
