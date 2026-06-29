import { mdiViewAgenda } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewAgenda(props: IconComponentProps) {
  return <Icon path={mdiViewAgenda} {...props} />;
}

export { mdiViewAgenda as path };
