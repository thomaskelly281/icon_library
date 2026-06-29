import { mdiSilverwareVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SilverwareVariant(props: IconComponentProps) {
  return <Icon path={mdiSilverwareVariant} {...props} />;
}

export { mdiSilverwareVariant as path };
