import { mdiFlipToBack } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlipToBack(props: IconComponentProps) {
  return <Icon path={mdiFlipToBack} {...props} />;
}

export { mdiFlipToBack as path };
