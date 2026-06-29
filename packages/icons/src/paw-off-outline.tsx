import { mdiPawOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PawOffOutline(props: IconComponentProps) {
  return <Icon path={mdiPawOffOutline} {...props} />;
}

export { mdiPawOffOutline as path };
