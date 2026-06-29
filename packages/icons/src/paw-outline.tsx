import { mdiPawOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PawOutline(props: IconComponentProps) {
  return <Icon path={mdiPawOutline} {...props} />;
}

export { mdiPawOutline as path };
