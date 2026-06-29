import { mdiDirectionsFork } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DirectionsFork(props: IconComponentProps) {
  return <Icon path={mdiDirectionsFork} {...props} />;
}

export { mdiDirectionsFork as path };
