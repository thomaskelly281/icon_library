import { mdiPailOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PailOffOutline(props: IconComponentProps) {
  return <Icon path={mdiPailOffOutline} {...props} />;
}

export { mdiPailOffOutline as path };
