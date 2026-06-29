import { mdiHomeGroupRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeGroupRemove(props: IconComponentProps) {
  return <Icon path={mdiHomeGroupRemove} {...props} />;
}

export { mdiHomeGroupRemove as path };
