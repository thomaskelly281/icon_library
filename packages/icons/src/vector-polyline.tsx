import { mdiVectorPolyline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VectorPolyline(props: IconComponentProps) {
  return <Icon path={mdiVectorPolyline} {...props} />;
}

export { mdiVectorPolyline as path };
