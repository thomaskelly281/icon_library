import { mdiRotateRightVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RotateRightVariant(props: IconComponentProps) {
  return <Icon path={mdiRotateRightVariant} {...props} />;
}

export { mdiRotateRightVariant as path };
