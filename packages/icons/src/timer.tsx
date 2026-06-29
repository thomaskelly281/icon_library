import { mdiTimer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Timer(props: IconComponentProps) {
  return <Icon path={mdiTimer} {...props} />;
}

export { mdiTimer as path };
