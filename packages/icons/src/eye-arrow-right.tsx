import { mdiEyeArrowRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EyeArrowRight(props: IconComponentProps) {
  return <Icon path={mdiEyeArrowRight} {...props} />;
}

export { mdiEyeArrowRight as path };
