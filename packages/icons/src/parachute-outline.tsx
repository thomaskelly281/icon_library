import { mdiParachuteOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ParachuteOutline(props: IconComponentProps) {
  return <Icon path={mdiParachuteOutline} {...props} />;
}

export { mdiParachuteOutline as path };
