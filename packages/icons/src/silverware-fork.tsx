import { mdiSilverwareFork } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SilverwareFork(props: IconComponentProps) {
  return <Icon path={mdiSilverwareFork} {...props} />;
}

export { mdiSilverwareFork as path };
