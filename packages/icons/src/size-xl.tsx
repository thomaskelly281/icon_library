import { mdiSizeXl } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SizeXl(props: IconComponentProps) {
  return <Icon path={mdiSizeXl} {...props} />;
}

export { mdiSizeXl as path };
