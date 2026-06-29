import { mdiEyeArrowLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EyeArrowLeft(props: IconComponentProps) {
  return <Icon path={mdiEyeArrowLeft} {...props} />;
}

export { mdiEyeArrowLeft as path };
