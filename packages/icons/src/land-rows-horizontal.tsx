import { mdiLandRowsHorizontal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LandRowsHorizontal(props: IconComponentProps) {
  return <Icon path={mdiLandRowsHorizontal} {...props} />;
}

export { mdiLandRowsHorizontal as path };
