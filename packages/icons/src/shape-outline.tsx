import { mdiShapeOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShapeOutline(props: IconComponentProps) {
  return <Icon path={mdiShapeOutline} {...props} />;
}

export { mdiShapeOutline as path };
