import { mdiSizeXxl } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SizeXxl(props: IconComponentProps) {
  return <Icon path={mdiSizeXxl} {...props} />;
}

export { mdiSizeXxl as path };
