import { mdiShapePlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShapePlusOutline(props: IconComponentProps) {
  return <Icon path={mdiShapePlusOutline} {...props} />;
}

export { mdiShapePlusOutline as path };
