import { mdiOctagramPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function OctagramPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiOctagramPlusOutline} {...props} />;
}

export { mdiOctagramPlusOutline as path };
