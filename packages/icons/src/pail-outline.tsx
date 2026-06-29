import { mdiPailOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PailOutline(props: IconComponentProps) {
  return <Icon path={mdiPailOutline} {...props} />;
}

export { mdiPailOutline as path };
