import { mdiVideoHighDefinition } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VideoHighDefinition(props: IconComponentProps) {
  return <Icon path={mdiVideoHighDefinition} {...props} />;
}

export { mdiVideoHighDefinition as path };
