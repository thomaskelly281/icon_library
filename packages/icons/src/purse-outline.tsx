import { mdiPurseOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PurseOutline(props: IconComponentProps) {
  return <Icon path={mdiPurseOutline} {...props} />;
}

export { mdiPurseOutline as path };
