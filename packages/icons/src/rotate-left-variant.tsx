import { mdiRotateLeftVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RotateLeftVariant(props: IconComponentProps) {
  return <Icon path={mdiRotateLeftVariant} {...props} />;
}

export { mdiRotateLeftVariant as path };
