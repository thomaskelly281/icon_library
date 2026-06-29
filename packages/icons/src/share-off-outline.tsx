import { mdiShareOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShareOffOutline(props: IconComponentProps) {
  return <Icon path={mdiShareOffOutline} {...props} />;
}

export { mdiShareOffOutline as path };
