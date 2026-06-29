import { mdiExpansionCardVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ExpansionCardVariant(props: IconComponentProps) {
  return <Icon path={mdiExpansionCardVariant} {...props} />;
}

export { mdiExpansionCardVariant as path };
