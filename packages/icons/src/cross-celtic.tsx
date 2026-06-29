import { mdiCrossCeltic } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CrossCeltic(props: IconComponentProps) {
  return <Icon path={mdiCrossCeltic} {...props} />;
}

export { mdiCrossCeltic as path };
