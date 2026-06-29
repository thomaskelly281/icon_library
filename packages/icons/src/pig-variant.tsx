import { mdiPigVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PigVariant(props: IconComponentProps) {
  return <Icon path={mdiPigVariant} {...props} />;
}

export { mdiPigVariant as path };
