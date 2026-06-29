import { mdiTimer10 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Timer10(props: IconComponentProps) {
  return <Icon path={mdiTimer10} {...props} />;
}

export { mdiTimer10 as path };
