import { mdiOctagramOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function OctagramOutline(props: IconComponentProps) {
  return <Icon path={mdiOctagramOutline} {...props} />;
}

export { mdiOctagramOutline as path };
