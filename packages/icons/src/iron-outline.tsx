import { mdiIronOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function IronOutline(props: IconComponentProps) {
  return <Icon path={mdiIronOutline} {...props} />;
}

export { mdiIronOutline as path };
