import { mdiRadiologyBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RadiologyBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiRadiologyBoxOutline} {...props} />;
}

export { mdiRadiologyBoxOutline as path };
