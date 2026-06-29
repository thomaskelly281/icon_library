import { mdiCrossBolnisi } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CrossBolnisi(props: IconComponentProps) {
  return <Icon path={mdiCrossBolnisi} {...props} />;
}

export { mdiCrossBolnisi as path };
