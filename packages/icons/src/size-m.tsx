import { mdiSizeM } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SizeM(props: IconComponentProps) {
  return <Icon path={mdiSizeM} {...props} />;
}

export { mdiSizeM as path };
