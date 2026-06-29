import { mdiShareOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShareOutline(props: IconComponentProps) {
  return <Icon path={mdiShareOutline} {...props} />;
}

export { mdiShareOutline as path };
