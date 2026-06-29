import { mdiSizeL } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SizeL(props: IconComponentProps) {
  return <Icon path={mdiSizeL} {...props} />;
}

export { mdiSizeL as path };
