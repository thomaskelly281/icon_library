import { mdiGlobeLight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GlobeLight(props: IconComponentProps) {
  return <Icon path={mdiGlobeLight} {...props} />;
}

export { mdiGlobeLight as path };
