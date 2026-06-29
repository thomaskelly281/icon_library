import { mdiWrap } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Wrap(props: IconComponentProps) {
  return <Icon path={mdiWrap} {...props} />;
}

export { mdiWrap as path };
