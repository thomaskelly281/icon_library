import { mdiHandFrontRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HandFrontRight(props: IconComponentProps) {
  return <Icon path={mdiHandFrontRight} {...props} />;
}

export { mdiHandFrontRight as path };
