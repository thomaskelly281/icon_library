import { mdiHomeRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeRemove(props: IconComponentProps) {
  return <Icon path={mdiHomeRemove} {...props} />;
}

export { mdiHomeRemove as path };
