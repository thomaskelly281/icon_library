import { mdiDiameterVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DiameterVariant(props: IconComponentProps) {
  return <Icon path={mdiDiameterVariant} {...props} />;
}

export { mdiDiameterVariant as path };
