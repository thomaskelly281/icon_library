import { mdiRotateRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RotateRight(props: IconComponentProps) {
  return <Icon path={mdiRotateRight} {...props} />;
}

export { mdiRotateRight as path };
