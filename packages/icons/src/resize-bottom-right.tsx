import { mdiResizeBottomRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ResizeBottomRight(props: IconComponentProps) {
  return <Icon path={mdiResizeBottomRight} {...props} />;
}

export { mdiResizeBottomRight as path };
