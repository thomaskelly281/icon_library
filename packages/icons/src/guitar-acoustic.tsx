import { mdiGuitarAcoustic } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GuitarAcoustic(props: IconComponentProps) {
  return <Icon path={mdiGuitarAcoustic} {...props} />;
}

export { mdiGuitarAcoustic as path };
