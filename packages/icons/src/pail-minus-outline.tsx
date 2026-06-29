import { mdiPailMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PailMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiPailMinusOutline} {...props} />;
}

export { mdiPailMinusOutline as path };
