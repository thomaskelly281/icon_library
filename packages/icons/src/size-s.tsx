import { mdiSizeS } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SizeS(props: IconComponentProps) {
  return <Icon path={mdiSizeS} {...props} />;
}

export { mdiSizeS as path };
