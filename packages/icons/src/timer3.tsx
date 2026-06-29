import { mdiTimer3 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Timer3(props: IconComponentProps) {
  return <Icon path={mdiTimer3} {...props} />;
}

export { mdiTimer3 as path };
