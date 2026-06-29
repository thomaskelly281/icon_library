import { mdiLasso } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Lasso(props: IconComponentProps) {
  return <Icon path={mdiLasso} {...props} />;
}

export { mdiLasso as path };
