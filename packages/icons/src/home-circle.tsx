import { mdiHomeCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeCircle(props: IconComponentProps) {
  return <Icon path={mdiHomeCircle} {...props} />;
}

export { mdiHomeCircle as path };
