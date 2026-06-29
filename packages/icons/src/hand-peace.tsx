import { mdiHandPeace } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HandPeace(props: IconComponentProps) {
  return <Icon path={mdiHandPeace} {...props} />;
}

export { mdiHandPeace as path };
