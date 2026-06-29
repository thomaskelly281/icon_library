import { mdiScaleBathroom } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ScaleBathroom(props: IconComponentProps) {
  return <Icon path={mdiScaleBathroom} {...props} />;
}

export { mdiScaleBathroom as path };
