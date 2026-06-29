import { mdiRadiusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RadiusOutline(props: IconComponentProps) {
  return <Icon path={mdiRadiusOutline} {...props} />;
}

export { mdiRadiusOutline as path };
