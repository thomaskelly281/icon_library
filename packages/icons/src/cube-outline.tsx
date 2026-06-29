import { mdiCubeOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CubeOutline(props: IconComponentProps) {
  return <Icon path={mdiCubeOutline} {...props} />;
}

export { mdiCubeOutline as path };
