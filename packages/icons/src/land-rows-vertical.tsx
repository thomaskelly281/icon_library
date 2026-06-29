import { mdiLandRowsVertical } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LandRowsVertical(props: IconComponentProps) {
  return <Icon path={mdiLandRowsVertical} {...props} />;
}

export { mdiLandRowsVertical as path };
