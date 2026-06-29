import { mdiSealVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SealVariant(props: IconComponentProps) {
  return <Icon path={mdiSealVariant} {...props} />;
}

export { mdiSealVariant as path };
