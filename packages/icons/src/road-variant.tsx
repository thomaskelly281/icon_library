import { mdiRoadVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RoadVariant(props: IconComponentProps) {
  return <Icon path={mdiRoadVariant} {...props} />;
}

export { mdiRoadVariant as path };
