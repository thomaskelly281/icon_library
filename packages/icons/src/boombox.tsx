import { mdiBoombox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Boombox(props: IconComponentProps) {
  return <Icon path={mdiBoombox} {...props} />;
}

export { mdiBoombox as path };
