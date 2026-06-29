import { mdiSizeXxxl } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SizeXxxl(props: IconComponentProps) {
  return <Icon path={mdiSizeXxxl} {...props} />;
}

export { mdiSizeXxxl as path };
