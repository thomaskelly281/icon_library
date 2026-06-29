import { mdiFlipVertical } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlipVertical(props: IconComponentProps) {
  return <Icon path={mdiFlipVertical} {...props} />;
}

export { mdiFlipVertical as path };
