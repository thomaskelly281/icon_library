import { mdiSizeXs } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SizeXs(props: IconComponentProps) {
  return <Icon path={mdiSizeXs} {...props} />;
}

export { mdiSizeXs as path };
