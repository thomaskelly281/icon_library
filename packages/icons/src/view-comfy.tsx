import { mdiViewComfy } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewComfy(props: IconComponentProps) {
  return <Icon path={mdiViewComfy} {...props} />;
}

export { mdiViewComfy as path };
