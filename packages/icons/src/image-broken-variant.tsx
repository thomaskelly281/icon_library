import { mdiImageBrokenVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageBrokenVariant(props: IconComponentProps) {
  return <Icon path={mdiImageBrokenVariant} {...props} />;
}

export { mdiImageBrokenVariant as path };
