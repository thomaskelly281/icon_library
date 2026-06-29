import { mdiButterfly } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Butterfly(props: IconComponentProps) {
  return <Icon path={mdiButterfly} {...props} />;
}

export { mdiButterfly as path };
