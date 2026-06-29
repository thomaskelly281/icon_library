import { mdiShakerOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShakerOutline(props: IconComponentProps) {
  return <Icon path={mdiShakerOutline} {...props} />;
}

export { mdiShakerOutline as path };
