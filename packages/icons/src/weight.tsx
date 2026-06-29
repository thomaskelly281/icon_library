import { mdiWeight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Weight(props: IconComponentProps) {
  return <Icon path={mdiWeight} {...props} />;
}

export { mdiWeight as path };
