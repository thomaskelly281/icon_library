import { mdiMessageTextFast } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageTextFast(props: IconComponentProps) {
  return <Icon path={mdiMessageTextFast} {...props} />;
}

export { mdiMessageTextFast as path };
