import { mdiRotate3dVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Rotate3dVariant(props: IconComponentProps) {
  return <Icon path={mdiRotate3dVariant} {...props} />;
}

export { mdiRotate3dVariant as path };
