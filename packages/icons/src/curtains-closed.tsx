import { mdiCurtainsClosed } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CurtainsClosed(props: IconComponentProps) {
  return <Icon path={mdiCurtainsClosed} {...props} />;
}

export { mdiCurtainsClosed as path };
