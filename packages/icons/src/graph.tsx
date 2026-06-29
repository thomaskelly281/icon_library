import { mdiGraph } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Graph(props: IconComponentProps) {
  return <Icon path={mdiGraph} {...props} />;
}

export { mdiGraph as path };
