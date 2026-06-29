import { mdiFaceMask } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FaceMask(props: IconComponentProps) {
  return <Icon path={mdiFaceMask} {...props} />;
}

export { mdiFaceMask as path };
